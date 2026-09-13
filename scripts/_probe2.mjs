import { allUnits } from "../src/data/zh/course/index.ts";
import { lessons } from "../src/data/zh/lessons.ts";
import { gradedTexts } from "../src/data/zh/readings.ts";

const readings=new Map();
function feed(source, id, items){
  for(const item of items){
    const e=readings.get(item.term) ?? {romanization:new Map(), reading:new Map()};
    if(!e.romanization.has(item.romanization)) e.romanization.set(item.romanization, id);
    if(!e.reading.has(item.reading)) e.reading.set(item.reading, id);
    readings.set(item.term, e);
  }
}
for(const u of allUnits) feed("course", u.id, u.vocabulary);
const before=[...readings].filter(([,e])=>e.romanization.size>1||e.reading.size>1).length;
for(const l of lessons) feed("lesson", l.id, l.vocabulary);
const afterLessons=[...readings].filter(([,e])=>e.romanization.size>1||e.reading.size>1).length;
for(const t of gradedTexts) feed("reading", t.id, t.vocabulary);
const afterAll=[...readings].filter(([,e])=>e.romanization.size>1||e.reading.size>1).length;
console.log({before, afterLessons, afterAll});
for(const [c,e] of readings){
  if(e.romanization.size>1||e.reading.size>1) console.log(c, [...e.romanization].map(([v,u])=>`${v}(${u})`).join(" vs "), "|", [...e.reading].map(([v,u])=>`${v}(${u})`).join(" vs "));
}
