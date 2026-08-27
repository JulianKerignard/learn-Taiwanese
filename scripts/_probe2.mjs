import { allUnits } from "../src/data/course/index.ts";
import { lessons } from "../src/data/lessons.ts";
import { gradedTexts } from "../src/data/readings.ts";

const readings=new Map();
function feed(source, id, items){
  for(const item of items){
    const e=readings.get(item.character) ?? {pinyin:new Map(), zhuyin:new Map()};
    if(!e.pinyin.has(item.pinyin)) e.pinyin.set(item.pinyin, id);
    if(!e.zhuyin.has(item.zhuyin)) e.zhuyin.set(item.zhuyin, id);
    readings.set(item.character, e);
  }
}
for(const u of allUnits) feed("course", u.id, u.vocabulary);
const before=[...readings].filter(([,e])=>e.pinyin.size>1||e.zhuyin.size>1).length;
for(const l of lessons) feed("lesson", l.id, l.vocabulary);
const afterLessons=[...readings].filter(([,e])=>e.pinyin.size>1||e.zhuyin.size>1).length;
for(const t of gradedTexts) feed("reading", t.id, t.vocabulary);
const afterAll=[...readings].filter(([,e])=>e.pinyin.size>1||e.zhuyin.size>1).length;
console.log({before, afterLessons, afterAll});
for(const [c,e] of readings){
  if(e.pinyin.size>1||e.zhuyin.size>1) console.log(c, [...e.pinyin].map(([v,u])=>`${v}(${u})`).join(" vs "), "|", [...e.zhuyin].map(([v,u])=>`${v}(${u})`).join(" vs "));
}
