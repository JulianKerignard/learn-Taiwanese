/**
 * Fix script: ensure every optionsHint: [ has its closing ],
 * before optionsKana starts.
 *
 * Also remove any optionsKana that has incomplete/bad conversions
 * (contains raw romaji mixed with kana).
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const courseDir = 'src/data/course';

function fixFile(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const newLines = [];
  let modified = false;
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Detect optionsHint: [ on its own line (multi-line format)
    if (line.match(/^\s*optionsHint:\s*\[/) && !line.includes('],')) {
      // This is a multi-line optionsHint. Find its closing ],
      newLines.push(line);
      i++;

      // Read until we find ], or optionsKana (which means ], was eaten)
      while (i < lines.length) {
        if (lines[i].match(/^\s*optionsKana:/)) {
          // The ], of optionsHint was eaten! Insert it
          const indent = line.match(/^(\s*)/)[1];
          newLines.push(`${indent}],`);
          modified = true;
          break;
        }
        newLines.push(lines[i]);
        if (lines[i].includes('],')) {
          i++;
          break;
        }
        i++;
      }
      continue;
    }

    // Detect optionsKana that contain raw romaji (bad conversions)
    if (line.match(/^\s*optionsKana:/)) {
      // Check if this line or subsequent lines contain Latin letters mixed with kana
      // (indicating bad conversion)
      let blockStr = line;
      let blockEnd = i;

      if (!line.includes('],')) {
        // Multi-line
        for (let j = i + 1; j < lines.length; j++) {
          blockStr += lines[j];
          if (lines[j].includes('],')) {
            blockEnd = j;
            break;
          }
        }
      }

      // Check for mixed romaji+kana (bad conversion)
      // A good optionsKana should only have kana chars, spaces, punctuation, tone marks
      // Bad ones contain Latin letters like "zhè", "nǎ", etc.
      const hasLatinPinyin = /[a-zA-Zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]{2,}/.test(
        blockStr.replace(/LINE|SIM|WiFi|OK|APP/g, '') // Keep known English words
      );

      if (hasLatinPinyin) {
        // Skip this bad optionsKana entirely
        console.log(`  Removing bad optionsKana in ${filePath} at line ${i + 1}`);
        if (blockEnd > i) {
          i = blockEnd + 1;
        } else {
          i++;
        }
        modified = true;
        continue;
      }
    }

    newLines.push(line);
    i++;
  }

  if (modified) {
    writeFileSync(filePath, newLines.join('\n'));
    console.log(`[FIXED] ${filePath}`);
    return true;
  }
  return false;
}

const chapters = ['chapter1', 'chapter2', 'chapter3', 'chapter4', 'chapter5', 'chapter6', 'chapter7'];
let totalFixed = 0;

for (const chapter of chapters) {
  const chapterDir = join(courseDir, chapter);
  try {
    const files = readdirSync(chapterDir).filter(f => f.endsWith('.ts'));
    for (const file of files) {
      if (fixFile(join(chapterDir, file))) totalFixed++;
    }
  } catch (e) {}
}

console.log(`\nTotal files fixed: ${totalFixed}`);
