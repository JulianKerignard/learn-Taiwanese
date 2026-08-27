import { allUnits } from "../src/data/course/index.ts";
import { lessons } from "../src/data/lessons.ts";
import { gradedTexts } from "../src/data/readings.ts";
import { accentGroups } from "../src/data/pitch-accent.ts";
import { isKana, isKanji, countMora } from "../src/lib/japanese.ts";
const isKanjiLike=(c)=>isKanji(c)||c==="々"||c==="〆";
const isAllKana=(t)=>[...t].every(isKana);
const bad=[]; let seg=0, kseg=0;
function check(label, segments){
  for(const s of segments ?? []){
    seg++;
    const chars=[...s.text];
    const kanji=chars.filter(isKanjiLike).length;
    if(kanji===0){
      if(s.reading && s.reading!==s.text) bad.push(`KANA ${label}: "${s.text}" lu "${s.reading}"`);
      continue;
    }
    if(!s.reading) continue;
    kseg++;
    const kanaPart=chars.filter(c=>!isKanjiLike(c));
    const kanaMora=countMora(kanaPart.join(""));
    const m=countMora(s.reading);
    if(m<kanji+kanaMora) bad.push(`SHORT ${label}: "${s.text}" lu "${s.reading}" (${m} mores, min ${kanji+kanaMora})`);
    if(m>4*kanji+kanaMora) bad.push(`LONG ${label}: "${s.text}" lu "${s.reading}" (${m} mores, max ${4*kanji+kanaMora})`);
    let i=0; while(i<chars.length && !isKanjiLike(chars[i])) i++;
    const lead=chars.slice(0,i).join("");
    let j=chars.length; while(j>0 && !isKanjiLike(chars[j-1])) j--;
    const tail=chars.slice(j).join("");
    if(lead && !s.reading.startsWith(lead)) bad.push(`LEAD ${label}: "${s.text}" lu "${s.reading}" (attendu prefixe "${lead}")`);
    if(tail && !s.reading.endsWith(tail)) bad.push(`TAIL ${label}: "${s.text}" lu "${s.reading}" (attendu suffixe "${tail}")`);
  }
}
for(const u of allUnits) for(const v of u.vocabulary) check(`${u.id}/${v.term}`, v.segments);
for(const l of lessons){ for(const v of l.vocabulary) check(`${l.id}/${v.term}`, v.segments); for(const p of l.phrases??[]) check(`${l.id}/${p.japanese}`, p.segments); }
for(const t of gradedTexts) for(const s of t.sentences) check(`${t.id}/${s.japanese}`, s.segments);
for(const g of accentGroups) for(const w of g.words) check(`${g.id}/${w.term}`, w.segments);
console.log("segments:",seg,"kanji segments with reading:",kseg,"violations:",bad.length);
bad.slice(0,30).forEach(b=>console.log("  ",b));
