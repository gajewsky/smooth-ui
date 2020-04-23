(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"9jFV":function(e,c,a){"use strict";a.r(c),a.d(c,"_frontmatter",(function(){return o})),a.d(c,"default",(function(){return s}));a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP"),a("q1tI");var n=a("E/Ix"),t=a("U2wO"),b=a("UBCn"),h=a("ZRxF");var o={},i={_frontmatter:o},r=t.a;function s(e){var c=e.components,a=function(e,c){if(null==e)return{};var a,n,t={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],c.indexOf(a)>=0||(t[a]=e[a]);return t}(e,["components"]);return Object(n.b)(r,Object.assign({},i,a,{components:c,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"checkbox"},Object(n.b)("a",Object.assign({parentName:"h1"},{href:"#checkbox","aria-hidden":!0,className:"anchor"}),Object(n.b)("svg",{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Checkbox"),Object(n.b)("h2",{id:"basic"},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#basic","aria-hidden":!0,className:"anchor"}),Object(n.b)("svg",{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Basic"),Object(n.b)("p",null,"It receives the same props as controlled inputs, such as ",Object(n.b)("inlineCode",{parentName:"p"},"checked")," and ",Object(n.b)("inlineCode",{parentName:"p"},"onChange"),"."),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0}),"import React from 'react'\nimport { Checkbox, Boxer } from '@smooth-ui/core-sc'\n\nfunction Example() {\n  const [checked, setChecked] = React.useState(false)\n  const toggle = () => setChecked(!checked)\n  return (\n    <label>\n      <Checkbox checked={checked} onChange={toggle} /> Check me\n    </label>\n  )\n}\n\nrender(<Example />)\n")),Object(n.b)("h2",{id:"usecheckboxstate"},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#usecheckboxstate","aria-hidden":!0,className:"anchor"}),Object(n.b)("svg",{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"useCheckboxState"),Object(n.b)("p",null,"For convenience, ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://reakit.io/docs/checkbox/#usecheckboxstate"}),"Reakit provides a ",Object(n.b)("inlineCode",{parentName:"a"},"useCheckboxState"))," that already implements the state logic."),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0}),"import React from 'react'\nimport { Checkbox, useCheckboxState } from '@smooth-ui/core-sc'\n\nfunction Example() {\n  const checkbox = useCheckboxState()\n  return (\n    <label>\n      <Checkbox {...checkbox} /> Check me\n    </label>\n  )\n}\n\nrender(<Example />)\n")),Object(n.b)("h2",{id:"sizes"},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#sizes","aria-hidden":!0,className:"anchor"}),Object(n.b)("svg",{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Sizes"),Object(n.b)("p",null,"Set scales using ",Object(n.b)("inlineCode",{parentName:"p"},"scale")," prop like ",Object(n.b)("inlineCode",{parentName:"p"},'"xs"'),", ",Object(n.b)("inlineCode",{parentName:"p"},'"sm"'),", ",Object(n.b)("inlineCode",{parentName:"p"},'"lg"')," or ",Object(n.b)("inlineCode",{parentName:"p"},'"xl"'),". The default scale is ",Object(n.b)("inlineCode",{parentName:"p"},'"base"'),"."),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0}),'import React from \'react\'\nimport {\n  Checkbox,\n  useCheckboxState,\n  FormCheck,\n  FormCheckLabel,\n  Boxer,\n} from \'@smooth-ui/core-sc\'\n\nfunction Example() {\n  const checkbox = useCheckboxState()\n  return (\n    <Boxer my={3}>\n      <FormCheck>\n        <Checkbox {...checkbox} scale="xs" name="xs" />\n        <FormCheckLabel scale="xs" name="xs">\n          Extra small\n        </FormCheckLabel>\n      </FormCheck>\n      <FormCheck>\n        <Checkbox {...checkbox} scale="sm" name="sm" />\n        <FormCheckLabel scale="sm" name="sm">\n          Small\n        </FormCheckLabel>\n      </FormCheck>\n      <FormCheck>\n        <Checkbox {...checkbox} scale="base" name="base" />\n        <FormCheckLabel scale="base" name="base">\n          Base (default)\n        </FormCheckLabel>\n      </FormCheck>\n      <FormCheck>\n        <Checkbox {...checkbox} scale="lg" name="lg" />\n        <FormCheckLabel scale="lg" name="lg">\n          Large\n        </FormCheckLabel>\n      </FormCheck>\n      <FormCheck>\n        <Checkbox {...checkbox} scale="xl" name="xl" />\n        <FormCheckLabel scale="xl" name="xl">\n          Extra large\n        </FormCheckLabel>\n      </FormCheck>\n    </Boxer>\n  )\n}\n\nrender(<Example />)\n')),Object(n.b)("h2",{id:"disabled"},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#disabled","aria-hidden":!0,className:"anchor"}),Object(n.b)("svg",{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Disabled"),Object(n.b)("p",null,"Disable using ",Object(n.b)("inlineCode",{parentName:"p"},"disabled")," prop."),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0}),"import React from 'react'\nimport {\n  Checkbox,\n  FormCheck,\n  FormCheckLabel,\n  useCheckboxState,\n} from '@smooth-ui/core-sc'\n\nfunction Example() {\n  const checkbox = useCheckboxState({ state: true })\n  return (\n    <FormCheck>\n      <Checkbox disabled {...checkbox} />\n      <FormCheckLabel>Disabled 🤷‍♂️</FormCheckLabel>\n    </FormCheck>\n  )\n}\n\nrender(<Example />)\n")),Object(n.b)("h2",{id:"accessibility"},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#accessibility","aria-hidden":!0,className:"anchor"}),Object(n.b)("svg",{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Accessibility"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Checkbox")," uses ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://reakit.io/docs/checkbox"}),"Reakit Checkbox")," under the hood, it means it follows ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://www.w3.org/TR/wai-aria-practices/#checkbox"}),"WAI-ARIA Checkbox Pattern"),"."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"CheckboxGroup")," follows ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20160317/examples/checkbox/checkbox-2.html"}),"WAI_ARIA Checkbox Group Pattern"),"."),Object(n.b)("p",null,Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://reakit.io/docs/checkbox/#accessibility"}),"Read more about accessibility on Reakit"),"."),Object(n.b)("h2",{id:"api"},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#api","aria-hidden":!0,className:"anchor"}),Object(n.b)("svg",{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"API"),Object(n.b)("h3",{id:"usecheckboxstate-1"},Object(n.b)("a",Object.assign({parentName:"h3"},{href:"#usecheckboxstate-1","aria-hidden":!0,className:"anchor"}),Object(n.b)("svg",{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"useCheckboxState"),Object(n.b)("p",null,"See ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://reakit.io/docs/checkbox/#usecheckboxstate-1"}),"Reakit documentation"),"."),Object(n.b)("h3",{id:"checkbox-1"},Object(n.b)("a",Object.assign({parentName:"h3"},{href:"#checkbox-1","aria-hidden":!0,className:"anchor"}),Object(n.b)("svg",{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Checkbox"),Object(n.b)(h.a,{of:b.Checkbox,mdxType:"Props"}),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Switch")," also includes a bunch of state properties, see ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://reakit.io/docs/checkbox/#checkbox"}),"Reakit documentation"),"."),Object(n.b)("h3",{id:"checkboxgroup"},Object(n.b)("a",Object.assign({parentName:"h3"},{href:"#checkboxgroup","aria-hidden":!0,className:"anchor"}),Object(n.b)("svg",{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"CheckboxGroup"),Object(n.b)(h.a,{of:b.CheckboxGroup,mdxType:"Props"}))}s.isMDXComponent=!0},U2wO:function(e,c,a){"use strict";var n=a("rRS1");a.d(c,"a",(function(){return n.b}))}}]);
//# sourceMappingURL=component---src-pages-docs-checkbox-mdx-9f8607ea895147e4b4e1.js.map