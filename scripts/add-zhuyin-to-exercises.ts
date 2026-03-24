/**
 * Script to add optionsZhuyin and hintZhuyin to all exercise files.
 *
 * This script:
 * 1. Adds optionsZhuyin to exercises that have optionsHint (chapters 1-3)
 * 2. Adds hintZhuyin to exercises that have hint in pinyin
 * 3. Adds optionsHint AND optionsZhuyin to chapters 4-8 exercises with Chinese options
 *
 * Run with: npx tsx scripts/add-zhuyin-to-exercises.ts
 */

// Pinyin to Zhuyin conversion map
const pinyinToZhuyinMap: Record<string, string> = {
  // Initials
  'b': 'ㄅ', 'p': 'ㄆ', 'm': 'ㄇ', 'f': 'ㄈ',
  'd': 'ㄉ', 't': 'ㄊ', 'n': 'ㄋ', 'l': 'ㄌ',
  'g': 'ㄍ', 'k': 'ㄎ', 'h': 'ㄏ',
  'j': 'ㄐ', 'q': 'ㄑ', 'x': 'ㄒ',
  'zh': 'ㄓ', 'ch': 'ㄔ', 'sh': 'ㄕ', 'r': 'ㄖ',
  'z': 'ㄗ', 'c': 'ㄘ', 's': 'ㄙ',
  // Finals
  'a': 'ㄚ', 'o': 'ㄛ', 'e': 'ㄜ', 'ê': 'ㄝ',
  'ai': 'ㄞ', 'ei': 'ㄟ', 'ao': 'ㄠ', 'ou': 'ㄡ',
  'an': 'ㄢ', 'en': 'ㄣ', 'ang': 'ㄤ', 'eng': 'ㄥ',
  'er': 'ㄦ',
  'i': 'ㄧ', 'u': 'ㄨ', 'ü': 'ㄩ',
  'ia': 'ㄧㄚ', 'ie': 'ㄧㄝ', 'iao': 'ㄧㄠ', 'iu': 'ㄧㄡ',
  'ian': 'ㄧㄢ', 'in': 'ㄧㄣ', 'iang': 'ㄧㄤ', 'ing': 'ㄧㄥ',
  'ua': 'ㄨㄚ', 'uo': 'ㄨㄛ', 'uai': 'ㄨㄞ', 'ui': 'ㄨㄟ',
  'uan': 'ㄨㄢ', 'un': 'ㄨㄣ', 'uang': 'ㄨㄤ', 'ong': 'ㄨㄥ',
  'üe': 'ㄩㄝ', 'üan': 'ㄩㄢ', 'ün': 'ㄩㄣ', 'iong': 'ㄩㄥ',
};

// Tone marks for removal
const toneMap: Record<string, [string, number]> = {
  'ā': ['a', 1], 'á': ['a', 2], 'ǎ': ['a', 3], 'à': ['a', 4],
  'ē': ['e', 1], 'é': ['e', 2], 'ě': ['e', 3], 'è': ['e', 4],
  'ī': ['i', 1], 'í': ['i', 2], 'ǐ': ['i', 3], 'ì': ['i', 4],
  'ō': ['o', 1], 'ó': ['o', 2], 'ǒ': ['o', 3], 'ò': ['o', 4],
  'ū': ['u', 1], 'ú': ['u', 2], 'ǔ': ['u', 3], 'ù': ['u', 4],
  'ǖ': ['ü', 1], 'ǘ': ['ü', 2], 'ǚ': ['ü', 3], 'ǜ': ['ü', 4],
};

const toneMarks = ['', '', 'ˊ', 'ˇ', 'ˋ', '˙'];

function removeTone(char: string): [string, number] {
  if (toneMap[char]) return toneMap[char];
  return [char, 0];
}

