import { allUnits } from "../src/data/course/index.ts";
import { lessons } from "../src/data/lessons.ts";
import { gradedTexts } from "../src/data/readings.ts";
import { accentGroups } from "../src/data/pitch-accent.ts";
import { isKanji, countMora } from "../src/lib/japanese.ts";
const dist=new Map(); const worst=[];
function check(label, segments){
  for(const s of segments ?? []){
    const chars=[...s.text]; const kanji=chars.filter(isKanji).length;
    if(!kanji || !s.reading) continue;
    const kanaMora=countMora(chars.filter(c=>!isKanji(c)).join(""));
    const per=(countMora(s.reading)-kanaMora)/kanji;
    dist.set(per,(dist.get(per)??0)+1);
    worst.push({per,label,text:s.text,reading:s.reading});
  }
}
for(const u of allUnits) for(const v of u.vocabulary) check(`${u.id}/${v.term}`, v.segments);
for(const l of lessons){ for(const v of l.vocabulary) check(`${l.id}/${v.term}`, v.segments); for(const p of l.phrases??[]) check(`${l.id}`, p.segments); }
for(const t of gradedTexts) for(const s of t.sentences) check(`${t.id}`, s.segments);
for(const g of accentGroups) for(const w of g.words) check(`${g.id}/${w.term}`, w.segments);
console.log([...dist].sort((a,b)=>a[0]-b[0]).map(([k,v])=>`${k}: ${v}`).join("\n"));
worst.sort((a,b)=>b.per-a.per).slice(0,8).forEach(w=>console.log(w.per, w.label, w.text, w.reading));
