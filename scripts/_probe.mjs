import { lessons } from "../src/data/lessons.ts";
import { gradedTexts } from "../src/data/readings.ts";
import { isKana, isKanji, countMora } from "../src/lib/japanese.ts";
const isAllKana = (t) => [...t].every(isKana);

let n=0, out=[];
for (const l of lessons) for (const q of l.quiz ?? []) { n++;
  const o = q.options ?? [];
  if (!o.length) out.push(`${l.id}/${q.id}: sans options`);
  else {
    if (!o.includes(q.correctAnswer)) out.push(`${l.id}/${q.id}: correctAnswer "${q.correctAnswer}" absent`);
    if (new Set(o).size !== o.length) out.push(`${l.id}/${q.id}: doublons`);
  }
}
console.log("quiz:", n, "pb:", out.length); out.slice(0,30).forEach(x=>console.log("  ",x));

let vn=0, vp=[];
for (const l of lessons) { const seen=new Set();
  for (const v of l.vocabulary) { vn++;
    const lbl=`${l.id}/${v.term}`;
    if(!v.term) vp.push(`${l.id}: sans term`);
    if(!v.kana?.trim()) vp.push(`${lbl}: kana manquant`);
    else if(!isAllKana(v.kana)) vp.push(`${lbl}: kana non-kana "${v.kana}"`);
    if(!v.romaji?.trim()) vp.push(`${lbl}: romaji manquant`);
    if(!v.french?.trim()) vp.push(`${lbl}: french manquant`);
    if(seen.has(v.term)) vp.push(`${lbl}: doublon dans la lecon`); seen.add(v.term);
    if (v.segments?.length) {
      const rt = v.segments.map(s=>s.text).join("");
      if (rt !== v.term) vp.push(`${lbl}: segments composent "${rt}"`);
      const rk = v.segments.map(s=>s.reading ?? s.text).join("");
      if (rk !== v.kana) vp.push(`${lbl}: segments se lisent "${rk}" au lieu de "${v.kana}"`);
    } else if ([...v.term].some(isKanji)) vp.push(`WARN ${lbl}: kanji sans segments`);
  }
}
console.log("vocab:", vn, "pb:", vp.length); vp.slice(0,50).forEach(x=>console.log("  ",x));

let pn=0, pp=[];
for (const l of lessons) for (const p of l.phrases ?? []) { pn++;
  const lbl=`${l.id}/${p.japanese}`;
  if(!p.japanese?.trim()) pp.push(`${l.id}: phrase sans japanese`);
  if(!p.kana?.trim()) pp.push(`${lbl}: kana manquant`);
  if(!p.romaji?.trim()) pp.push(`${lbl}: romaji manquant`);
  if(!p.french?.trim()) pp.push(`${lbl}: french manquant`);
  if (p.segments?.length) {
    const rt=p.segments.map(s=>s.text).join("");
    if(rt!==p.japanese) pp.push(`${lbl}: segments composent "${rt}"`);
    const rk=p.segments.map(s=>s.reading??s.text).join("");
    if(rk!==p.kana) pp.push(`${lbl}: segments se lisent "${rk}" au lieu de "${p.kana}"`);
  } else if([...p.japanese].some(isKanji)) pp.push(`WARN ${lbl}: kanji sans segments`);
}
console.log("phrases:", pn, "pb:", pp.length); pp.slice(0,50).forEach(x=>console.log("  ",x));

let rp=[];
for (const t of gradedTexts) {
  const joined=t.sentences.map(s=>s.japanese).join("");
  if(joined!==t.text) rp.push(`${t.id}: text != concat`);
  for (const s of t.sentences) {
    const lbl=`${t.id}/${s.japanese}`;
    if(!s.french?.trim()) rp.push(`${lbl}: traduction manquante`);
    if(!s.kana?.trim()) rp.push(`${lbl}: kana manquant`);
    if(!s.romaji?.trim()) rp.push(`${lbl}: romaji manquant`);
    if(s.segments?.length){
      const rt=s.segments.map(x=>x.text).join("");
      if(rt!==s.japanese) rp.push(`${lbl}: segments composent "${rt}"`);
      const rk=s.segments.map(x=>x.reading??x.text).join("");
      if(rk!==s.kana) rp.push(`${lbl}: segments se lisent "${rk}" au lieu de "${s.kana}"`);
    } else if([...s.japanese].some(isKanji)) rp.push(`WARN ${lbl}: kanji sans segments`);
  }
}
console.log("readings:", gradedTexts.length, "pb:", rp.length); rp.slice(0,60).forEach(x=>console.log("  ",x));
