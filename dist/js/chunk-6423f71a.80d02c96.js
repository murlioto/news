(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6423f71a"],{"21d8":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.news,(function(e){return n("div",{key:e.id,staticClass:"news-item-normal"},[e.havePic?n("div",{staticClass:"image"},[n("a",{attrs:{href:e.link,target:"_blank"}},[n("img",{attrs:{src:e.imageurls[0].url,alt:""}})])]):t._e(),n("div",{staticClass:"words"},[n("h2",{staticClass:"title"},[n("a",{attrs:{href:e.link,target:"_blank"}},[t._v(" "+t._s(e.title)+" ")])]),n("div",{staticClass:"aside"},[n("span",[t._v(t._s(e.channelName))]),n("span",[t._v("来源: "+t._s(e.source))]),n("span",[t._v("发布日期: "+t._s(e.pubDate))])]),n("div",{staticClass:"content"},[t._v(" "+t._s(e.content)+" ")])])])})),0)},a=[],i={props:{news:{type:Array,require:!0,default:function(){return[]}}}},s=i,o=(n("d437"),n("2877")),c=Object(o["a"])(s,r,a,!1,null,"aafe3686",null);e["a"]=c.exports},"3a5e":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading"},[n("span"),n("span"),n("span"),n("span"),n("span")])}],i=(n("a308"),n("2877")),s={},o=Object(i["a"])(s,r,a,!1,null,"6ddc0e77",null);e["a"]=o.exports},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,a=n("69f3"),i=n("7dd0"),s="String Iterator",o=a.set,c=a.getterFor(s);i(String,"String",(function(t){o(this,{type:s,string:String(t),index:0})}),(function(){var t,e=c(this),n=e.string,a=e.index;return a>=n.length?{value:void 0,done:!0}:(t=r(n,a),e.index+=t.length,{value:t,done:!1})}))},"47f5":function(t,e,n){"use strict";var r=n("b385"),a=n.n(r);a.a},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),a=n("5899"),i="["+a+"]",s=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),c=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},6547:function(t,e,n){var r=n("a691"),a=n("1d80"),i=function(t){return function(e,n){var i,s,o=String(a(e)),c=r(n),u=o.length;return c<0||c>=u?t?"":void 0:(i=o.charCodeAt(c),i<55296||i>56319||c+1===u||(s=o.charCodeAt(c+1))<56320||s>57343?t?o.charAt(c):i:t?o.slice(c,c+2):s-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},7156:function(t,e,n){var r=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var i,s;return a&&"function"==typeof(i=e.constructor)&&i!==n&&r(s=i.prototype)&&s!==n.prototype&&a(t,s),t}},"7d79":function(t,e,n){},a308:function(t,e,n){"use strict";var r=n("f6e3"),a=n.n(r);a.a},a9e3:function(t,e,n){"use strict";var r=n("83ab"),a=n("da84"),i=n("94ca"),s=n("6eeb"),o=n("5135"),c=n("c6b6"),u=n("7156"),l=n("c04e"),d=n("d039"),f=n("7c73"),p=n("241c").f,h=n("06cf").f,v=n("9bf2").f,m=n("58a8").trim,g="Number",b=a[g],w=b.prototype,y=c(f(w))==g,I=function(t){var e,n,r,a,i,s,o,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=m(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+u}for(i=u.slice(2),s=i.length,o=0;o<s;o++)if(c=i.charCodeAt(o),c<48||c>a)return NaN;return parseInt(i,r)}return+u};if(i(g,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var _,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(y?d((function(){w.valueOf.call(n)})):c(n)!=g)?u(new b(I(e)),n,S):I(e)},C=r?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;C.length>x;x++)o(b,_=C[x])&&!o(S,_)&&v(S,_,h(b,_));S.prototype=w,w.constructor=S,s(a,g,S)}},b385:function(t,e,n){},bb51:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mySwiper",{attrs:{swipers:t.swipers,duration:2e3}}),n("myChannels",{on:{changeId:t.handleChangeId}}),n("myLoading",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}]}),n("myNewsList",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],attrs:{news:t.news}})],1)},a=[];n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}n("96cf");var s=n("1da1"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container",on:{mouseenter:t.autoStop,mouseleave:t.autoStart}},[n("div",{staticClass:"images",style:{width:100*t.swipers.length+"%",marginLeft:100*-t.currentIndex+"%"}},t._l(t.swipers,(function(t){return n("a",{key:t.id,attrs:{href:t.link,target:"_blank"}},[n("img",{attrs:{src:t.ImgUrl,alt:t.link}})])})),0),n("ul",{staticClass:"dots"},t._l(t.swipers,(function(e,r){return n("li",{key:r,class:{active:r==t.currentIndex?"active":""},on:{click:function(e){t.currentIndex=r}}})})),0)])},c=[],u=(n("a9e3"),{name:"mySwiper",props:{swipers:{type:Array,required:!0,default:function(){return[]}},duration:{type:Number||String,required:!1,default:3e3}},data:function(){return{currentIndex:0,timer:null}},created:function(){this.autoStart()},methods:{autoStart:function(){var t=this;this.timer||(this.timer=setInterval((function(){t.currentIndex=(t.currentIndex+1)%t.swipers.length}),this.duration))},autoStop:function(){clearInterval(this.timer),this.timer=null}}}),l=u,d=(n("d979"),n("2877")),f=Object(d["a"])(l,o,c,!1,null,"518e467f",null),p=f.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data.length>0?n("div",{staticClass:"news-types"},[t._l(t.showChannles,(function(e){return n("div",{key:e.channelId,staticClass:"item",class:{active:e.channelId==t.chooseId},on:{click:function(n){return t.switchTo(e.channelId)}}},[n("span",{staticClass:"name"},[t._v(t._s(e.name))])])})),n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.isCollapse=!t.isCollapse}}},[t._v(t._s(t.isCollapse?"展开":"收起"))])],2):t._e()},v=[],m=(n("fb6a"),n("5530")),g=n("2f62"),b={data:function(){return{isCollapse:!0,chooseId:null}},computed:Object(m["a"])(Object(m["a"])({},Object(g["b"])("channels",["data"])),{},{showChannles:function(){return this.isCollapse?this.data.slice(0,7):this.data}}),created:function(){console.log(this.data)},watch:{data:{immediate:!0,handler:function(){this.data.length>0&&this.switchTo(this.data[0].channelId)}}},methods:{switchTo:function(t){this.chooseId=t,this.$emit("changeId",this.chooseId)}}},w=b,y=(n("47f5"),Object(d["a"])(w,h,v,!1,null,"aa93f2ac",null)),I=y.exports,_=n("21d8"),S=n("00fa"),C=n("3a5e"),x={name:"Home",components:{mySwiper:p,myChannels:I,myNewsList:_["a"],myLoading:C["a"]},data:function(){return{swipers:[{id:0,ImgUrl:n("d569"),link:"https://www.baidu.com"},{id:1,ImgUrl:n("d569"),link:"https://www.baidu.com"},{id:2,ImgUrl:n("d569"),link:"https://www.baidu.com"}],news:[],isLoading:!0}},methods:{handleChangeId:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(i(t)),e.isLoading=!0,n.next=4,Object(S["a"])(t,1,10);case 4:r=n.sent,console.log(r),e.news=r.contentlist,e.isLoading=!1;case 8:case"end":return n.stop()}}),n)})))()}}},N=x,A=Object(d["a"])(N,r,a,!1,null,"e7818276",null);e["default"]=A.exports},bce7:function(t,e,n){},d28b:function(t,e,n){var r=n("746f");r("iterator")},d437:function(t,e,n){"use strict";var r=n("bce7"),a=n.n(r);a.a},d569:function(t,e,n){t.exports=n.p+"img/1.4840989a.jpg"},d979:function(t,e,n){"use strict";var r=n("7d79"),a=n.n(r);a.a},ddb0:function(t,e,n){var r=n("da84"),a=n("fdbc"),i=n("e260"),s=n("9112"),o=n("b622"),c=o("iterator"),u=o("toStringTag"),l=i.values;for(var d in a){var f=r[d],p=f&&f.prototype;if(p){if(p[c]!==l)try{s(p,c,l)}catch(v){p[c]=l}if(p[u]||s(p,u,d),a[d])for(var h in i)if(p[h]!==i[h])try{s(p,h,i[h])}catch(v){p[h]=i[h]}}}},e01a:function(t,e,n){"use strict";var r=n("23e7"),a=n("83ab"),i=n("da84"),s=n("5135"),o=n("861d"),c=n("9bf2").f,u=n("e893"),l=i.Symbol;if(a&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(d[e]=!0),e};u(f,l);var p=f.prototype=l.prototype;p.constructor=f;var h=p.toString,v="Symbol(test)"==String(l("test")),m=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=h.call(t);if(s(d,t))return"";var n=v?e.slice(7,-1):e.replace(m,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:f})}},f6e3:function(t,e,n){},fb6a:function(t,e,n){"use strict";var r=n("23e7"),a=n("861d"),i=n("e8b5"),s=n("23cb"),o=n("50c4"),c=n("fc6a"),u=n("8418"),l=n("b622"),d=n("1dde"),f=n("ae40"),p=d("slice"),h=f("slice",{ACCESSORS:!0,0:0,1:2}),v=l("species"),m=[].slice,g=Math.max;r({target:"Array",proto:!0,forced:!p||!h},{slice:function(t,e){var n,r,l,d=c(this),f=o(d.length),p=s(t,f),h=s(void 0===e?f:e,f);if(i(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?a(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return m.call(d,p,h);for(r=new(void 0===n?Array:n)(g(h-p,0)),l=0;p<h;p++,l++)p in d&&u(r,l,d[p]);return r.length=l,r}})}}]);
//# sourceMappingURL=chunk-6423f71a.80d02c96.js.map