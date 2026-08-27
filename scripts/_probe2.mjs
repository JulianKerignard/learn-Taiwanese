import { allUnits } from "../src/data/course/index.ts";
import { lessons } from "../src/data/lessons.ts";
import { gradedTexts } from "../src/data/readings.ts";
import { accentGroups } from "../src/data/pitch-accent.ts";
import { isKana, isKanji, countMora, splitMora } from "../src/lib/japanese.ts";
const isAllKana=(t)=>[...t].every(isKana);

const hits=[];
function check(label, segments){
  if(!segments?.length) return;
  for(const s of segments){
    const chars=[...s.text];
    const kanji=chars.filter(isKanji).length;
    if(kanji===0){
      if(s.reading && s.reading!==s.text) hits.push(`KANA-MISMATCH ${label}: "${s.text}" lu "${s.reading}"`);
      continue;
    }
    if(!s.reading) continue;
    const kanaPart=chars.filter(c=>!isKanji(c)).join("");
    const kanaMora=countMora(kanaPart);
    const m=countMora(s.reading);
    if(m < kanji + kanaMora) hits.push(`TOO-SHORT ${label}: "${s.text}" (${kanji} kanji + ${kanaMora} mora kana) lu "${s.reading}" (${m} mores)`);
    if(m > 4*kanji + kanaMora) hits.push(`TOO-LONG ${label}: "${s.text}" (${kanji} kanji) lu "${s.reading}" (${m} mores)`);
  }
}
let segCount=0;
const bump=(s)=>{ if(s?.length) segCount+=s.length; };
for(const u of allUnits){ for(const v of u.vocabulary){ check(`${u.id}/${v.term}`, v.segments); bump(v.segments);} 
}
for(const l of lessons){ for(const v of l.vocabulary) {check(`${l.id}/${v.term}`, v.segments); bump(v.segments);} for(const p of l.phrases??[]) {check(`${l.id}/${p.japanese}`, p.segments); bump(p.segments);} }
for(const t of gradedTexts) for(const s of t.sentences) {check(`${t.id}/${s.japanese}`, s.segments); bump(s.segments);}
for(const g of accentGroups) for(const w of g.words) {check(`${g.id}/${w.term}`, w.segments); bump(w.segments);}
console.log("segments:", segCount, "hits:", hits.length);
hits.slice(0,60).forEach(h=>console.log("  ",h));

// pitch divergence
const pitches=new Map();
for(const u of allUnits) for(const v of u.vocabulary){
  if(v.pitch===undefined) continue;
  const e=pitches.get(v.term) ?? new Map();
  if(!e.has(v.pitch)) e.set(v.pitch, u.id);
  pitches.set(v.term,e);
}
let d=0;
for(const [t,e] of pitches) if(e.size>1){ d++; console.log("PITCH DIVERGENT", t, [...e].map(([p,u])=>`${p} (${u})`).join(" vs ")); }
console.log("pitch divergences:", d, "of", pitches.size, "terms with pitch");
