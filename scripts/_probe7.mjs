import { lessons } from "../src/data/lessons.ts";
import { gradedTexts } from "../src/data/readings.ts";
import { isKana } from "../src/lib/japanese.ts";
const set=new Map();
const scan=(t)=>{ for(const c of t) if(!isKana(c)) set.set(c,(set.get(c)??0)+1); };
for(const l of lessons) for(const p of l.phrases??[]) scan(p.kana);
for(const t of gradedTexts) for(const s of t.sentences) scan(s.kana);
console.log([...set].map(([c,n])=>`${c} U+${c.codePointAt(0).toString(16).toUpperCase()} x${n}`).join("\n"));
