import{a as Z,d as b}from"./index.esm.js";import{l as z,r as c,j as M,w as G,W as Q,R as Y,S as e,a9 as f,$ as ee,I as l,a3 as I,_ as r,J as T,m as y}from"./vue-codemirror.js";import{j as le,a0 as ae,X as te,V as p,l as h,Z as oe,C as R,U as ie,E as U,W as ne,B as de,D,o as A}from"./index.js";import{l as ue}from"./lodash.js";import{M as N}from"./ModuleDetail.js";import{V as $}from"./VTooltip.js";import{V as se,a as re}from"./VRow.js";import{V as ce}from"./VAutocomplete.js";import{V as P}from"./VSpacer.js";import{_ as j,a as me}from"./FilesTable.vue_vue_type_script_setup_true_lang.js";import{_ as pe}from"./RelationAutocomplete.vue_vue_type_script_setup_true_lang.js";import"./SmartForm.vue_vue_type_script_setup_true_lang.js";const fe={class:"ml-2"},ve=f("div",null,null,-1),Ve={style:{"margin-left":"-12px"}},ge=f("span",null,"Создать",-1),ye=f("span",null,"Удалить выбранное",-1),he=f("span",null,"Поиск",-1),ke=z({__name:"RelationsWithKeyTable",props:{moduleKey:{},modelValue:{default:()=>[]},showActions:{type:Boolean},initialValues:{default:()=>({})},itemTitle:{}},emits:["update:model-value"],setup(t,{emit:k}){const u=k,w=le(),n=ae(),d=c(!1),v=c(!1),V=c(""),g=c([]),S=c([]),C=c([]),E=c(),m=M(()=>w.modules[t.moduleKey]),_=M({get:()=>ue.orderBy(t.modelValue,["order","created_at"],["desc"]),set:i=>u("update:model-value",i)}),W=M(()=>{if(!t.showActions)return m.value.headers||[];const i={key:"actions",title:"Действия"};return m.value.headers?[...m.value.headers,i]:[]}),H=()=>{v.value=!1,g.value=[],V.value=""},q=async()=>{try{u("update:model-value",[...t.modelValue,...g.value]),g.value=[],v.value=!1}catch(i){console.log(i)}},F=async(i="")=>{try{const{data:o}=await A.get(`/api/admin/${m.value.key}`,{params:{search:i}});S.value=o}catch(o){console.log(o)}},J=()=>{u("update:model-value",t.modelValue.filter(i=>!C.value.includes(i.id)))},K=i=>{u("update:model-value",[...t.modelValue,{...i,pivot:{value:""}}]),n.onModalClose()},L=()=>{n.addModal({component:N,props:{modal:!0,moduleKey:t.moduleKey,initialValues:t.initialValues},actions:{onClose:n.onModalClose,onCreate:K}}),n.show=!0},B=async(i,o)=>{d.value=!0;try{const{data:a}=await A.patch(`/api/admin/${m.value.key}/${i}`,{order:o}),s=t.modelValue.findIndex(X=>X.id===a.id);if(s===-1)return;const x=[...t.modelValue];x.splice(s,1,a),u("update:model-value",x)}catch(a){console.log(a)}finally{d.value=!1}},O=(i,o)=>{i.target instanceof HTMLInputElement||(E.value=o.item.id,n.addModal({component:N,props:{modal:!0,id:o.item.id,moduleKey:t.moduleKey,initialValues:t.initialValues},actions:{onClose:n.onModalClose,onCreate:K}}),n.show=!0)};return G(()=>V.value,()=>{F(V.value)}),(i,o)=>(Q(),Y(U,{variant:"tonal",flat:"",loading:d.value,"prepend-icon":m.value.icon,class:"mb-8"},{title:e(()=>[f("span",fe,ee(m.value.title),1)]),default:e(()=>[l(oe,{modelValue:C.value,"onUpdate:modelValue":o[0]||(o[0]=a=>C.value=a),"show-select":"",headers:W.value,items:_.value,itemsPerPage:_.value.length,"items-length":_.value.length,loading:d.value,"onClick:row":O},{bottom:e(()=>[ve]),"item.value":e(({item:a})=>[l(te,{density:"compact","hide-details":"",modelValue:a.pivot.value,"onUpdate:modelValue":s=>a.pivot.value=s},null,8,["modelValue","onUpdate:modelValue"])]),"item.actions":e(({item:a})=>[f("div",Ve,[l(p,{icon:"",large:"",loading:d.value,flat:"",onClick:I(s=>B(a.id,Number(a.order)+1),["stop"])},{default:e(()=>[l(h,null,{default:e(()=>[r("mdi-arrow-up-bold-circle-outline")]),_:1})]),_:2},1032,["loading","onClick"]),l(p,{icon:"",large:"",loading:d.value,flat:"",onClick:I(s=>B(a.id,Number(a.order)-1),["stop"])},{default:e(()=>[l(h,null,{default:e(()=>[r("mdi-arrow-down-bold-circle-outline")]),_:1})]),_:2},1032,["loading","onClick"])])]),_:2},1032,["modelValue","headers","items","itemsPerPage","items-length","loading"]),l(R),l(D,null,{default:e(()=>[l($,{location:"top",text:"Создать",color:"primary"},{activator:e(a=>[l(p,T({icon:"",large:""},{...a.props},{loading:d.value,onClick:L,flat:""}),{default:e(()=>[l(h,null,{default:e(()=>[r("mdi-plus")]),_:1})]),_:2},1040,["loading"])]),default:e(()=>[ge]),_:1}),l($,{location:"top",text:"Удалить выбранное",color:"primary"},{activator:e(({props:a})=>[l(p,T({icon:"",large:"",loading:d.value},a,{flat:"",onClick:J}),{default:e(()=>[l(h,null,{default:e(()=>[r("mdi-delete")]),_:1})]),_:2},1040,["loading"])]),default:e(()=>[ye]),_:1}),l(ie,{modelValue:v.value,"onUpdate:modelValue":o[4]||(o[4]=a=>v.value=a),"close-on-content-click":!1,location:"right",offset:"16"},{activator:e(a=>[l($,{location:"top",text:"Поиск",color:"primary"},{activator:e(s=>[l(p,T({icon:"",large:""},{...s.props,...a.props},{loading:d.value,flat:"",onClick:o[1]||(o[1]=x=>v.value=!0)}),{default:e(()=>[l(h,null,{default:e(()=>[r("mdi-magnify")]),_:1})]),_:2},1040,["loading"])]),default:e(()=>[he]),_:2},1024)]),default:e(()=>[l(U,{width:"500"},{default:e(()=>[l(ne,null,{default:e(()=>[r("Найти")]),_:1}),l(de,{class:"mt-2"},{default:e(()=>[l(se,null,{default:e(()=>[l(re,null,{default:e(()=>[l(ce,{placeholder:"Поиск",modelValue:g.value,"onUpdate:modelValue":o[2]||(o[2]=a=>g.value=a),"return-object":"",chips:"",search:V.value,"onUpdate:search":o[3]||(o[3]=a=>V.value=a),items:S.value,"item-title":i.itemTitle,multiple:""},null,8,["modelValue","search","items","item-title"])]),_:1})]),_:1})]),_:1}),l(R),l(D,null,{default:e(()=>[l(P),l(p,{variant:"text",onClick:H},{default:e(()=>[r(" Отмена ")]),_:1}),l(p,{color:"primary",variant:"text",onClick:q},{default:e(()=>[r(" Добавить ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(P)]),_:1})]),_:1},8,["loading","prepend-icon"]))}});function Re(t){var u,w,n;console.log((u=t==null?void 0:t.initialValues)==null?void 0:u.category_id);const k=c([{component:"v-text-field",key:"title",props:{autocomplete:"title",label:"Название",name:"title",type:"text"},rule:Z().required()},{component:"v-text-field",key:"order",props:{autocomplete:"order",label:"Приоритет",name:"order",type:"number"},rule:b()},{component:"v-text-field",key:"price",props:{autocomplete:"price",label:"Цена",name:"price",suffix:"₽"},rule:b()},{component:"v-text-field",key:"weight",props:{autocomplete:"weight",label:"Вес",name:"weight",suffix:"мл/гр"},rule:b()},{component:y(pe),key:"category_id",props:{autocomplete:"category_id",label:"Категория",name:"category_id",readonly:!!((w=t==null?void 0:t.initialValues)!=null&&w.category_id),itemValue:"id",itemTitle:"title",moduleKey:"category"}},{component:y(ke),key:"attributes",props:{moduleKey:"attribute",showActions:!1,itemTitle:"name"}},{component:y(j),key:"nutritional"},{component:y(j),key:"description"}]);return(n=t==null?void 0:t.entity)!=null&&n.id&&k.value.push({component:y(me),key:"images",props:{title:"Изображения",type:"image"}}),k.value}export{Re as default};
