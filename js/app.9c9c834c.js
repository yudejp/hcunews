(function(e){function t(t){for(var a,r,i=t[0],c=t[1],l=t[2],h=0,f=[];h<i.length;h++)r=i[h],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},s={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},"548c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=n("a925"),o=n("58ca"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("front",{on:{"change-locale":e.changeLocale}})],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.changeLocale}},[e._v(" "+e._s(e.$t("message.change_locale"))+" ")]),n("h1",[e._v(e._s(e.$t("message.welcome")))]),n("p",{domProps:{innerHTML:e._s(e.$t("message.desc"))}}),n("h2",[e._v(e._s(e.$t("message.whosmaintainer")))]),n("p",[n("span",{domProps:{innerHTML:e._s(e.$t("message.desc_maintainer_1"))}}),n("br"),n("span",{domProps:{innerHTML:e._s(e.$t("message.desc_maintainer_2"))}})]),n("h3",[e._v(e._s(e.$t("message.contact")))]),n("ul",[n("li",[e._v(e._s(e.$t("message.mail"))+": "),n("a",{attrs:{href:"mailto:admin@yude.moe"}},[e._v("admin@yude.moe")])]),e._m(0)]),n("h2",[e._v(e._s(e.$t("message.how")))]),n("p",[n("span",{domProps:{innerHTML:e._s(e.$t("message.desc_how_1"))}}),n("br"),n("span",{domProps:{innerHTML:e._s(e.$t("message.desc_how_2"))}})]),e._m(1),n("h2",[e._v(e._s(e.$t("message.misc")))]),n("p",{domProps:{innerHTML:e._s(e.$t("message.desc_misc_1"))}}),n("h2",[e._v(e._s(e.$t("message.related_links")))]),e._m(2),n("h2",[e._v("Special Thanks")]),e._m(3)])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[e._v("Twitter: "),n("a",{attrs:{href:"https://twitter.com/yudete"}},[e._v("@yudete")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://www.hiroshima-cu.ac.jp/news/"}},[e._v("お知らせ | 広島市立大学")])]),n("li",[n("a",{attrs:{href:"https://www.hiroshima-cu.ac.jp/news_student/"}},[e._v("お知らせ（在学生・保護者の方へ） | 広島市立大学")])]),n("li",[n("a",{attrs:{href:"https://www.hiroshima-cu.ac.jp/student/"}},[e._v("在学生・保護者の方へ｜広島市立大学")])]),n("li",[n("a",{attrs:{href:"https://www.hiroshima-cu.ac.jp/private/"}},[e._v("学内限定情報｜広島市立大学")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://www.hiroshima-cu.ac.jp/"}},[e._v("広島市立大学")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://japan.flow.microsoft.com/ja-jp/"}},[e._v("Microsoft Power Automate | Microsoft Power Platform")])]),n("li",[n("a",{attrs:{href:"https://vuejs.org/"}},[e._v("Vue.js - The Progressive JavaScript Framework.")])])])}],u={name:"front",methods:{changeLocale:function(){this.$emit("change-locale")}}},h=u,f=(n("642a"),n("2877")),m=Object(f["a"])(h,c,l,!1,null,"2f4ab09f",null),p=m.exports,_={name:"App",components:{front:p},metaInfo:function(){return{title:this.$t("message.welcome")}},methods:{changeLocale:function(){this.$i18n.locale="ja"===this.$i18n.locale?"en":"ja"}}},d=_,w=(n("034f"),Object(f["a"])(d,r,i,!1,null,null,null)),v=w.exports;n("f9e3"),n("2dd8");a["a"].config.productionTip=!1,a["a"].use(s["a"]),a["a"].use(o["a"]),new a["a"]({render:function(e){return e(v)}}).$mount("#app");var g={en:{message:{welcome:"About @hcunews",desc:"This account is <strong>unofficial</strong>, and there's no guarantee on it.",whosmaintainer:"Who is the maintainer of this account?",desc_maintainer_1:"This account is maintained by yude, the student of HCU, belongs to 1st grade of Department of Information Science.",desc_maintainer_2:"If there's problem with tweets or existence of this bot, please contact by the means written below.",how:"How does this bot work?",desc_how_1:"Microsoft Flow obtains the RSS data of HCU webpage, and when new article is available it posts notification to Twitter.",desc_how_2:"This bot observes to specific urls listed below.",misc:"Misc",desc_misc_1:"If you get multiple notifications of the same article, it's just a specification.",related_links:"Links",contact:"Contact",mail:"E-mail",change_locale:"日本語で見る"}},ja:{message:{welcome:"@hcunews について",desc:"このアカウントは<strong>非公式</strong>アカウントです。また、内容を保証するものではありません。",whosmaintainer:"これは誰が管理しているものですか？",desc_maintainer_1:"このアカウントは広島市立大学 情報科学部 1年の yude によって管理されているものです。",desc_maintainer_2:"アカウントがツイートする内容や、存在そのものに何か問題がある場合、下記の連絡先までお願いします。",how:"これはどうやって動いているのですか？",desc_how_1:"Microsoft Flow によって広島市立大学WebページのRSSを取得し、新しい記事が投稿されていたらツイートされます。",desc_how_2:"尚、次のURLに更新があったときのみツイートされます。",misc:"その他",desc_misc_1:"同じ記事が複数回投稿されることがありますが、これは Microsoft Flow の仕様上のものです。",related_links:"関連リンク",contact:"連絡先",mail:"電子メール",change_locale:"View in English"}}},b=new s["a"]({locale:"ja",messages:g});new a["a"]({render:function(e){return e(v)},i18n:b}).$mount("#app")},"642a":function(e,t,n){"use strict";var a=n("548c"),s=n.n(a);s.a},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.9c9c834c.js.map