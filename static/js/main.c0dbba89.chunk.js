(this["webpackJsonpreact-pokemon"]=this["webpackJsonpreact-pokemon"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,n,t){e.exports=t(35)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,,,,,function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(12),o=t.n(r),l=t(7),i=(t(21),t(22),t(15)),s=t(2),m=t(3),u=t(4),d=t(5),p=(t(23),t(24),function(){return c.a.createElement("div",{className:"banner"},c.a.createElement("div",{className:"banner-content"},c.a.createElement("div",{className:"banner-eevee"}),c.a.createElement("div",{className:"banner-logo"}),c.a.createElement("div",{className:"banner-pikachu"})))}),v=(t(25),function(e){var n=e.handleChange,t=e.placeholder;return c.a.createElement("div",{className:"search"},c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{className:"search-field",type:"search",placeholder:t,onChange:n})))}),f=(t(26),function(){return c.a.createElement("div",{className:"loading"},c.a.createElement("div",{className:"spinner"}))}),E=(t(27),t(28),function(e){var n=e.pokemon;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n.id,".png"),alt:""})),c.a.createElement("div",{className:"card-text"},n.name))}),h=(t(29),function(e){Object(d.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=n.call.apply(n,[this].concat(c))).scrollingMagic=function(){var e=document.querySelector(".back-to-top");window.addEventListener("scroll",(function(){var n=window.pageYOffset,t=document.documentElement.clientHeight;n>t&&e.classList.add("back-to-top-show"),n<t&&e.classList.remove("back-to-top-show")})),e.addEventListener("click",(function e(){window.pageYOffset>0&&(window.scrollBy(0,-80),setTimeout(e,0))}))},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.scrollingMagic()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("button",{className:"back-to-top",onClick:this.scrollingMagic},"\u2191"))}}]),t}(c.a.Component)),g=function(e){var n=e.pokemon;return c.a.createElement("div",null,c.a.createElement("div",{className:"card-list"},n.map((function(e,n){return c.a.createElement(E,{key:n,pokemon:e})}))),c.a.createElement(h,null))};c.a.Component;var k=function(){return c.a.createElement("div",{className:"App"})};o.a.render(c.a.createElement(l.a,null,c.a.createElement(k,null)),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.c0dbba89.chunk.js.map