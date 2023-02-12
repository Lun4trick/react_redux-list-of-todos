(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c.n(n),s=c(4),r=c(18),o=c(7),i=c(15),l=c(16),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},b=c(5),h=function(e){return{type:"filter/QUERY",payload:e}},O=function(e){return{type:"filter/STATUS",payload:e}},f={query:"",status:"all"},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/QUERY":return Object(b.a)(Object(b.a)({},e),{},{query:t.payload});case"filter/STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.payload});default:return e}},p=function(e){return{type:"todos/SET",payload:e}},x=function(e){return{type:"todos/LOADING",payload:e}},v={todos:[],loading:!1},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"todos/SET":return Object(b.a)(Object(b.a)({},e),{},{todos:t.payload});case"todos/LOADING":return Object(b.a)(Object(b.a)({},e),{},{loading:t.payload});default:return e}},N=Object(o.combineReducers)({currentTodo:j,filter:m,todos:y}),g=Object(o.createStore)(N,Object(i.composeWithDevTools)(Object(o.applyMiddleware)(l.a))),T=c(10),w=c(3),S=c(6),E=c.n(S),k=c(0),C=(c(27),c(28),c(8)),A=c.n(C),L=(s.b,s.c),D=c(1),I=function(e){var t=e.isError,c=L((function(e){return e.filter.status})),n=L((function(e){return e.filter.query})),a=L((function(e){var t;return null===(t=e.currentTodo)||void 0===t?void 0:t.id})),r=L((function(e){return e.todos.todos})).filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})),o=Object(s.b)(),i=Object(k.useMemo)((function(){switch(c){case"active":return r.filter((function(e){return!e.completed}));case"completed":return r.filter((function(e){return e.completed}));default:return r}}),[c,n,r]),l=d,u=!i.length&&!t;return Object(D.jsxs)(D.Fragment,{children:[u&&Object(D.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),t&&Object(D.jsx)("p",{className:"notification is-danger",children:"Error occured while todos are loaded!"}),i.length>0&&Object(D.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(D.jsx)("thead",{children:Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{children:"#"}),Object(D.jsx)("th",{children:Object(D.jsx)("span",{className:"icon",children:Object(D.jsx)("i",{className:"fas fa-check"})})}),Object(D.jsx)("th",{children:"Title"}),Object(D.jsx)("th",{children:" "})]})}),Object(D.jsx)("tbody",{children:i.map((function(e){return Object(D.jsxs)("tr",{"data-cy":"todo",children:[Object(D.jsx)("td",{className:"is-vcentered",children:e.id}),Object(D.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(D.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(D.jsx)("i",{className:"fas fa-check"})})}),Object(D.jsx)("td",{className:"is-vcentered is-expanded",children:Object(D.jsx)("p",{className:A()({"has-text-danger":!e.completed},{"has-text-success":e.completed}),children:e.title})}),Object(D.jsx)("td",{className:"has-text-right is-vcentered",children:Object(D.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){o(l(e))},children:Object(D.jsx)("span",{className:"icon",children:Object(D.jsx)("i",{className:A()({"far fa-eye-slash":e.id===a},{"far fa-eye":e.id!==a})})})})})]},e.id)}))})]})]})},R=c(17),_=function(){var e=Object(s.b)(),t=h,c=O,n=Object(k.useState)(""),a=Object(w.a)(n,2),r=a[0],o=a[1],i=Object(R.debounce)((function(c){e(t(c))}),500);return Object(D.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(D.jsx)("p",{className:"control",children:Object(D.jsx)("span",{className:"select",children:Object(D.jsx)("select",{"data-cy":"statusSelect",onChange:function(t){e(c(t.target.value))},children:[{name:"All",value:"all"},{name:"Active",value:"active"},{name:"Completed",value:"completed"}].map((function(e){return Object(D.jsx)("option",{value:e.value,children:e.name},e.name)}))})})}),Object(D.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(D.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",onChange:function(e){o(e.target.value),i(e.target.value)},value:r}),Object(D.jsx)("span",{className:"icon is-left",children:Object(D.jsx)("i",{className:"fas fa-magnifying-glass"})}),r.length>0&&Object(D.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(D.jsx)("button",{"data-cy":"clearSearchButton",onClick:function(){o(""),e(t(""))},type:"button",className:"delete"})})]})]})};function M(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var U=function(e){return M("/users/".concat(e))},q=(c(32),function(){return Object(D.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(D.jsx)("div",{className:"Loader__content"})})}),B=function(){var e=L((function(e){return e.currentTodo})),t=Object(k.useState)(),c=Object(w.a)(t,2),n=c[0],a=c[1],r=Object(k.useState)(!1),o=Object(w.a)(r,2),i=o[0],l=o[1],d=Object(k.useState)(!0),j=Object(w.a)(d,2),b=j[0],h=j[1],O=Object(s.b)(),f=u;function m(){return(m=Object(T.a)(E.a.mark((function t(){var c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h(!0),t.prev=1,t.next=4,U(e.userId);case 4:c=t.sent,a(c),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),l(!0);case 11:return t.prev=11,h(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))).apply(this,arguments)}return Object(k.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[]),Object(D.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(D.jsx)("div",{className:"modal-background"}),b&&Object(D.jsx)(q,{}),!b&&Object(D.jsxs)("div",{className:"modal-card",children:[Object(D.jsxs)("header",{className:"modal-card-head",children:[Object(D.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===e||void 0===e?void 0:e.id)}),Object(D.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){O(f())}})]}),Object(D.jsxs)("div",{className:"modal-card-body",children:[Object(D.jsx)("p",{className:"block","data-cy":"modal-title",children:null===e||void 0===e?void 0:e.title}),Object(D.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(D.jsx)("strong",{className:A()({"has-text-danger":!(null!==e&&void 0!==e&&e.completed)},{"has-text-success":null===e||void 0===e?void 0:e.completed}),children:null!==e&&void 0!==e&&e.completed?"Done":"Planned"})," by ",!i&&Object(D.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]})]})},F=function(){var e=L((function(e){return e.todos.loading})),t=L((function(e){return e.currentTodo})),c=x,n=p,a=Object(s.b)(),r=Object(k.useState)(!1),o=Object(w.a)(r,2),i=o[0],l=o[1],d=function(){var e=Object(T.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(c(!0)),e.prev=1,e.next=4,M("/todos");case 4:t=e.sent,a(n(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),l(!0);case 11:return e.prev=11,a(c(!1)),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(k.useEffect)((function(){d()}),[]),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("div",{className:"section",children:Object(D.jsx)("div",{className:"container",children:Object(D.jsxs)("div",{className:"box",children:[Object(D.jsx)("h1",{className:"title",children:"Todos:"}),Object(D.jsx)("div",{className:"block",children:Object(D.jsx)(_,{})}),Object(D.jsxs)("div",{className:"block",children:[e&&Object(D.jsx)(q,{}),!e&&Object(D.jsx)(I,{isError:i})]})]})})}),t&&Object(D.jsx)(B,{})]})},G=function(){return Object(D.jsx)(s.a,{store:g,children:Object(D.jsx)(r.a,{children:Object(D.jsx)(F,{})})})};a.a.render(Object(D.jsx)(G,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.cb858048.chunk.js.map