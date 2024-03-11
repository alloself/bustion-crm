import{l as Z,r,j as x,w as q,W as z,R as F,S as e,a9 as f,$ as G,I as a,a3 as T,_ as s,J as M}from"./vue-codemirror.js";import{j as Q,a0 as X,V as c,l as h,Z as Y,C as B,U as ee,E as I,W as ae,B as le,D,o as C}from"./index.js";import{l as te}from"./lodash.js";import{M as P}from"./ModuleDetail.js";import{V as K}from"./VTooltip.js";import{V as oe,a as ne}from"./VRow.js";import{V as ie}from"./VAutocomplete.js";import{V as R}from"./VSpacer.js";const de={class:"ml-2"},se=f("div",null,null,-1),ue={style:{"margin-left":"-12px"}},re=f("span",null,"Создать",-1),ce=f("span",null,"Удалить выбранное",-1),me=f("span",null,"Поиск",-1),we=Z({__name:"RelationsTable",props:{moduleKey:{},relationKey:{},modelValue:{},showActions:{type:Boolean},initialValues:{default:()=>({})},itemTitle:{}},emits:["update:model-value"],setup(n,{emit:N}){console.log(n.moduleKey);const V=N,U=Q(),u=X(),i=r(!1),p=r(!1),g=r(""),m=r([]),$=r([]),y=r([]),A=r(),d=x(()=>U.modules[n.moduleKey]),w=x({get:()=>te.orderBy(n.modelValue,["order","created_at"],["desc"]),set:t=>V("update:model-value",t)}),E=x(()=>{if(!n.showActions)return d.value.headers||[];const t={key:"actions",title:"Действия"};return d.value.headers?[...d.value.headers,t]:[]}),j=()=>{p.value=!1,m.value=[],g.value=""},_=async()=>{try{await Promise.all(m.value.map(t=>{C.patch(`/api/admin/${d.value.key}/${t.id}`,{[n.relationKey]:n.initialValues[n.relationKey]})})),V("update:model-value",[...n.modelValue,...m.value]),m.value=[],p.value=!1}catch(t){console.log(t)}},H=async(t="")=>{try{const{data:o}=await C.get(`/api/admin/${d.value.key}`,{params:{search:t}});$.value=o}catch(o){console.log(o)}},W=()=>{y.value.forEach(async t=>{await C.patch(`/api/admin/${d.value.key}/${t}`,{[n.relationKey]:null})}),V("update:model-value",n.modelValue.filter(t=>!y.value.includes(t.id)))},S=t=>{V("update:model-value",[...n.modelValue,t]),u.onModalClose()},J=()=>{u.addModal({component:P,props:{modal:!0,moduleKey:n.moduleKey,initialValues:n.initialValues},actions:{onClose:u.onModalClose,onCreate:S}}),u.show=!0},b=async(t,o)=>{i.value=!0;try{const{data:l}=await C.patch(`/api/admin/${d.value.key}/${t}`,{order:o}),v=n.modelValue.findIndex(O=>O.id===l.id);if(v===-1)return;const k=[...n.modelValue];k.splice(v,1,l),V("update:model-value",k)}catch(l){console.log(l)}finally{i.value=!1}},L=(t,o)=>{t.target instanceof HTMLInputElement||(A.value=o.item.id,u.addModal({component:P,props:{modal:!0,id:o.item.id,moduleKey:n.moduleKey,initialValues:n.initialValues},actions:{onClose:u.onModalClose,onCreate:S}}),u.show=!0)};return q(()=>g.value,()=>{H(g.value)}),(t,o)=>(z(),F(I,{variant:"tonal",flat:"",loading:i.value,"prepend-icon":d.value.icon,class:"mb-8"},{title:e(()=>[f("span",de,G(d.value.title),1)]),default:e(()=>[a(Y,{modelValue:y.value,"onUpdate:modelValue":o[0]||(o[0]=l=>y.value=l),"show-select":"",headers:E.value,items:w.value,itemsPerPage:w.value.length,"items-length":w.value.length,loading:i.value,"onClick:row":L},{bottom:e(()=>[se]),"item.actions":e(({item:l})=>[f("div",ue,[a(c,{icon:"",large:"",loading:i.value,flat:"",onClick:T(v=>b(l.id,Number(l.order)+1),["stop"])},{default:e(()=>[a(h,null,{default:e(()=>[s("mdi-arrow-up-bold-circle-outline")]),_:1})]),_:2},1032,["loading","onClick"]),a(c,{icon:"",large:"",loading:i.value,flat:"",onClick:T(v=>b(l.id,Number(l.order)-1),["stop"])},{default:e(()=>[a(h,null,{default:e(()=>[s("mdi-arrow-down-bold-circle-outline")]),_:1})]),_:2},1032,["loading","onClick"])])]),_:2},1032,["modelValue","headers","items","itemsPerPage","items-length","loading"]),a(B),a(D,null,{default:e(()=>[a(K,{location:"top",text:"Создать",color:"primary"},{activator:e(({props:l})=>[a(c,M({icon:"",large:""},l,{loading:i.value,onClick:J,flat:""}),{default:e(()=>[a(h,null,{default:e(()=>[s("mdi-plus")]),_:1})]),_:2},1040,["loading"])]),default:e(()=>[re]),_:1}),a(K,{location:"top",text:"Удалить выбранное",color:"primary"},{activator:e(({props:l})=>[a(c,M({icon:"",large:"",loading:i.value},l,{flat:"",onClick:W}),{default:e(()=>[a(h,null,{default:e(()=>[s("mdi-delete")]),_:1})]),_:2},1040,["loading"])]),default:e(()=>[ce]),_:1}),a(ee,{modelValue:p.value,"onUpdate:modelValue":o[4]||(o[4]=l=>p.value=l),"close-on-content-click":!1,location:"right",offset:"16"},{activator:e(l=>[a(K,{location:"top",text:"Поиск",color:"primary"},{activator:e(v=>[a(c,M({icon:"",large:""},{...v.props,...l.props},{loading:i.value,flat:"",onClick:o[1]||(o[1]=k=>p.value=!0)}),{default:e(()=>[a(h,null,{default:e(()=>[s("mdi-magnify")]),_:1})]),_:2},1040,["loading"])]),default:e(()=>[me]),_:2},1024)]),default:e(()=>[a(I,{width:"500"},{default:e(()=>[a(ae,null,{default:e(()=>[s("Найти")]),_:1}),a(le,{class:"mt-2"},{default:e(()=>[a(oe,null,{default:e(()=>[a(ne,null,{default:e(()=>[a(ie,{placeholder:"Поиск",modelValue:m.value,"onUpdate:modelValue":o[2]||(o[2]=l=>m.value=l),"return-object":"",chips:"",search:g.value,"onUpdate:search":o[3]||(o[3]=l=>g.value=l),items:$.value,"item-title":t.itemTitle,multiple:""},null,8,["modelValue","search","items","item-title"])]),_:1})]),_:1})]),_:1}),a(B),a(D,null,{default:e(()=>[a(R),a(c,{variant:"text",onClick:j},{default:e(()=>[s(" Отмена ")]),_:1}),a(c,{color:"primary",variant:"text",onClick:_},{default:e(()=>[s(" Добавить ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(R)]),_:1})]),_:1},8,["loading","prepend-icon"]))}});export{we as _};
