import { lessons } from "../src/data/zh/lessons.ts";
import { gradedTexts } from "../src/data/zh/readings.ts";

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
    if (!v.term) vp.push(`${l.id}: entry without character`);
    if (!v.romanization?.trim()) vp.push(`${l.id}/${v.term}: pinyin manquant`);
    if (!v.reading?.trim()) vp.push(`${l.id}/${v.term}: zhuyin manquant`);
    if (!v.french?.trim()) vp.push(`${l.id}/${v.term}: french manquant`);
    if (seen.has(v.term)) vp.push(`${l.id}/${v.term}: doublon dans la lecon`);
    seen.add(v.term);
  }
}
console.log("lesson vocab:", vn, "problems:", vp.length);
vp.slice(0,60).forEach(x=>console.log("  ", x));

// phrases
let pn=0, pp=[];
for (const l of lessons) for (const p of l.phrases ?? []) { pn++;
  if(!p.native?.trim()) pp.push(`${l.id}: phrase sans chinese`);
  if(!p.romanization?.trim()) pp.push(`${l.id}/${p.native}: pinyin manquant`);
  if(!p.french?.trim()) pp.push(`${l.id}/${p.native}: french manquant`);
  if(!p.reading?.trim()) pp.push(`${l.id}/${p.native}: zhuyin manquant`);
}
console.log("phrases:", pn, "problems:", pp.length);
pp.slice(0,40).forEach(x=>console.log("  ", x));

// readings
let rp=[];
for (const t of gradedTexts) {
  const joined = t.sentences.map(s=>s.native).join("");
  if (joined !== t.text) rp.push(`${t.id}: text != concat(sentences)\n    text=${t.text}\n    join=${joined}`);
  for (const s of t.sentences) {
    if (!s.french?.trim()) rp.push(`${t.id}/${s.native}: traduction manquante`);
    if (!s.romanization?.trim()) rp.push(`${t.id}/${s.native}: pinyin manquant`);
  }
  const seen=new Set();
  for (const v of t.vocabulary) {
    if (seen.has(v.term)) rp.push(`${t.id}/${v.term}: doublon`);
    seen.add(v.term);
    if(!v.romanization?.trim()||!v.reading?.trim()||!v.french?.trim()) rp.push(`${t.id}/${v.term}: champ manquant`);
  }
}
console.log("readings:", gradedTexts.length, "problems:", rp.length);
rp.slice(0,40).forEach(x=>console.log("  ", x));
