import{c as r}from"./cars-0a778b27.js";import{_ as i,k as l,m as s,o as c,c as n,a as e,t as _,p as u,f}from"./index-27381212.js";const d=t=>(u("data-v-c7fda924"),t=t(),f(),t),h={key:0},m=d(()=>e("h3",null,"Contact Info",-1)),v={key:1},I=d(()=>e("h3",null,"Car not found",-1)),k=[I],y={__name:"ContactView",setup(t){const p=l(),o=r.find(a=>a.id===parseInt(p.params.id));return(a,C)=>s(o)?(c(),n("div",h,[m,e("p",null,"dieler: "+_(s(o).contacts.dieler),1),e("p",null,_(s(o).contacts.phone),1)])):(c(),n("div",v,k))}},S=i(y,[["__scopeId","data-v-c7fda924"]]);export{S as default};
