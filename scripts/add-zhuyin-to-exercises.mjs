/**
 * Script to add optionsZhuyin and hintZhuyin to all exercise files.
 *
 * Run: node scripts/add-zhuyin-to-exercises.mjs
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

// Complete pinyin syllable -> zhuyin mapping
const PINYIN_ZHUYIN = {
  // Common full syllables encountered in the exercises
  'wǒ': 'ㄨㄛˇ', 'wǒ': 'ㄨㄛˇ', 'wо̌': 'ㄨㄛˇ',
  'shì': 'ㄕˋ', 'bù': 'ㄅㄨˋ', 'bú': 'ㄅㄨˊ',
  'hǎo': 'ㄏㄠˇ', 'lái': 'ㄌㄞˊ', 'ma': 'ㄇㄚ', 'ne': 'ㄋㄜ˙',
  'ba': 'ㄅㄚ˙', 'a': 'ㄚ˙', 'la': 'ㄌㄚ˙',
  'nǐ': 'ㄋㄧˇ', 'tā': 'ㄊㄚ', 'wǒmen': 'ㄨㄛˇ ㄇㄣ˙',
  'rén': 'ㄖㄣˊ', 'de': 'ㄉㄜ˙',
  'jiào': 'ㄐㄧㄠˋ', 'zuò': 'ㄗㄨㄛˋ', 'yǒu': 'ㄧㄡˇ',
  'shénme': 'ㄕㄣˊ ㄇㄜ˙', 'nǎlǐ': 'ㄋㄚˇ ㄌㄧˇ',
  'zěnme': 'ㄗㄣˇ ㄇㄜ˙', 'shéi': 'ㄕㄟˊ',
  'wèishénme': 'ㄨㄟˋ ㄕㄣˊ ㄇㄜ˙',
  'duōshǎo': 'ㄉㄨㄛ ㄕㄠˇ', 'qián': 'ㄑㄧㄢˊ',
  'jǐ': 'ㄐㄧˇ', 'ge': '˙ㄍㄜ', 'gè': 'ㄍㄜˋ',
  'Fǎguó': 'ㄈㄚˇ ㄍㄨㄛˊ', 'Táiwān': 'ㄊㄞˊ ㄨㄢ',
  'Táiběi': 'ㄊㄞˊ ㄅㄟˇ', 'Gāoxióng': 'ㄍㄠ ㄒㄩㄥˊ',
  'xuéshēng': 'ㄒㄩㄝˊ ㄕㄥ', 'lǎoshī': 'ㄌㄠˇ ㄕ',
  'yě': 'ㄧㄝˇ', 'dōu': 'ㄉㄡ',
  'hěn': 'ㄏㄣˇ', 'zuì': 'ㄗㄨㄟˋ', 'gèng': 'ㄍㄥˋ',
  'bǐ': 'ㄅㄧˇ', 'tài': 'ㄊㄞˋ',
  'le': 'ㄌㄜ˙', 'guò': 'ㄍㄨㄛˋ', 'huì': 'ㄏㄨㄟˋ',
  'zài': 'ㄗㄞˋ', 'méi': 'ㄇㄟˊ', 'méiyǒu': 'ㄇㄟˊ ㄧㄡˇ',
  'qù': 'ㄑㄩˋ', 'dào': 'ㄉㄠˋ', 'lái': 'ㄌㄞˊ',
  'chī': 'ㄔ', 'hē': 'ㄏㄜ', 'mǎi': 'ㄇㄞˇ', 'mài': 'ㄇㄞˋ',
  'kàn': 'ㄎㄢˋ', 'xiě': 'ㄒㄧㄝˇ', 'shuō': 'ㄕㄨㄛ',
  'xué': 'ㄒㄩㄝˊ', 'zhù': 'ㄓㄨˋ',
  'yào': 'ㄧㄠˋ', 'xiǎng': 'ㄒㄧㄤˇ',
  'kěyǐ': 'ㄎㄜˇ ㄧˇ', 'néng': 'ㄋㄥˊ',
  'zhīdào': 'ㄓ ㄉㄠˋ',
  'xǐhuān': 'ㄒㄧˇ ㄏㄨㄢ', 'juéde': 'ㄐㄩㄝˊ ㄉㄜ˙',
  'piàoliang': 'ㄆㄧㄠˋ ˙ㄌㄧㄤ',
  'hǎochī': 'ㄏㄠˇ ㄔ', 'hǎohē': 'ㄏㄠˇ ㄏㄜ',
  'hǎokàn': 'ㄏㄠˇ ㄎㄢˋ', 'hǎowán': 'ㄏㄠˇ ㄨㄢˊ',
  'guì': 'ㄍㄨㄟˋ', 'piányi': 'ㄆㄧㄢˊ ㄧˊ',
  'dà': 'ㄉㄚˋ', 'xiǎo': 'ㄒㄧㄠˇ',
  'rè': 'ㄖㄜˋ', 'lěng': 'ㄌㄥˇ',
  'là': 'ㄌㄚˋ', 'tián': 'ㄊㄧㄢˊ', 'xián': 'ㄒㄧㄢˊ', 'suān': 'ㄙㄨㄢ',
  'duì': 'ㄉㄨㄟˋ', 'cuò': 'ㄘㄨㄛˋ',
  'háihǎo': 'ㄏㄞˊ ㄏㄠˇ', 'búcuò': 'ㄅㄨˊ ㄘㄨㄛˋ',
  'liǎng': 'ㄌㄧㄤˇ', 'èr': 'ㄦˋ',
  'shuāng': 'ㄕㄨㄤ', 'liǎ': 'ㄌㄧㄚˇ',
  'yī': 'ㄧ', 'èrshíwǔ': 'ㄦˋ ㄕˊ ㄨˇ',
  'wǔ': 'ㄨˇ', 'shí': 'ㄕˊ',
  'bēi': 'ㄅㄟ', 'wǎn': 'ㄨㄢˇ', 'píng': 'ㄆㄧㄥˊ',
  'běn': 'ㄅㄣˇ', 'zhāng': 'ㄓㄤ', 'tiáo': 'ㄊㄧㄠˊ',
  'zhī': 'ㄓ', 'liàng': 'ㄌㄧㄤˋ', 'tái': 'ㄊㄞˊ',
  'jiàn': 'ㄐㄧㄢˋ',
  'míngtiān': 'ㄇㄧㄥˊ ㄊㄧㄢ',
  'diǎn': 'ㄉㄧㄢˇ', 'bàn': 'ㄅㄢˋ',
  'jiàn': 'ㄐㄧㄢˋ',
  'xīngqīsān': 'ㄒㄧㄥ ㄑㄧ ㄙㄢ',
  'xiànzài': 'ㄒㄧㄢˋ ㄗㄞˋ',
  'sān': 'ㄙㄢ',
  // Transport
  'jiéyùn': 'ㄐㄧㄝˊ ㄩㄣˋ', 'gōngchē': 'ㄍㄨㄥ ㄔㄜ',
  'jìchéngchē': 'ㄐㄧˋ ㄔㄥˊ ㄔㄜ', 'gāotiě': 'ㄍㄠ ㄊㄧㄝˇ',
  'chēzhàn': 'ㄔㄜ ㄓㄢˋ', 'zhàn': 'ㄓㄢˋ',
  'zǒu': 'ㄗㄡˇ',
  'jiāzhí': 'ㄐㄧㄚ ㄓˊ',
  // Directions
  'zuǒ': 'ㄗㄨㄛˇ', 'yòu': 'ㄧㄡˋ',
  'qián': 'ㄑㄧㄢˊ', 'hòu': 'ㄏㄡˋ',
  'zhí': 'ㄓˊ', 'zhuǎn': 'ㄓㄨㄢˇ',
  'zuǒbiān': 'ㄗㄨㄛˇ ㄅㄧㄢ', 'yòubiān': 'ㄧㄡˋ ㄅㄧㄢ',
  'qiánmiàn': 'ㄑㄧㄢˊ ㄇㄧㄢˋ', 'hòumiàn': 'ㄏㄡˋ ㄇㄧㄢˋ',
  // Health
  'yīshēng': 'ㄧ ㄕㄥ', 'yàojú': 'ㄧㄠˋ ㄐㄩˊ', 'yīyuàn': 'ㄧ ㄩㄢˋ',
  'tóu': 'ㄊㄡˊ', 'tòng': 'ㄊㄨㄥˋ', 'dùzi': 'ㄉㄨˋ ㄗ˙',
  'gǎnmào': 'ㄍㄢˇ ㄇㄠˋ', 'fāshāo': 'ㄈㄚ ㄕㄠ',
  'shūfu': 'ㄕㄨ ㄈㄨ˙',
  'hùshi': 'ㄏㄨˋ ㄕˋ',
  // Food
  'niúròu': 'ㄋㄧㄡˊ ㄖㄡˋ', 'miàn': 'ㄇㄧㄢˋ',
  'lǔròufàn': 'ㄌㄨˇ ㄖㄡˋ ㄈㄢˋ',
  'biàndāng': 'ㄅㄧㄢˋ ㄉㄤ', 'wàidài': 'ㄨㄞˋ ㄉㄞˋ',
  'nèiyòng': 'ㄋㄟˋ ㄩㄥˋ', 'háishì': 'ㄏㄞˊ ㄕˋ',
  'jiārè': 'ㄐㄧㄚ ㄖㄜˋ',
  'sùshí': 'ㄙㄨˋ ㄕˊ',
  // Misc
  'gěi': 'ㄍㄟˇ', 'yòng': 'ㄩㄥˋ',
  'fàn': 'ㄈㄢˋ', 'shuǐ': 'ㄕㄨㄟˇ',
  'zhōngwén': 'ㄓㄨㄥ ㄨㄣˊ',
  'yīnwèi': 'ㄧㄣ ㄨㄟˋ', 'suǒyǐ': 'ㄙㄨㄛˇ ㄧˇ',
  'kěshì': 'ㄎㄜˇ ㄕˋ', 'dànshì': 'ㄉㄢˋ ㄕˋ',
  'xiān': 'ㄒㄧㄢ', 'ránhòu': 'ㄖㄢˊ ㄏㄡˋ',
  'yǐjīng': 'ㄧˇ ㄐㄧㄥ',
  'hái': 'ㄏㄞˊ', 'zài': 'ㄗㄞˋ',
  'duōjiǔ': 'ㄉㄨㄛ ㄐㄧㄡˇ', 'duōshǎo': 'ㄉㄨㄛ ㄕㄠˇ',
  'shénme': 'ㄕㄣˊ ㄇㄜ˙',
  'kěnéng': 'ㄎㄜˇ ㄋㄥˊ',
  'xièxiè': 'ㄒㄧㄝˋ ㄒㄧㄝˋ',
  'dàizi': 'ㄉㄞˋ ㄗ˙',
  'kuài': 'ㄎㄨㄞˋ', 'yuán': 'ㄩㄢˊ',
  'mǎidān': 'ㄇㄞˇ ㄉㄢ',
  'qǐngwèn': 'ㄑㄧㄥˇ ㄨㄣˋ',
  'bùhǎoyìsi': 'ㄅㄨˋ ㄏㄠˇ ㄧˋ ㄙ',
  'duìbuqǐ': 'ㄉㄨㄟˋ ㄅㄨˋ ㄑㄧˇ',
  'shìchī': 'ㄕˋ ㄔ',
  'chōngdiàn': 'ㄔㄨㄥ ㄉㄧㄢˋ',
  'mìmǎ': 'ㄇㄧˋ ㄇㄚˇ', 'hàomǎ': 'ㄏㄠˋ ㄇㄚˇ',
  'míngzì': 'ㄇㄧㄥˊ ㄗˋ', 'diànhuà': 'ㄉㄧㄢˋ ㄏㄨㄚˋ',
  'Rìběn': 'ㄖˋ ㄅㄣˇ',
  // Particles
  'ō': 'ㄛ', 'ēi': 'ㄟ',
  // Classifiers used in optionsHint
  'piàn': 'ㄆㄧㄢˋ',
  'pán': 'ㄆㄢˊ', 'bāo': 'ㄅㄠ',
  'zhǒng': 'ㄓㄨㄥˇ',
  'fēng': 'ㄈㄥ', 'zhī': 'ㄓ', 'xìn': 'ㄒㄧㄣˋ',
  // Common verbs/adj in options
  'yǒu': 'ㄧㄡˇ', 'bāo': 'ㄅㄠ',
  'fángzū': 'ㄈㄤˊ ㄗㄨ',
  'yājīn': 'ㄧㄚ ㄐㄧㄣ',
  'gōngzuò': 'ㄍㄨㄥ ㄗㄨㄛˋ',
  'xīngqù': 'ㄒㄧㄥ ㄑㄩˋ', 'xiǎngfǎ': 'ㄒㄧㄤˇ ㄈㄚˇ',
  'yǔyán': 'ㄩˇ ㄧㄢˊ',
  'fáng': 'ㄈㄤˊ', 'bāo': 'ㄅㄠ',
  'lěngqì': 'ㄌㄥˇ ㄑㄧˋ',
  // Unit 13 review
  'chá': 'ㄔㄚˊ', 'jiǔ': 'ㄐㄧㄡˇ',
  'kāfēi': 'ㄎㄚ ㄈㄟ',
  'piào': 'ㄆㄧㄠˋ',
  // Common compound hints
  'wǒ yào': 'ㄨㄛˇ ㄧㄠˋ',
};

// This approach is too fragile for automated conversion.
// Instead, let's take a surgical approach: for each file that has optionsHint,
// just add the optionsZhuyin line right after it.
// We'll process the actual content via a different strategy.

console.log("This script needs manual zhuyin data. Use the manual editing approach instead.");
console.log("The pinyin-to-zhuyin conversion is too complex for reliable automation.");
console.log("Files that need optionsZhuyin added after optionsHint:");

const courseDir = '/Users/juliankerignard/Documents/Other/Site-taiwan/src/data/course';
const chapters = ['chapter1', 'chapter2', 'chapter3', 'chapter4', 'chapter5', 'chapter6', 'chapter7'];

for (const chapter of chapters) {
  const chapterDir = join(courseDir, chapter);
  try {
    const files = readdirSync(chapterDir).filter(f => f.endsWith('.ts'));
    for (const file of files) {
      const filePath = join(chapterDir, file);
      const content = readFileSync(filePath, 'utf-8');

      const hasOptionsHint = content.includes('optionsHint');
      const hasOptionsZhuyin = content.includes('optionsZhuyin');
      const hasHint = /\bhint:/.test(content);
      const hasHintZhuyin = content.includes('hintZhuyin');
      const hasChineseOptions = /options:\s*\[.*[\u4e00-\u9fff]/.test(content);

      if (hasOptionsHint && !hasOptionsZhuyin) {
        console.log(`[NEEDS optionsZhuyin] ${chapter}/${file}`);
      }
      if (hasHint && !hasHintZhuyin) {
        // Check if hint contains pinyin (has tone marks)
        const hintMatches = content.match(/hint:\s*"([^"]+)"/g);
        if (hintMatches) {
          for (const m of hintMatches) {
            if (/[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/.test(m)) {
              console.log(`[NEEDS hintZhuyin] ${chapter}/${file}: ${m}`);
            }
          }
        }
      }
      if (hasChineseOptions && !hasOptionsHint) {
        console.log(`[NEEDS optionsHint+optionsZhuyin] ${chapter}/${file}`);
      }
    }
  } catch (e) {
    // chapter doesn't exist
  }
}
