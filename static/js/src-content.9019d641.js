(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/content.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js"),c=t("./node_modules/docz/dist/index.m.js"),l=t("./src/site/data/poc.js"),i=t("./src/editor/components/Dante/Dante.js"),s=t("./node_modules/react-powerplug/dist/react-powerplug.esm.js");function m(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.default=function(e){var n=e.components,t=m(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"initial-content--read-only"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#initial-content--read-only"}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Initial Content & Read Only"),o.a.createElement(r.MDXTag,{name:"p",components:n},"This example cames with a example content. The content must be in the Draft's editor state format. check out the poc.js file in Dante's repo"),o.a.createElement(r.MDXTag,{name:"blockquote",components:n},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"Note that this example has a button to toggle the readOnly prop on editor.")),o.a.createElement(r.MDXTag,{name:"hr",components:n}),o.a.createElement(c.d,{__position:0,__code:"<Toggle initial={false}>\n  {({ on, toggle }) => {\n    return (\n      <div>\n        <Dante content={Lorem} read_only={on} />\n        <button onClick={toggle}>read only</button>\n        {on ? ' si' : ' no'}\n      </div>\n    )\n  }}\n</Toggle>",__scope:{props:t,Lorem:l.b,h1:l.e,Dante:i.a,State:s.a,Toggle:s.b}},o.a.createElement(s.b,{initial:!1},function(e){var n=e.on,t=e.toggle;return o.a.createElement("div",null,o.a.createElement(i.a,{content:l.b,read_only:n}),o.a.createElement("button",{onClick:t},"read only"),n?" si":" no")})),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"content-switch"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#content-switch"}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Content Switch"),o.a.createElement(r.MDXTag,{name:"p",components:n},"This example demonstrate how Dante editor react to content prop change"),o.a.createElement(c.d,{__position:1,__code:"<Toggle initial={false}>\n  {({ on, toggle }) => {\n    return (\n      <div>\n        <Dante content={on ? h1 : Lorem} />\n        <button onClick={toggle}>content switch</button>\n      </div>\n    )\n  }}\n</Toggle>",__scope:{props:t,Lorem:l.b,h1:l.e,Dante:i.a,State:s.a,Toggle:s.b}},o.a.createElement(s.b,{initial:!1},function(e){var n=e.on,t=e.toggle;return o.a.createElement("div",null,o.a.createElement(i.a,{content:n?l.e:l.b}),o.a.createElement("button",{onClick:t},"content switch"))})))}}}]);