function pinyinSyllableToZhuyin(syllable: string): string {
  if (!syllable || syllable.trim() === '') return '';

  // Remove punctuation at end
  let punct = '';
  const punctMatch = syllable.match(/[?!.,;:！？。，；：]$/);
  if (punctMatch) {
    punct = punctMatch[0];
    syllable = syllable.slice(0, -punct.length);
  }

  if (!syllable) return punct;

  // Check if it's not pinyin (numbers, English words, etc.)
  if (/^[A-Z]/.test(syllable) && !/^[A-Z][a-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/.test(syllable)) {
    return syllable + punct;
  }

  // Extract tone
  let tone = 0;
  let base = '';
  for (const char of syllable) {
    const [baseChar, t] = removeTone(char);
    base += baseChar;
    if (t > 0) tone = t;
  }

  base = base.toLowerCase();

  // Special cases
  if (base === 'r' && syllable.length <= 2) {
    // standalone 'r' as in 'er' sound
    return 'ㄦ' + (tone > 0 ? toneMarks[tone] : '') + punct;
  }

  // Initials (order matters - check longer ones first)
  const initials = ['zh', 'ch', 'sh', 'b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'r', 'z', 'c', 's'];

  let initial = '';
  let final = base;

  for (const ini of initials) {
    if (base.startsWith(ini)) {
      initial = ini;
      final = base.slice(ini.length);
      break;
    }
  }

  // Handle special finals
  // After j, q, x: u -> ü
  if (['j', 'q', 'x'].includes(initial)) {
    if (final.startsWith('u')) {
      final = 'ü' + final.slice(1);
    }
  }

  // yi -> i, wu -> u, yu -> ü
  if (!initial) {
    if (base.startsWith('yi')) { final = 'i' + base.slice(2); }
    else if (base.startsWith('y')) {
      if (base.startsWith('yu')) { final = 'ü' + base.slice(2); }
      else { final = 'i' + base.slice(1); }
    }
    else if (base.startsWith('wu')) { final = 'u' + base.slice(2); }
    else if (base.startsWith('w')) { final = 'u' + base.slice(1); }
  }

  // Convert initial
  let zhuyinInitial = initial ? (pinyinToZhuyinMap[initial] || '') : '';

  // Convert final
  let zhuyinFinal = '';

  // Try matching longest finals first
  const finals = [
    'iong', 'iang', 'uang', 'iao', 'ian', 'uai', 'uan',
    'üan', 'üe', 'ün', 'ia', 'ie', 'iu', 'in', 'ing',
    'ua', 'uo', 'ui', 'un', 'ai', 'ei', 'ao', 'ou',
    'an', 'en', 'ang', 'eng', 'ong', 'er',
    'a', 'o', 'e', 'i', 'u', 'ü'
  ];

  for (const f of finals) {
    if (final === f) {
      zhuyinFinal = pinyinToZhuyinMap[f] || '';
      break;
    }
  }

  // Special: zhi, chi, shi, ri, zi, ci, si - the 'i' is silent (空韻)
  if (['zh', 'ch', 'sh', 'r', 'z', 'c', 's'].includes(initial) && final === 'i') {
    zhuyinFinal = '';
  }

  // Tone mark
  const toneMark = tone > 0 ? toneMarks[tone] : '';
  // Neutral tone (tone 5 / light tone)
  const neutralTone = syllable.endsWith('˙') || false;

  const result = zhuyinInitial + zhuyinFinal + toneMark;
  return (result || syllable) + punct;
}

export function pinyinToZhuyin(pinyin: string): string {
  if (!pinyin) return '';

  // Split by spaces and convert each syllable
  return pinyin.split(/\s+/).map(word => {
    // Handle special characters that aren't pinyin
    if (/^[0-9]+$/.test(word)) return word;
    if (/^[A-Z]+$/.test(word)) return word; // Acronyms like LINE, WiFi
    if (word === '...' || word === '—' || word === '-') return word;
    if (word === 'vs') return word;

    return pinyinSyllableToZhuyin(word);
  }).join(' ');
}

// Test
console.log('Test conversions:');
console.log('wǒ ->', pinyinToZhuyin('wǒ'));
console.log('shì ->', pinyinToZhuyin('shì'));
console.log('Fǎguó ->', pinyinToZhuyin('Fǎguó'));
console.log('rén ->', pinyinToZhuyin('rén'));
console.log('nǐ hǎo ->', pinyinToZhuyin('nǐ hǎo'));
console.log('xièxiè ->', pinyinToZhuyin('xièxiè'));
console.log('zhōngwén ->', pinyinToZhuyin('zhōngwén'));
console.log('duōshǎo qián? ->', pinyinToZhuyin('duōshǎo qián?'));
console.log('wǒ shì Fǎguó rén ->', pinyinToZhuyin('wǒ shì Fǎguó rén'));
