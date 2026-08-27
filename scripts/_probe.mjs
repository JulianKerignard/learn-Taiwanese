import { lessons } from "../src/data/lessons.ts";
import { gradedTexts } from "../src/data/readings.ts";

let n = 0;
const out = [];
for (const l of lessons) {
  for (const q of l.quiz ?? []) {
    const o = q.options ?? [];
    if (!o.length) out.push(`${l.id}/${q.id}: no options`);
    else {
      if (!o.includes(q.correctAnswer)) out.push(`${l.id}/${q.id}: correctAnswer "${q.correctAnswer}" absent de [${o.join("|")}]`);
      if (new Set(o).size !== o.length) out.push(`${l.id}/${q.id}: doublons [${o.join("|")}]`);
    }
    n++;
  }
}
console.log("quiz items:", n, "problems:", out.length);
out.slice(0,40).forEach(x=>console.log("  ", x));

// lesson vocab
const seenGlobal = new Map();
let vn = 0, vp = [];
for (const l of lessons) {
  const seen = new Set();
  for (const v of l.vocabulary) {
    vn++;
    if (!v.character) vp.push(`${l.id}: entry without character`);
    if (!v.pinyin?.trim()) vp.push(`${l.id}/${v.character}: pinyin manquant`);
    if (!v.zhuyin?.trim()) vp.push(`${l.id}/${v.character}: zhuyin manquant`);
    if (!v.french?.trim()) vp.push(`${l.id}/${v.character}: french manquant`);
    if (seen.has(v.character)) vp.push(`${l.id}/${v.character}: doublon dans la lecon`);
    seen.add(v.character);
  }
}
console.log("lesson vocab:", vn, "problems:", vp.length);
vp.slice(0,60).forEach(x=>console.log("  ", x));

// phrases
let pn=0, pp=[];
for (const l of lessons) for (const p of l.phrases ?? []) { pn++;
  if(!p.chinese?.trim()) pp.push(`${l.id}: phrase sans chinese`);
  if(!p.pinyin?.trim()) pp.push(`${l.id}/${p.chinese}: pinyin manquant`);
  if(!p.french?.trim()) pp.push(`${l.id}/${p.chinese}: french manquant`);
  if(!p.zhuyin?.trim()) pp.push(`${l.id}/${p.chinese}: zhuyin manquant`);
}
console.log("phrases:", pn, "problems:", pp.length);
pp.slice(0,40).forEach(x=>console.log("  ", x));

// readings
let rp=[];
for (const t of gradedTexts) {
  const joined = t.sentences.map(s=>s.chinese).join("");
  if (joined !== t.text) rp.push(`${t.id}: text != concat(sentences)\n    text=${t.text}\n    join=${joined}`);
  for (const s of t.sentences) {
    if (!s.french?.trim()) rp.push(`${t.id}/${s.chinese}: traduction manquante`);
    if (!s.pinyin?.trim()) rp.push(`${t.id}/${s.chinese}: pinyin manquant`);
  }
  const seen=new Set();
  for (const v of t.vocabulary) {
    if (seen.has(v.character)) rp.push(`${t.id}/${v.character}: doublon`);
    seen.add(v.character);
    if(!v.pinyin?.trim()||!v.zhuyin?.trim()||!v.french?.trim()) rp.push(`${t.id}/${v.character}: champ manquant`);
  }
}
console.log("readings:", gradedTexts.length, "problems:", rp.length);
rp.slice(0,40).forEach(x=>console.log("  ", x));
