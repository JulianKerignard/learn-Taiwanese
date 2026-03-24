/**
 * Batch script to add optionsZhuyin after every optionsHint line,
 * and hintZhuyin after every hint that contains pinyin.
 *
 * For chapters 4-8, also adds optionsHint and optionsZhuyin
 * to exercises with Chinese options.
 *
 * Run: node scripts/add-zhuyin-batch.mjs
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const courseDir = 'src/data/course';

// Comprehensive pinyin syllable to zhuyin dictionary
const P2Z = {
  'wǒ':'ㄨㄛˇ','shì':'ㄕˋ','bù':'ㄅㄨˋ','bú':'ㄅㄨˊ','hǎo':'ㄏㄠˇ','lái':'ㄌㄞˊ',
  'ma':'ㄇㄚ','ne':'ㄋㄜ˙','ba':'ㄅㄚ˙','a':'ㄚ˙','la':'ㄌㄚ˙',
  'nǐ':'ㄋㄧˇ','tā':'ㄊㄚ','rén':'ㄖㄣˊ','de':'ㄉㄜ˙',
  'jiào':'ㄐㄧㄠˋ','zuò':'ㄗㄨㄛˋ','yǒu':'ㄧㄡˇ',
  'shénme':'ㄕㄣˊ ㄇㄜ˙','nǎlǐ':'ㄋㄚˇ ㄌㄧˇ',
  'zěnme':'ㄗㄣˇ ㄇㄜ˙','shéi':'ㄕㄟˊ',
  'duōshǎo':'ㄉㄨㄛ ㄕㄠˇ','qián':'ㄑㄧㄢˊ',
  'jǐ':'ㄐㄧˇ','ge':'˙ㄍㄜ','gè':'ㄍㄜˋ',
  'Fǎguó':'ㄈㄚˇ ㄍㄨㄛˊ','Táiwān':'ㄊㄞˊ ㄨㄢ',
  'Táiběi':'ㄊㄞˊ ㄅㄟˇ','Gāoxióng':'ㄍㄠ ㄒㄩㄥˊ',
  'xuéshēng':'ㄒㄩㄝˊ ㄕㄥ','lǎoshī':'ㄌㄠˇ ㄕ',
  'yě':'ㄧㄝˇ','dōu':'ㄉㄡ','hěn':'ㄏㄣˇ',
  'zuì':'ㄗㄨㄟˋ','gèng':'ㄍㄥˋ','bǐ':'ㄅㄧˇ','tài':'ㄊㄞˋ',
  'le':'ㄌㄜ˙','guò':'ㄍㄨㄛˋ','huì':'ㄏㄨㄟˋ',
  'zài':'ㄗㄞˋ','méi':'ㄇㄟˊ',
  'qù':'ㄑㄩˋ','dào':'ㄉㄠˋ',
  'chī':'ㄔ','hē':'ㄏㄜ','mǎi':'ㄇㄞˇ','mài':'ㄇㄞˋ',
  'kàn':'ㄎㄢˋ','xiě':'ㄒㄧㄝˇ','shuō':'ㄕㄨㄛ',
  'xué':'ㄒㄩㄝˊ','zhù':'ㄓㄨˋ',
  'yào':'ㄧㄠˋ','xiǎng':'ㄒㄧㄤˇ',
  'kěyǐ':'ㄎㄜˇ ㄧˇ','néng':'ㄋㄥˊ',
  'xǐhuān':'ㄒㄧˇ ㄏㄨㄢ','juéde':'ㄐㄩㄝˊ ㄉㄜ˙',
  'piàoliang':'ㄆㄧㄠˋ ˙ㄌㄧㄤ',
  'hǎochī':'ㄏㄠˇ ㄔ','hǎohē':'ㄏㄠˇ ㄏㄜ',
  'hǎokàn':'ㄏㄠˇ ㄎㄢˋ','hǎowán':'ㄏㄠˇ ㄨㄢˊ',
  'guì':'ㄍㄨㄟˋ','piányi':'ㄆㄧㄢˊ ㄧˊ',
  'dà':'ㄉㄚˋ','xiǎo':'ㄒㄧㄠˇ',
  'rè':'ㄖㄜˋ','lěng':'ㄌㄥˇ',
  'là':'ㄌㄚˋ','tián':'ㄊㄧㄢˊ','xián':'ㄒㄧㄢˊ','suān':'ㄙㄨㄢ',
  'duì':'ㄉㄨㄟˋ','cuò':'ㄘㄨㄛˋ',
  'liǎng':'ㄌㄧㄤˇ','èr':'ㄦˋ','shuāng':'ㄕㄨㄤ','liǎ':'ㄌㄧㄚˇ',
  'bēi':'ㄅㄟ','wǎn':'ㄨㄢˇ','píng':'ㄆㄧㄥˊ',
  'běn':'ㄅㄣˇ','zhāng':'ㄓㄤ','tiáo':'ㄊㄧㄠˊ',
  'zhī':'ㄓ','liàng':'ㄌㄧㄤˋ','tái':'ㄊㄞˊ','jiàn':'ㄐㄧㄢˋ',
  'míngtiān':'ㄇㄧㄥˊ ㄊㄧㄢ','diǎn':'ㄉㄧㄢˇ','bàn':'ㄅㄢˋ',
  'xiànzài':'ㄒㄧㄢˋ ㄗㄞˋ','sān':'ㄙㄢ',
  'jiéyùn':'ㄐㄧㄝˊ ㄩㄣˋ','chēzhàn':'ㄔㄜ ㄓㄢˋ',
  'zhàn':'ㄓㄢˋ','zǒu':'ㄗㄡˇ','jiāzhí':'ㄐㄧㄚ ㄓˊ',
  'zuǒ':'ㄗㄨㄛˇ','yòu':'ㄧㄡˋ','zhí':'ㄓˊ','zhuǎn':'ㄓㄨㄢˇ',
  'qiánmiàn':'ㄑㄧㄢˊ ㄇㄧㄢˋ','hòumiàn':'ㄏㄡˋ ㄇㄧㄢˋ',
  'yīshēng':'ㄧ ㄕㄥ','gǎnmào':'ㄍㄢˇ ㄇㄠˋ','fāshāo':'ㄈㄚ ㄕㄠ',
  'tóu':'ㄊㄡˊ','tòng':'ㄊㄨㄥˋ',
  'hùshi':'ㄏㄨˋ ㄕˋ','yàojú':'ㄧㄠˋ ㄐㄩˊ','yīyuàn':'ㄧ ㄩㄢˋ',
  'niúròu':'ㄋㄧㄡˊ ㄖㄡˋ','miàn':'ㄇㄧㄢˋ',
  'lǔròufàn':'ㄌㄨˇ ㄖㄡˋ ㄈㄢˋ',
  'biàndāng':'ㄅㄧㄢˋ ㄉㄤ','wàidài':'ㄨㄞˋ ㄉㄞˋ',
  'nèiyòng':'ㄋㄟˋ ㄩㄥˋ','háishì':'ㄏㄞˊ ㄕˋ',
  'jiārè':'ㄐㄧㄚ ㄖㄜˋ','sùshí':'ㄙㄨˋ ㄕˊ',
  'gěi':'ㄍㄟˇ','yòng':'ㄩㄥˋ','fàn':'ㄈㄢˋ','shuǐ':'ㄕㄨㄟˇ',
  'zhōngwén':'ㄓㄨㄥ ㄨㄣˊ',
  'yīnwèi':'ㄧㄣ ㄨㄟˋ','suǒyǐ':'ㄙㄨㄛˇ ㄧˇ',
  'kěshì':'ㄎㄜˇ ㄕˋ','dànshì':'ㄉㄢˋ ㄕˋ',
  'xiān':'ㄒㄧㄢ','ránhòu':'ㄖㄢˊ ㄏㄡˋ',
  'yǐjīng':'ㄧˇ ㄐㄧㄥ','hái':'ㄏㄞˊ',
  'xièxiè':'ㄒㄧㄝˋ ㄒㄧㄝˋ',
  'mǎidān':'ㄇㄞˇ ㄉㄢ','kuài':'ㄎㄨㄞˋ','yuán':'ㄩㄢˊ',
  'qǐngwèn':'ㄑㄧㄥˇ ㄨㄣˋ',
  'bùhǎoyìsi':'ㄅㄨˋ ㄏㄠˇ ㄧˋ ㄙ',
  'duìbuqǐ':'ㄉㄨㄟˋ ㄅㄨˋ ㄑㄧˇ',
  'xiǎng':'ㄒㄧㄤˇ','bǐjiào':'ㄅㄧˇ ㄐㄧㄠˋ',
  // Additional for ch2-3 exercises
  'wǒ yào':'ㄨㄛˇ ㄧㄠˋ',
  'zhège':'ㄓㄜˋ ˙ㄍㄜ','nàge':'ㄋㄚˋ ˙ㄍㄜ',
  'wèishénme':'ㄨㄟˋ ㄕㄣˊ ㄇㄜ˙',
  'duōjiǔ':'ㄉㄨㄛ ㄐㄧㄡˇ',
  'zěnmeyàng':'ㄗㄣˇ ㄇㄜ˙ ㄧㄤˋ',
  'shénme shíhòu':'ㄕㄣˊ ㄇㄜ˙ ㄕˊ ㄏㄡˋ',
  'kěnéng':'ㄎㄜˇ ㄋㄥˊ',
  'ō':'ㄛ','ēi':'ㄟ',
  'piào':'ㄆㄧㄠˋ',
  'fēng':'ㄈㄥ','xìn':'ㄒㄧㄣˋ',
  'chá':'ㄔㄚˊ','jiǔ':'ㄐㄧㄡˇ','kāfēi':'ㄎㄚ ㄈㄟ',
  'yìdiǎn':'ㄧˋ ㄉㄧㄢˇ',
  'shuākǎ':'ㄕㄨㄚ ㄎㄚˇ','xiànjīn':'ㄒㄧㄢˋ ㄐㄧㄣ',
  'fāpiào':'ㄈㄚ ㄆㄧㄠˋ','dàizi':'ㄉㄞˋ ㄗ˙',
  'mìmǎ':'ㄇㄧˋ ㄇㄚˇ','hàomǎ':'ㄏㄠˋ ㄇㄚˇ',
  'míngzì':'ㄇㄧㄥˊ ㄗˋ','diànhuà':'ㄉㄧㄢˋ ㄏㄨㄚˋ',
  'chōngdiàn':'ㄔㄨㄥ ㄉㄧㄢˋ',
  'xiàzǎi':'ㄒㄧㄚˋ ㄗㄞˇ','kāitōng':'ㄎㄞ ㄊㄨㄥ',
  'dǎ diànhuà':'ㄉㄚˇ ㄉㄧㄢˋ ㄏㄨㄚˋ',
  'xīngqù':'ㄒㄧㄥ ㄑㄩˋ','xiǎngfǎ':'ㄒㄧㄤˇ ㄈㄚˇ',
  'yǔyán':'ㄩˇ ㄧㄢˊ',
  'Rìběn':'ㄖˋ ㄅㄣˇ',
  'búcuò':'ㄅㄨˊ ㄘㄨㄛˋ',
  'háihǎo':'ㄏㄞˊ ㄏㄠˇ',
  // Unit 13 review / checkpoints
  '輛':'ㄌㄧㄤˋ','隻':'ㄓ','件':'ㄐㄧㄢˋ',
  '台':'ㄊㄞˊ','個':'˙ㄍㄜ','條':'ㄊㄧㄠˊ','張':'ㄓㄤ',
  '本':'ㄅㄣˇ','枝':'ㄓ','片':'ㄆㄧㄢˋ',
  // Unit 42
  'ō':'ㄛ',
  // Misc fill-blank single chars
  'le':'ㄌㄜ˙','guò':'ㄍㄨㄛˋ','huì':'ㄏㄨㄟˋ','de':'ㄉㄜ˙',
  // CH4-8 exercise options (Chinese characters to pinyin/zhuyin)
  '多久':'ㄉㄨㄛ ㄐㄧㄡˇ','多少':'ㄉㄨㄛ ㄕㄠˇ',
  '怎麼':'ㄗㄣˇ ㄇㄜ˙','什麼':'ㄕㄣˊ ㄇㄜ˙',
  '為什麼':'ㄨㄟˋ ㄕㄣˊ ㄇㄜ˙','怎麼樣':'ㄗㄣˇ ㄇㄜ˙ ㄧㄤˋ',
  '什麼時候':'ㄕㄣˊ ㄇㄜ˙ ㄕˊ ㄏㄡˋ',
  '密碼':'ㄇㄧˋ ㄇㄚˇ','號碼':'ㄏㄠˋ ㄇㄚˇ',
  '名字':'ㄇㄧㄥˊ ㄗˋ','電話':'ㄉㄧㄢˋ ㄏㄨㄚˋ',
  '充電':'ㄔㄨㄥ ㄉㄧㄢˋ','下載':'ㄒㄧㄚˋ ㄗㄞˇ',
  '開通':'ㄎㄞ ㄊㄨㄥ','打電話':'ㄉㄚˇ ㄉㄧㄢˋ ㄏㄨㄚˋ',
  '興趣':'ㄒㄧㄥ ㄑㄩˋ','喜歡':'ㄒㄧˇ ㄏㄨㄢ',
  '想法':'ㄒㄧㄤˇ ㄈㄚˇ','語言':'ㄩˇ ㄧㄢˊ',
  '不好意思':'ㄅㄨˋ ㄏㄠˇ ㄧˋ ㄙ',
  '對不起':'ㄉㄨㄟˋ ㄅㄨˋ ㄑㄧˇ',
  '抱歉':'ㄅㄠˋ ㄑㄧㄢˋ','幹嘛':'ㄍㄢˋ ㄇㄚˊ',
  '謝謝':'ㄒㄧㄝˋ ㄒㄧㄝˋ',
  '哪裡哪裡':'ㄋㄚˇ ㄌㄧˇ ㄋㄚˇ ㄌㄧˇ',
  '對啊':'ㄉㄨㄟˋ ㄚ˙','我知道':'ㄨㄛˇ ㄓ ㄉㄠˋ',
  '吃了':'ㄔ ㄌㄜ˙','吃過':'ㄔ ㄍㄨㄛˋ',
  '會吃':'ㄏㄨㄟˋ ㄔ','吃的':'ㄔ ㄉㄜ˙',
  '會':'ㄏㄨㄟˋ','了':'ㄌㄜ˙','過':'ㄍㄨㄛˋ','在':'ㄗㄞˋ',
  '最':'ㄗㄨㄟˋ','很':'ㄏㄣˇ','更':'ㄍㄥˋ','比':'ㄅㄧˇ',
  '算了':'ㄙㄨㄢˋ ㄌㄜ˙',
  '很高興認識你':'ㄏㄣˇ ㄍㄠ ㄒㄧㄥˋ ㄖㄣˋ ㄕˋ ㄋㄧˇ',
  '你好嗎':'ㄋㄧˇ ㄏㄠˇ ㄇㄚ','再見':'ㄗㄞˋ ㄐㄧㄢˋ',
  '謝謝你':'ㄒㄧㄝˋ ㄒㄧㄝˋ ㄋㄧˇ',
  'LINE':'LINE','電話':'ㄉㄧㄢˋ ㄏㄨㄚˋ',
  '地址':'ㄉㄧˋ ㄓˇ',
  '辣':'ㄌㄚˋ','辣了':'ㄌㄚˋ ㄌㄜ˙','很辣':'ㄏㄣˇ ㄌㄚˋ','好辣':'ㄏㄠˇ ㄌㄚˋ',
  '的':'ㄉㄜ˙',
  '天氣':'ㄊㄧㄢ ㄑㄧˋ','越來越':'ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ',
  '冷':'ㄌㄥˇ',
  '我':'ㄨㄛˇ','不':'ㄅㄨˋ','想':'ㄒㄧㄤˇ','去':'ㄑㄩˋ',
  // Ch4-8 multi-char options
  '我越來越喜歡台灣':'ㄨㄛˇ ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ ㄒㄧˇ ㄏㄨㄢ ㄊㄞˊ ㄨㄢ',
  '我很喜歡台灣':'ㄨㄛˇ ㄏㄣˇ ㄒㄧˇ ㄏㄨㄢ ㄊㄞˊ ㄨㄢ',
  '我最喜歡台灣':'ㄨㄛˇ ㄗㄨㄟˋ ㄒㄧˇ ㄏㄨㄢ ㄊㄞˊ ㄨㄢ',
  '我比較喜歡台灣':'ㄨㄛˇ ㄅㄧˇ ㄐㄧㄠˋ ㄒㄧˇ ㄏㄨㄢ ㄊㄞˊ ㄨㄢ',
  '我要辦一張SIM卡':'ㄨㄛˇ ㄧㄠˋ ㄅㄢˋ ㄧˋ ㄓㄤ SIM ㄎㄚˇ',
  '我要買一個手機':'ㄨㄛˇ ㄧㄠˋ ㄇㄞˇ ㄧˊ ˙ㄍㄜ ㄕㄡˇ ㄐㄧ',
  '我想打電話':'ㄨㄛˇ ㄒㄧㄤˇ ㄉㄚˇ ㄉㄧㄢˋ ㄏㄨㄚˋ',
  '我需要網路':'ㄨㄛˇ ㄒㄩ ㄧㄠˋ ㄨㄤˇ ㄌㄨˋ',
  '比...更':'ㄅㄧˇ...ㄍㄥˋ','和...一樣':'ㄏㄜˊ...ㄧˊ ㄧㄤˋ',
  '沒有...那麼':'ㄇㄟˊ ㄧㄡˇ...ㄋㄚˋ ㄇㄜ˙',
  '不是...而是':'ㄅㄨˊ ㄕˋ...ㄦˊ ㄕˋ',
};

function convertPinyinHint(pinyin) {
  if (!pinyin) return null;
  // Try exact match first
  if (P2Z[pinyin]) return P2Z[pinyin];

  // Try converting word by word
  const words = pinyin.split(/\s+/);
  const converted = words.map(w => {
    // Remove trailing punctuation for lookup
    const punct = w.match(/[?!.,;:？！。，]+$/)?.[0] || '';
    const clean = w.replace(/[?!.,;:？！。，]+$/, '');
    if (P2Z[clean]) return P2Z[clean] + punct;
    // Keep as-is if no conversion found
    return w;
  });

  const result = converted.join(' ');
  // Check if any conversion happened
  if (/[\u3100-\u312F\u31A0-\u31BF]/.test(result)) return result;
  return null; // No zhuyin characters found = conversion failed
}

function convertChineseOption(chinese) {
  if (!chinese) return null;
  // Try exact match
  if (P2Z[chinese]) return P2Z[chinese];
  return null;
}

function processFile(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const newLines = [];
  let modified = false;

  for (let i = 0; i < lines.length; i++) {
    newLines.push(lines[i]);

    // Check for optionsHint without optionsZhuyin on next non-empty line
    if (lines[i].match(/^\s*optionsHint:\s*\[/) && !lines[i].includes('optionsZhuyin')) {
      // Check if optionsZhuyin already exists on subsequent lines
      let hasZhuyin = false;
      for (let j = i + 1; j < Math.min(i + 5, lines.length); j++) {
        if (lines[j].includes('optionsZhuyin')) { hasZhuyin = true; break; }
        if (lines[j].match(/^\s*(hint:|id:|type:|question:|correctAnswer:|\}|],)/)) break;
      }

      if (!hasZhuyin) {
        // Extract the pinyin values from optionsHint
        // This handles both single-line and multi-line optionsHint
        let optionsHintStr = lines[i];
        let endIdx = i;

        // If it's a multi-line optionsHint
        if (!lines[i].includes('],')) {
          for (let j = i + 1; j < lines.length; j++) {
            optionsHintStr += lines[j];
            if (lines[j].includes('],') || lines[j].includes('],')) {
              endIdx = j;
              break;
            }
            newLines.push(lines[j]);
          }
          // Skip the lines we already added
          if (endIdx > i) {
            i = endIdx;
          }
        }

        // Extract pinyin values
        const pinyinValues = [];
        const regex = /"([^"]+)"/g;
        let match;
        while ((match = regex.exec(optionsHintStr)) !== null) {
          pinyinValues.push(match[1]);
        }

        // Convert each
        const zhuyinValues = pinyinValues.map(p => convertPinyinHint(p));

        if (zhuyinValues.every(z => z !== null)) {
          const indent = lines[i].match(/^(\s*)/)[1];
          if (pinyinValues.length <= 4 && zhuyinValues.join('').length < 100) {
            newLines.push(`${indent}optionsZhuyin: [${zhuyinValues.map(z => `"${z}"`).join(', ')}],`);
          } else {
            newLines.push(`${indent}optionsZhuyin: [`);
            for (let k = 0; k < zhuyinValues.length; k++) {
              const comma = k < zhuyinValues.length - 1 ? ',' : ',';
              newLines.push(`${indent}  "${zhuyinValues[k]}"${comma}`);
            }
            newLines.push(`${indent}],`);
          }
          modified = true;
        }
      }
    }

    // Check for hint with pinyin that needs hintZhuyin
    const hintMatch = lines[i].match(/^(\s*)hint:\s*"([^"]+)"/);
    if (hintMatch) {
      const [, indent, hintValue] = hintMatch;
      // Only add hintZhuyin if hint contains pinyin tone marks
      if (/[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/.test(hintValue)) {
        // Check if hintZhuyin already exists
        let hasHintZhuyin = false;
        for (let j = i + 1; j < Math.min(i + 3, lines.length); j++) {
          if (lines[j].includes('hintZhuyin')) { hasHintZhuyin = true; break; }
          if (lines[j].match(/^\s*(id:|type:|\})/)) break;
        }

        if (!hasHintZhuyin) {
          const zhuyin = convertPinyinHint(hintValue);
          if (zhuyin) {
            newLines.push(`${indent}hintZhuyin: "${zhuyin}",`);
            modified = true;
          }
        }
      }
    }
  }

  if (modified) {
    writeFileSync(filePath, newLines.join('\n'));
    console.log(`[UPDATED] ${filePath}`);
    return true;
  }
  return false;
}

// Process all chapters
const chapters = ['chapter1', 'chapter2', 'chapter3', 'chapter4', 'chapter5', 'chapter6', 'chapter7'];
let totalUpdated = 0;

for (const chapter of chapters) {
  const chapterDir = join(courseDir, chapter);
  try {
    const files = readdirSync(chapterDir).filter(f => f.endsWith('.ts'));
    for (const file of files) {
      const filePath = join(chapterDir, file);
      if (processFile(filePath)) totalUpdated++;
    }
  } catch (e) {
    // chapter doesn't exist
  }
}

console.log(`\nTotal files updated: ${totalUpdated}`);
