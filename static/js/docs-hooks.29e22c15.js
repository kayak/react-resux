(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./docs/hooks.mdx":function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return d});var n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),r={},o="wrapper";function d(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(s.b)(o,Object.assign({},r,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"hooks"},"Hooks"),Object(s.b)("p",null,"React-Resux is a hooks-first library. To read/change data from the store see useModel. Optionally, for an easier REST API\ninterfacing, see useService."),Object(s.b)("h2",{id:"usemodel"},"useModel"),Object(s.b)("p",null,"Returns an object that can be used to access views/controllers for any given scope supported in the provided model."),Object(s.b)("h4",{id:"read-data-example"},"Read data example:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import {Model} from 'react-resux';\nimport {modelX} from './modelX';\n\nexport default function({page}) {\n  const xData = useModel(modelX);\n\n  // We assume, for the sake of this example, that modelX has a byPage scope and a asItem view.\n  // And that there is already data in the store for that particular model.\n  //\n  // Views:\n  // xData.scopeName(scopeId) -> returns raw data\n  // xData.scopeName(scopeId).aView() -> returns raw data transformed with a view\n  const items = xData.byPage(page).asItem();\n\n  return items.map(\n    item => <span key={item.id}>{item.label}</span>\n  );\n}\n")),Object(s.b)("h4",{id:"change-data-example"},"Change data example:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"  import {Model} from 'react-resux';\n  import {modelX} from './modelX';\n\n  export default function({page}) {\n  const xData = useModel(modelX);\n\n  // We assume, for the sake of this example, that modelX has a byPage scope and a disable\n  // controller. And that there is already data in the store for that particular model.\n  //\n  // Controllers:\n  // xData.scopeName(scopeId).disable() -> returns nothing but dispatchs a change action\n  const items = xData.byPage(page).disable();\n\n  return (\n    <button onClick={xData.byPage(page).disable}>Disable all in page #{page}</button>\n  );\n}\n")),Object(s.b)("h2",{id:"useservice"},"useService"),Object(s.b)("p",null,"Returns an object containing metadata related to the request in question. It's useful for abstracting rest API calls.\nIt's definitely optional, so if you rather use redux-saga, redux-pack, redux-thunks, or your own custom middleware,\nyou can ignore this hook."),Object(s.b)("h4",{id:"example"},"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import {Model} from 'react-resux';\nimport {userModel} from './userModel';\n\nconst userServiceSpec = {\n  model: userModel,\n  host: 'http://jsonplaceholder.typicode.com',\n  urls: {\n    byId: '/users/:id'\n  }\n};\n\nexport default function({userId}) {\n  const userData = useModel(userModel);\n  const userService = useService(userServiceSpec);\n\n  const userRequest = userService.byId(userId).get({pathParams: {id: userId}});\n\n  if (userRequest.isLoading) return 'Loading...';\n  else if (userRequest.errror) return `Error: {userRequest.error}`;\n\n  const user = userData.byId(userId);\n\n  return (\n    <span key={user.id}>\n      {user.name} <button onClick={\n        () => userService.byId(userId).delete({pathParams: {id: userId}})\n      }>Remove</button>\n    </span>\n  );\n}\n")))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/hooks.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-hooks.ec61ed80f08dbf66b9ec.js.map