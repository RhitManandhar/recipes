(this.webpackJsonpwebdev=this.webpackJsonpwebdev||[]).push([[0],{14:function(t,n,e){"use strict";e.r(n);var c=e(1),r=e.n(c),u=e(4),o=e.n(u),i=e(2),s=e(5),a=e(6),j=e(8),b=e(7),l=e(0),d=function(t){Object(j.a)(e,t);var n=Object(b.a)(e);function e(t){var c;return Object(s.a)(this,e),(c=n.call(this,t)).state={count:t.initialCount},c}return Object(a.a)(e,[{key:"render",value:function(){var t=this;return Object(l.jsx)(h.Consumer,{children:function(n){return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{style:n,onClick:function(){return t.changeCount(-1)},children:"-"}),Object(l.jsx)("span",{children:t.state.count}),Object(l.jsx)("button",{style:n,onClick:function(){return t.changeCount(1)},children:"+"})]})}})}},{key:"changeCount",value:function(t){this.setState((function(n){return{count:n.count+t}}))}}]),e}(c.Component);function O(t){var n=t.initialCount,e=Object(c.useState)(n),r=Object(i.a)(e,2),u=r[0],o=r[1],s=Object(c.useContext)(h);return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{style:s,onClick:function(){return o((function(t){return t-1}))},children:"-"}),Object(l.jsx)("span",{children:u}),Object(l.jsx)("button",{style:s,onClick:function(){return o((function(t){return t+1}))},children:"+"})]})}var h=r.a.createContext();var C=function(){var t=Object(c.useState)("red"),n=Object(i.a)(t,2),e=n[0],r=n[1];return Object(l.jsxs)(h.Provider,{value:{backgroundColor:e},children:["Counter",Object(l.jsx)(d,{initialCount:9}),"CounterHooks",Object(l.jsx)(O,{initialCount:8}),Object(l.jsx)("button",{onClick:function(){return r((function(t){return"red"===t?"blue":"red"}))},children:"Toggle Theme"})]})};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4d26d663.chunk.js.map