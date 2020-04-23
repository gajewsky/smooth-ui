(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{U2wO:function(e,t,o){"use strict";var n=o("rRS1");o.d(t,"a",(function(){return n.b}))},X9uD:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return c})),o.d(t,"default",(function(){return s}));o("rGqo"),o("yt8O"),o("Btvt"),o("RW0V"),o("91GP"),o("q1tI");var n=o("E/Ix"),r=o("U2wO");var c={},i={_frontmatter:c},a=r.a;function s(e){var t=e.components,o=function(e,t){if(null==e)return{};var o,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)o=c[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,["components"]);return Object(n.b)(a,Object.assign({},i,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"dark-mode"},Object(n.b)("a",Object.assign({parentName:"h1"},{href:"#dark-mode","aria-hidden":!0,className:"anchor"}),Object(n.b)("svg",{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Dark Mode"),Object(n.b)("p",null,"Dark Mode is built-in Smooth UI, every components have their dark mode."),Object(n.b)("h2",{id:"use-with-xstyled-color-modes"},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#use-with-xstyled-color-modes","aria-hidden":!0,className:"anchor"}),Object(n.b)("svg",{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Use with xstyled color modes"),Object(n.b)("p",null,"xstyled has a ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://www.smooth-code.com/open-source/xstyled/docs/color-modes/"}),"built-in support for color modes and dark mode"),". If you use it, Smooth UI is already compatible except one thing: custom properties. Smooth UI is very dynamic and it is yet possible to achieve everything using custom properties."),Object(n.b)("p",null,"To disable it, ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://www.smooth-code.com/open-source/xstyled/docs/color-modes/#turn-off-custom-properties"}),"set ",Object(n.b)("inlineCode",{parentName:"a"},"useCustomProperties")," to ",Object(n.b)("inlineCode",{parentName:"a"},"false")," in your theme"),"."),Object(n.b)("h2",{id:"use-dark-mode-without-xstyled"},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#use-dark-mode-without-xstyled","aria-hidden":!0,className:"anchor"}),Object(n.b)("svg",{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Use dark mode without xstyled"),Object(n.b)("p",null,"To enable dark mode, add a theme and specify ",Object(n.b)("inlineCode",{parentName:"p"},"colorMode: 'dark'"),":"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0}),"import React from 'react'\nimport { ThemeProvider } from 'styled-components'\nimport { Alert } from '@smooth-ui/core-sc'\n\nconst darkTheme = {\n  colorMode: 'dark',\n}\n\nconst lightTheme = {\n  colorMode: 'light',\n}\n\nrender(\n  <div>\n    <ThemeProvider theme={darkTheme}>\n      <Alert>Dark Alert</Alert>\n    </ThemeProvider>\n    <ThemeProvider theme={lightTheme}>\n      <Alert>Light Alert</Alert>\n    </ThemeProvider>\n  </div>,\n)\n")),Object(n.b)("p",null,"See ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/open-source/smooth-ui/docs/theming/"}),"theming documentation"),"."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-dark-mode-mdx-34d27463aadf1b855142.js.map