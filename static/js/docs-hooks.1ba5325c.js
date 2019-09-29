(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./docs/hooks.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));var s=a("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),o={},r="wrapper";function c(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(n.b)(r,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"hooks"},"Hooks"),Object(n.b)("p",null,"React-Resux is a hooks-first library and it provides three distinct hooks as part of its public API. They are:"),Object(n.b)("h2",{id:"usemodelselector"},"useModelSelector"),Object(n.b)("p",null,"Returns the result of a given a selector, which has the state and perhaps additional arguments as arguments. For\nmore info see its ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/README.md#usemodelselector"}),"API")," reference."),Object(n.b)("h4",{id:"read-data-example"},"Read data example:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import {useModelSelector} from 'react-resux';\nimport {modelX} from './modelX';\n\nexport default function({page}) {\n  // We assume here that modelX has a selector defined.\n  // Fyi modelXSelectors arg will include all selectors defined on modelX.\n  const xData = useModelSelector(modelX, (state, modelXSelectors) => modelXSelectors.dataByPage(page));\n\n  return items.map(\n    item => <span key={item.id}>{xData.label}</span>\n  );\n}\n")),Object(n.b)("h2",{id:"usemodelactions"},"useModelActions"),Object(n.b)("p",null,"Returns an object with all reducer/effect action creators, defined in the provided model, already bound with\nredux's dispatch. For more info see its ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/README.md#usemodelactions"}),"API")," reference."),Object(n.b)("h4",{id:"read-data-example-1"},"Read data example:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import {useModelActions} from 'react-resux';\nimport {modelX} from './modelX';\n\nexport default function({page}) {\n  // We assume here that modelX has a reducer called swapValue defined.\n  // Fyi modelXActions will contain all reducers/effects defined on modelX.\n  const modelXActions = useModelActions(modelX);\n\n  return (<button onClick={modelXActions.swapValue}>Click here to swap value!</button>);\n}\n")),Object(n.b)("h2",{id:"usesubscriberactions"},"useSubscriberActions"),Object(n.b)("p",null,"Returns an object with all effect action creators, defined in the provided subscriber, already bound with redux's\ndispatch. For more info see its ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/README.md#usesubscriberactions"}),"API")," reference."),Object(n.b)("h4",{id:"read-data-example-2"},"Read data example:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import {useSubscriberAction} from 'react-resux';\nimport {subscriberX} from './modelX';\n\nexport default function({page}) {\n  // We assume here that modelX has an effect called fetchPageA defined.\n  // Fyi subscriberXActions will contain all effects defined on subscriberX.\n  const subscriberXActions = useSubscriberAction(subscriberX);\n\n  return (<button onClick={subscriberXActions.fetchPageA}>Click here to fetch page a!</button>)\n}\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/hooks.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-hooks.a8e423490831aef2efdd.js.map