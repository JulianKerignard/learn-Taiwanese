import { allUnits } from "../src/data/course/index.ts";
import { lessons } from "../src/data/lessons.ts";
import { gradedTexts } from "../src/data/readings.ts";
import { accentGroups } from "../src/data/pitch-accent.ts";
import { isKanji } from "../src/lib/japanese.ts";
const bad=[]; let n=0;
function leadRun(chars){ let i=0; while(i<chars.length && !isKanji(chars[i])) i++; return chars.slice(0,i).join(""); }
function tailRun(chars){ let i=chars.length; while(i>0 && !isKanji(chars[i-1])) i--; return chars.slice(i).join(""); }
function check(label, segments){
  for(const s of segments ?? []){
    const chars=[...s.text]; if(!chars.some(isKanji) || !s.reading) continue;
    n++;
    const lead=leadRun(chars), tail=tailRun(chars);
    if(lead && !s.reading.startsWith(lead)) bad.push(`LEAD ${label}: "${s.text}" / "${s.reading}" (lead "${lead}")`);
    if(tail && !s.reading.endsWith(tail)) bad.push(`TAIL ${label}: "${s.text}" / "${s.reading}" (tail "${tail}")`);
  }
}
for(const u of allUnits) for(const v of u.vocabulary) check(`${u.id}/${v.term}`, v.segments);
for(const l of lessons){ for(const v of l.vocabulary) check(`${l.id}/${v.term}`, v.segments); for(const p of l.phrases??[]) check(`${l.id}`, p.segments); }
for(const t of gradedTexts) for(const s of t.sentences) check(`${t.id}`, s.segments);
for(const g of accentGroups) for(const w of g.words) check(`${g.id}/${w.term}`, w.segments);
console.log("kanji segments with reading:", n, "violations:", bad.length);
bad.slice(0,30).forEach(b=>console.log("  ",b));
