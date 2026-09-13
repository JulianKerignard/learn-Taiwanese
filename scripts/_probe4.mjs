import { lessons } from "../src/data/zh/lessons.ts";
import { gradedTexts } from "../src/data/zh/readings.ts";
const qid=new Map(), lid=new Map(), tid=new Map();
let dup=0;
for(const l of lessons){ if(lid.has(l.id)){dup++;console.log("dup lesson id",l.id);} lid.set(l.id,1);
  for(const q of l.quiz??[]){ if(qid.has(q.id)){dup++;console.log("dup quiz id",q.id,qid.get(q.id),l.id);} qid.set(q.id,l.id);
    if(!q.question?.trim()){dup++;console.log("empty question",l.id,q.id);}
    if((q.options??[]).length<2){dup++;console.log("few options",l.id,q.id,(q.options??[]).length);} } }
for(const t of gradedTexts){ if(tid.has(t.id)){dup++;console.log("dup text id",t.id);} tid.set(t.id,1);
  if(!t.sentences?.length){dup++;console.log("no sentences",t.id);}
  if(!t.title?.trim()||!t.titleFr?.trim()){dup++;console.log("no title",t.id);}
  const s=new Set(); for(const v of t.vocabulary){ if(s.has(v.term)){dup++;console.log("dup reading vocab",t.id,v.term);} s.add(v.term); } }
console.log("lessons",lid.size,"quiz",qid.size,"texts",tid.size,"problems",dup);
// slug uniqueness
const sl=new Set(); for(const l of lessons){ if(sl.has(l.slug))console.log("dup slug",l.slug); sl.add(l.slug); }
console.log("slugs",sl.size);
