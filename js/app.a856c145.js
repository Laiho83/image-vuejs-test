(function(e){function t(t){for(var a,o,i=t[0],s=t[1],u=t[2],l=0,b=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==c[s]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},c={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/image-vuejs-test/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"03a8":function(e,t,n){"use strict";n("5703")},"2b4d":function(e,t,n){"use strict";n("a4ee")},3433:function(e,t,n){"use strict";n("e03d")},"38bc":function(e,t,n){},"478f":function(e,t,n){"use strict";n("fa56")},"4c99":function(e,t,n){"use strict";n("d69e")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c={class:"app-page"};function r(e,t,n,r,o,i){var s=Object(a["u"])("Header"),u=Object(a["u"])("router-view"),d=Object(a["u"])("Footer");return Object(a["n"])(),Object(a["d"])("div",c,[Object(a["e"])(s),Object(a["e"])(u),Object(a["e"])(d)])}var o=Object(a["z"])("data-v-9e28f81a");Object(a["q"])("data-v-9e28f81a");var i={class:"header"},s=Object(a["e"])("h1",null,"Image VueJs test",-1);Object(a["o"])();var u=o((function(e,t,n,c,r,o){return Object(a["n"])(),Object(a["d"])("header",i,[s])})),d={name:"Header"};n("5c50");d.render=u,d.__scopeId="data-v-9e28f81a";var l=d,b=Object(a["z"])("data-v-38567859");Object(a["q"])("data-v-38567859");var f={class:"footer"},v=Object(a["e"])("p",null,"© All rights reserved",-1);Object(a["o"])();var m=b((function(e,t,n,c,r,o){return Object(a["n"])(),Object(a["d"])("footer",f,[v])})),p={name:"Footer"};n("478f");p.render=m,p.__scopeId="data-v-38567859";var O=p,j={name:"app",components:{Header:l,Footer:O}};n("4c99");j.render=r;var h=j,g=n("6c02"),P={class:"home container l-flex"};function _(e,t,n,c,r,o){var i=Object(a["u"])("Cards"),s=Object(a["u"])("Pagination"),u=Object(a["u"])("ModalWindow");return Object(a["n"])(),Object(a["d"])("div",P,[Object(a["e"])(i,{items:r.items[this.activeItems],onModal:o.openModal},null,8,["items","onModal"]),Object(a["e"])(s,{pageData:{itemsPerPage:r.itemsPerPage,maxPages:r.maxPages},onPagination:o.switchPage},null,8,["pageData","onPagination"]),Object(a["e"])(u,{itemUrl:r.itemUrl,onClose:t[1]||(t[1]=function(e){return r.itemUrl=""})},null,8,["itemUrl"])])}n("d81d");var w=Object(a["z"])("data-v-c895a02e");Object(a["q"])("data-v-c895a02e");var I={class:"cards l-flex"};Object(a["o"])();var x=w((function(e,t,n,c,r,o){var i=Object(a["u"])("CardItems");return Object(a["n"])(),Object(a["d"])("div",I,[(Object(a["n"])(!0),Object(a["d"])(a["a"],null,Object(a["t"])(n.items,(function(t){return Object(a["n"])(),Object(a["d"])("div",{class:"item",key:t.id},[Object(a["e"])(i,{item:t,onModal:function(n){return e.$emit("modal",t.card_url)}},null,8,["item","onModal"])])})),128))])})),y=Object(a["z"])("data-v-863efd1e");Object(a["q"])("data-v-863efd1e");var M={class:"card-img"},C={class:"card-content l-flex"},U={class:"l-c"},k={class:"elipsis"},q={class:"r-c"};Object(a["o"])();var z=y((function(e,t,n,c,r,o){return Object(a["n"])(),Object(a["d"])("div",{class:"card",onClick:t[1]||(t[1]=function(t){return e.$emit("modal",n.item.card_url)})},[Object(a["e"])("div",M,[Object(a["e"])("img",{src:o.srcImage,alt:"Image from "+n.item.author},null,8,["src","alt"])]),Object(a["e"])("div",C,[Object(a["e"])("div",U,[Object(a["e"])("p",k,Object(a["w"])(n.item.author),1)]),Object(a["e"])("div",q,[Object(a["e"])("p",null,Object(a["w"])(n.item.id),1)])])])})),D=n("3835"),$={name:"CardItems",props:["item"],data:function(){return{obs:null,intersected:!1}},computed:{srcImage:function(){return this.intersected?this.item.card_url:""}},mounted:function(){var e=this,t=this.options||{};this.observer=new IntersectionObserver((function(t){var n=Object(D["a"])(t,1),a=n[0];a&&a.isIntersecting&&(e.intersected=!0)}),t),this.observer.observe(this.$el)},unmounted:function(){this.observer.disconnect()}};n("03a8");$.render=z,$.__scopeId="data-v-863efd1e";var H=$,S={name:"Cards",components:{CardItems:H},props:["items"]};n("7e15");S.render=x,S.__scopeId="data-v-c895a02e";var T=S,F=(n("99af"),n("bc3a")),J=n.n(F),W="https://picsum.photos/v2/list",A={getImages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="".concat(W,"?page=").concat(e,"&limit=").concat(t);return J.a.get(n).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}},V=Object(a["z"])("data-v-905fbc8e");Object(a["q"])("data-v-905fbc8e");var B={class:"modal-content"};Object(a["o"])();var E=V((function(e,t,n,c,r,o){return Object(a["n"])(),Object(a["d"])("div",{id:"modal",class:{active:n.itemUrl.length>1}},[Object(a["e"])("span",{class:"close",onClick:t[1]||(t[1]=function(t){return e.$emit("close","")})},"×"),Object(a["e"])("div",B,[Object(a["e"])("img",{class:"",src:n.itemUrl,alt:n.itemUrl},null,8,["src","alt"])])],2)})),G={name:"ModaleWindow",components:{},props:["itemUrl"],methods:{closeModal:function(){}}};n("2b4d");G.render=E,G.__scopeId="data-v-905fbc8e";var K=G,L=n("d4ec"),N=n("ade3"),Q=function e(t){Object(L["a"])(this,e),Object(N["a"])(this,"id",void 0),Object(N["a"])(this,"author",void 0),Object(N["a"])(this,"download_url",void 0),Object(N["a"])(this,"card_url",void 0),this.id=t.id,this.author=t.author,this.card_url="https://picsum.photos/id/".concat(t.id,"/367/267"),this.download_url=t.download_url},R=Object(a["z"])("data-v-4e56e85c");Object(a["q"])("data-v-4e56e85c");var X={class:"pagination l-flex"},Y=Object(a["e"])("span",null,null,-1),Z={class:"active-page l-flex"},ee=Object(a["e"])("span",null,null,-1);Object(a["o"])();var te=R((function(e,t,n,c,r,o){return Object(a["n"])(),Object(a["d"])("div",X,[Object(a["e"])("div",{class:"prev",onClick:t[1]||(t[1]=function(t){return e.$emit("pagination",o.goToPage(-1))})},[Y]),Object(a["e"])("div",Z,Object(a["w"])(r.activePage),1),Object(a["e"])("div",{class:"next",onClick:t[2]||(t[2]=function(t){return e.$emit("pagination",o.goToPage(1))})},[ee])])})),ne={name:"Pagination",components:{},data:function(){return{activePage:1}},props:["pageData"],methods:{goToPage:function(e){var t=this.activePage+e;return t>this.pageData.maxPages||t<1?null:this.activePage=t<this.pageData.maxPages?t:this.pageData.maxPages}}};n("3433");ne.render=te,ne.__scopeId="data-v-4e56e85c";var ae=ne,ce={name:"Home",components:{Cards:T,ModalWindow:K,Pagination:ae},data:function(){return{items:[],itemUrl:"",itemsPerPage:9,maxPages:10,activeItems:0}},methods:{openModal:function(e){this.itemUrl=e},switchPage:function(e){e&&(this.items.length<e&&this.getImages(e),this.updateIndex(e))},getImages:function(e){var t=this;A.getImages(e,this.itemsPerPage).then((function(e){t.items.push(e.map((function(e){return new Q(e)})))})).catch((function(e){return console.log(e)}))},updateIndex:function(e){this.activeItems=e-1}},created:function(){this.switchPage(1)}};ce.render=_;var re=ce,oe=[{path:"/",name:"Home",component:re},{path:"/:pathMatch(.*)*",redirect:re}],ie=Object(g["a"])({history:Object(g["b"])("/image-vuejs-test/"),routes:oe}),se=ie;Object(a["c"])(h).use(se).mount("#app")},5703:function(e,t,n){},"5c50":function(e,t,n){"use strict";n("38bc")},"7e15":function(e,t,n){"use strict";n("a376")},a376:function(e,t,n){},a4ee:function(e,t,n){},d69e:function(e,t,n){},e03d:function(e,t,n){},fa56:function(e,t,n){}});
//# sourceMappingURL=app.a856c145.js.map