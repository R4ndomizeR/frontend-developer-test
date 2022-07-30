(function(){"use strict";var e={9108:function(e,t,r){var a=r(9242),o=r(3396),l=r(4870);const s={formatThousand(e,t=" "){return Number(e).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,`$1${t}`)},parseThousand(e,t=" "){return Number(e.replace(new RegExp(t,"g"),""))}};var i=s;const c="def",n=9,u=[{id:1,name:"Наименование товара 2",desc:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",image:"https://i.ibb.co/h83Fk9s/camera.png",price:7e4},{id:2,name:"Наименование товара 1",desc:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",image:"https://i.ibb.co/h83Fk9s/camera.png",price:5e3},{id:3,name:"Наименование товара 3",desc:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",image:"https://i.ibb.co/h83Fk9s/camera.png",price:8e3},{id:4,name:"Наименование товара 4",desc:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",image:"https://i.ibb.co/h83Fk9s/camera.png",price:1e4},{id:5,name:"Наименование товара 5",desc:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",image:"https://i.ibb.co/h83Fk9s/camera.png",price:3e3},{id:6,name:"Наименование товара 6",desc:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",image:"https://i.ibb.co/h83Fk9s/camera.png",price:15e3},{id:7,name:"Наименование товара 7",desc:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",image:"https://i.ibb.co/h83Fk9s/camera.png",price:2e4},{id:8,name:"Наименование товара 8",desc:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",image:"https://i.ibb.co/h83Fk9s/camera.png",price:3e4},{id:9,name:"Наименование товара 9",desc:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",image:"https://i.ibb.co/h83Fk9s/camera.png",price:4e4}];var d={filter:c,lastID:n,products:u};const p=(0,l.qj)({filter:"def",lastID:0,products:[]}),g={getFromLocalStorage:e=>{if(localStorage.getItem(e))try{const t=JSON.parse(localStorage.getItem(e));return console.log([e,t]),t}catch(t){localStorage.removeItem(e)}return null},filteredProducts:(0,l.Fl)((()=>{switch(p.filter){case"min":return p.products.slice().sort(((e,t)=>e.price-t.price));case"max":return p.products.slice().sort(((e,t)=>t.price-e.price));case"name":return p.products.slice().sort(((e,t)=>{const r=e.name.toLocaleLowerCase(),a=t.name.toLocaleLowerCase();return r<a?-1:r>a?1:0}));default:return p.products}}))},m={loadFromLocalStorage:()=>{p.lastID=g.getFromLocalStorage("lastID")??d.lastID,p.filter=g.getFromLocalStorage("filter")??d.filter,p.products=g.getFromLocalStorage("products")??d.products},_saveToLocalStorage:()=>{localStorage.setItem("lastID",JSON.stringify(p.lastID)),localStorage.setItem("filter",JSON.stringify(p.filter)),localStorage.setItem("products",JSON.stringify(p.products))},_resetLocalStorage:()=>{localStorage.removeItem("lastID"),localStorage.removeItem("filter"),localStorage.removeItem("products")},reloadDemo:()=>{m._resetLocalStorage(),m.loadFromLocalStorage(),m._saveToLocalStorage()},_generateID:()=>"prod_"+ ++p.lastID,setFilter:e=>{console.log(["setFilter",e]),p.filter=e,localStorage.setItem("filter",JSON.stringify(p.filter))},addProduct:e=>{e.id=m._generateID(),console.log(["addProduct",e]),p.products.push(e),m._saveToLocalStorage()},deleteProduct:e=>{const t=p.products.findIndex((t=>t.id===e));-1!==t&&(console.log(["deleteProduct",e,p.products[t]]),p.products.splice(t,1),m._saveToLocalStorage())}};var _={state:(0,l.OT)(p),getters:g,setters:m};const f=e=>((0,o.dD)("data-v-24af6d1a"),e=e(),(0,o.Cn)(),e),v={class:"group"},A=f((()=>(0,o._)("label",{class:"group__title group__title--required",for:"item-name"},"Наименование товара",-1))),h=f((()=>(0,o._)("span",{class:"group__info"},null,-1))),w={class:"group"},b=f((()=>(0,o._)("label",{class:"group__title",for:"item-desc"},"Описание товара",-1))),S={class:"group"},D=f((()=>(0,o._)("label",{class:"group__title group__title--required",for:"item-link"},"Ссылка на изображение товара",-1))),I=f((()=>(0,o._)("span",{class:"group__info"},null,-1))),k={class:"group"},y=f((()=>(0,o._)("label",{class:"group__title group__title--required",for:"item-price"},"Цена товара",-1))),F=f((()=>(0,o._)("span",{class:"group__info"},null,-1))),C=f((()=>(0,o._)("button",{class:"button",type:"submit"},"Добавить товар",-1)));var L={__name:"ProductAddForm",setup(e){const t=(0,l.iH)(""),r=(0,l.iH)(""),s=(0,l.iH)(""),c=(0,l.iH)(""),n=(0,o.Fl)({get(){return""===c.value?"":i.formatThousand(c.value)},set(e){const t=i.parseThousand(e);c.value=t}}),u=e=>{_.setters.addProduct({name:t.value,desc:r.value,image:s.value,price:c.value})};return(e,i)=>((0,o.wg)(),(0,o.iD)("form",{class:"form",action:"./#",onSubmit:u},[(0,o._)("div",v,[A,(0,o.wy)((0,o._)("input",{class:"group__input","onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),type:"text",id:"item-name",placeholder:"Введите наименование товара",required:""},null,512),[[a.nr,t.value]]),h]),(0,o._)("div",w,[b,(0,o.wy)((0,o._)("textarea",{class:"group__input","onUpdate:modelValue":i[1]||(i[1]=e=>r.value=e),rows:"6",id:"item-desc",placeholder:"Введите описание товара"},null,512),[[a.nr,r.value]])]),(0,o._)("div",S,[D,(0,o.wy)((0,o._)("input",{class:"group__input","onUpdate:modelValue":i[2]||(i[2]=e=>s.value=e),type:"url",pattern:"https?://.*",id:"item-link",placeholder:"Введите ссылку",required:""},null,512),[[a.nr,s.value]]),I]),(0,o._)("div",k,[y,(0,o.wy)((0,o._)("input",{class:"group__input","onUpdate:modelValue":i[3]||(i[3]=e=>(0,l.dq)(n)?n.value=e:null),type:"text",id:"item-price",placeholder:"Введите цену",required:""},null,512),[[a.nr,(0,l.SU)(n)]]),F]),C],32))}},O=r(89);const U=(0,O.Z)(L,[["__scopeId","data-v-24af6d1a"]]);var q=U,T=r(7139),P="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC4SURBVHgB7VLBDcIwDLQRA3QD2AQxQcsEwASICTJCR+gIjFDYgBE6AkwQLsiGqHKaPPrsSSdHTnw5JcdkwHvfG+2Bmc+UA4a34M3od+Bm3GcdQglDLyrHFY6eqn4B69JJnG1AN3bQi4Oci0rqAQ6GWNWBO1lXWuO11BN41LlV4pZWHqwBa3HYWgdTAsVYBGYQWCf6D/ANhqiG/w/hutMUJCCOMpDA/WLP0Ua4qaN/VC183SDCe218AJHOZZdbf8R8AAAAAElFTkSuQmCC";const B=e=>((0,o.dD)("data-v-f9a9bd64"),e=e(),(0,o.Cn)(),e),H={class:"card"},N={class:"card__image"},Q=["src"],x={class:"card__wrap"},W={class:"card__title"},j={class:"card__desc"},J={class:"card__price"},V=B((()=>(0,o._)("img",{src:P},null,-1))),Y=[V];var E={__name:"ProductCard",props:{product:{type:Object}},setup(e){const t=e,r=(0,o.Fl)((()=>i.formatThousand(t.product.price)+" руб.")),a=e=>{_.setters.deleteProduct(t.product.id)};return(t,s)=>((0,o.wg)(),(0,o.iD)("div",H,[(0,o._)("div",N,[(0,o._)("img",{src:e.product.image},null,8,Q)]),(0,o._)("div",x,[(0,o._)("div",W,(0,T.zw)(e.product.name),1),(0,o._)("div",j,(0,T.zw)(e.product.desc),1),(0,o._)("div",J,(0,T.zw)((0,l.SU)(r)),1)]),(0,o._)("div",{class:"card__delete",onClick:a},Y)]))}};const G=(0,O.Z)(E,[["__scopeId","data-v-f9a9bd64"]]);var R=G;const Z={key:0,class:"dropdown__items"},z=["onClick"];var M={__name:"ProductsFilter",props:{options:{type:Array,required:!0},default:{type:String,required:!1,default:null}},emits:["input"],setup(e,{emit:t}){const r=e,s=(0,l.iH)(r.default?r.options.find((e=>e.val===r.default))?.title:r.options[0]?r.options[0].title:null),i=(0,l.iH)(!1),c=(e,r)=>{s.value=r.title,i.value=!1,t("input",r.val)};return(t,r)=>((0,o.wg)(),(0,o.iD)("div",{class:"dropdown",onBlur:r[1]||(r[1]=e=>i.value=!1)},[(0,o._)("div",{class:(0,T.C_)(["dropdown__selected",{open:i.value}]),onClick:r[0]||(r[0]=e=>i.value=!i.value)},(0,T.zw)(s.value),3),(0,o.Wm)(a.uT,null,{default:(0,o.w5)((()=>[i.value?((0,o.wg)(),(0,o.iD)("div",Z,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.options,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.val,onClick:t=>c(t,e)},(0,T.zw)(e.title),9,z)))),128))])):(0,o.kq)("",!0)])),_:1})],32))}};const K=(0,O.Z)(M,[["__scopeId","data-v-4e8ac38c"]]);var X=K;const $={class:"page"},ee=(0,o._)("div",{class:"page__title"},"Добавление товара",-1),te={class:"page__products"};var re={__name:"App",setup(e){const t=[{val:"def",title:"По умолчанию"},{val:"min",title:"Сначала недорогие"},{val:"max",title:"Сначала дорогие"},{val:"name",title:"По наименованию"}];return(0,o.wF)((()=>{_.setters.loadFromLocalStorage()})),(e,r)=>((0,o.wg)(),(0,o.iD)("div",$,[ee,(0,o.Wm)(X,{default:(0,l.SU)(_).state.filter,options:t,onInput:(0,l.SU)(_).setters.setFilter,class:"page__filter"},null,8,["default","onInput"]),(0,o.Wm)(q,{class:"page__sidebar"}),(0,o._)("div",te,[(0,l.SU)(_).getters.filteredProducts.value.length?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",{key:0,onClick:r[0]||(r[0]=(...e)=>(0,l.SU)(_).setters.reloadDemo&&(0,l.SU)(_).setters.reloadDemo(...e)),class:"page__demo"}," Подгрузить демо данные")),(0,o.Wm)(a.W3,{name:"fade"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,l.SU)(_).getters.filteredProducts.value,(e=>((0,o.wg)(),(0,o.j4)(R,{key:e.id,product:e},null,8,["product"])))),128))])),_:1})])]))}};const ae=re;var oe=ae;(0,a.ri)(oe).mount("#app")}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var l=t[a]={exports:{}};return e[a](l,l.exports,r),l.exports}r.m=e,function(){var e=[];r.O=function(t,a,o,l){if(!a){var s=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],l=e[u][2];for(var i=!0,c=0;c<a.length;c++)(!1&l||s>=l)&&Object.keys(r.O).every((function(e){return r.O[e](a[c])}))?a.splice(c--,1):(i=!1,l<s&&(s=l));if(i){e.splice(u--,1);var n=o();void 0!==n&&(t=n)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[a,o,l]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,l,s=a[0],i=a[1],c=a[2],n=0;if(s.some((function(t){return 0!==e[t]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(c)var u=c(r)}for(t&&t(a);n<s.length;n++)l=s[n],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(u)},a=self["webpackChunkfrontend_developer_test"]=self["webpackChunkfrontend_developer_test"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(9108)}));a=r.O(a)})();
//# sourceMappingURL=app.9c4f25ee.js.map