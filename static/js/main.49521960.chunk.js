(window.webpackJsonpreirasys=window.webpackJsonpreirasys||[]).push([[0],{32:function(e,t,a){e.exports=a(68)},38:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},67:function(e){e.exports=JSON.parse("{}")},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),l=a.n(c),o=a(9),s=a(2),i=(a(37),a(38),a(3)),u=a.n(i),m=a(7),p=a(4),d=a(1),f=a(14),b=a(10),E=new function e(t){Object(b.a)(this,e);var a=t.indexOf(":",6);this.domainName=t.slice(0,a)+":8080/reirasys_api"}(window.location.href);function g(e){var t=[{id:"000001",name:"John",up_dep:"no"},{id:"000101",name:"Romy",up_dep:"000001"},{id:"000201",name:"Celia",up_dep:"000101"},{id:"000301",name:"Mary",up_dep:"000101"},{id:"001101",name:"John",up_dep:"000301"},{id:"001101",name:"Akane",up_dep:"001101"},{id:"221004",name:"Reira",up_dep:"000201"}];return function e(a){var n,r={id:a,name:""},c=t.find((function(e){return r.name=e.name,e.id==a}));return"no"==c.up_dep?[r]:(n=e(c.up_dep))&&[r].concat(Object(f.a)(n))}(e)}var O=a(8),v=a.n(O);function h(e,t){return y.apply(this,arguments)}function y(){return(y=Object(m.a)(u.a.mark((function e(t,a){var n,r,c,l,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"cityslicka"!==a.password&&(a.password=""),"https://reqres.in/api/login",e.prev=2,t({type:"REQUEST_LOGIN"}),e.next=6,v.a.post("".concat("https://reqres.in/api/login"),a);case 6:if(n=e.sent,r=n.data.token,!(c=JSON.stringify(r))){e.next=15;break}return t({type:"LOGIN_SUCCESS",payload:l={userno:"000002",dep:"\u8cc7\u8a0a\u6280\u8853\u90e8",IsLogin:"true",loading:!1,token:c}}),localStorage.setItem("currentUser",JSON.stringify(l)),localStorage.setItem("token",c),e.abrupt("return",l);case 15:e.next=22;break;case 17:e.prev=17,e.t0=e.catch(2),console.log(e.t0.response.data),o=e.t0.response.data,t({type:"LOGIN_ERROR",error:o.error});case 22:case"end":return e.stop()}}),e,null,[[2,17]])})))).apply(this,arguments)}function j(e,t){return w.apply(this,arguments)}function w(){return(w=Object(m.a)(u.a.mark((function e(t,a){var n,r,c,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"cityslicka"!==a.password&&(a.password=""),"https://reqres.in/api/register",e.prev=2,t({type:"REQUEST_CREATE"}),e.next=6,v.a.post("".concat("https://reqres.in/api/register"),a);case 6:if(n=e.sent,r=n.data,console.log(r),!r.id){e.next=14;break}return c={userno:r.id,dep:"\u884c\u653f\u7ba1\u7406\u8655",IsLogin:"true",loading:!1},t({type:"CREATE_SUCCESS",payload:c}),localStorage.setItem("currentUser",JSON.stringify(c)),e.abrupt("return",c);case 14:return t({type:"CREATE_ERROR",error:r.error}),e.abrupt("return");case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0.response.data),l=e.t0.response.data,t({type:"CREATE_ERROR",error:l.error});case 23:case"end":return e.stop()}}),e,null,[[2,18]])})))).apply(this,arguments)}function N(e){return S.apply(this,arguments)}function S(){return(S=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOGOUT"}),localStorage.removeItem("currentUser"),localStorage.removeItem("token");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P=localStorage.getItem("currentUser")?JSON.parse(localStorage.getItem("currentUser")).userno:"",x=localStorage.getItem("currentUser")?JSON.parse(localStorage.getItem("currentUser")).dep:"",R={userno:P,IsLogin:localStorage.getItem("currentUser")?JSON.parse(localStorage.getItem("currentUser")).IsLogin:"",loading:!1,errorMessage:null,dep:x},_=function(e,t){switch(t.type){case"REQUEST_LOGIN":return C({},e,{loading:!0});case"LOGIN_SUCCESS":return C({},e,{userno:t.payload.userno,dep:t.payload.dep,IsLogin:t.payload.IsLogin,loading:!1,token:t.payload.token});case"LOGOUT":return C({},e,{user:"",IsLogin:!1});case"LOGIN_ERROR":return C({},e,{loading:!1,errorMessage:t.error});case"REQUEST_CREATE":return C({},e,{loading:!0});case"CREATE_SUCCESS":return C({},e,{userno:t.payload.userno,dep:t.payload.dep,IsLogin:!0,loading:!0});case"CREATE_ERROR":return C({},e,{loading:!1,errorMessage:t.error});default:throw new Error("Unhandled action type: ".concat(t.type))}},D=Object(n.createContext)();function I(){var e=Object(n.useContext)(D);if(void 0===e)throw new Error("useAuthState must be used within a AuthStateContext Provider");return e}var U=Object(n.createContext)();function F(){var e=Object(n.useContext)(U);if(void 0===e)throw new Error("useAuthDispatch must be used within a AuthDispatchContext Provider");return e}var T=function(e){var t=e.children,a=Object(n.useReducer)(_,R),c=Object(d.a)(a,2),l=c[0],o=c[1];return r.a.createElement(D.Provider,{value:l},r.a.createElement(U.Provider,{value:o},t))};function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var J=function(){var e=Object(s.h)(),t=F(),a=I(),c=a.errorMessage,l=a.IsLogin,o=Object(n.useState)(!1),i=Object(d.a)(o,2),f=i[0],b=i[1],E=function(){b(!f)},g=f?"v_v":"v_h",O={height:f?0:"250px",opacity:f?0:1,transition:"all .5s ease-in"},v={opacity:f?1:0,height:f?"250px":0,transition:"all .5s ease-in"},y=Object(n.useState)({email:"eve.holt@reqres.in",password:"cityslicka"}),w=Object(d.a)(y,2),N=w[0],S=w[1],k=function(e){var t=e.target,a=t.name,n=t.value;S(L({},N,Object(p.a)({},a,n)))},C=function(){var a=Object(m.a)(u.a.mark((function a(n){var r;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("handleLogin"),n.preventDefault(),a.prev=2,a.next=5,h(t,N);case 5:r=a.sent,console.log(r),r&&r.token&&e("/about"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(2),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}(),P=Object(n.useState)({remail:"eve.holt@reqres.in",rpassword:"pistol"}),x=Object(d.a)(P,2),R=x[0],_=x[1],D=function(e){var t=e.target,a=t.name,n=t.value;_(L({},R,Object(p.a)({},a,n)))},U=function(){var a=Object(m.a)(u.a.mark((function a(n){var r,c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("handleRegister"),n.preventDefault(),a.prev=2,r={email:R.remail,password:R.rpassword},a.next=6,j(t,r);case 6:if(c=a.sent,console.log(c),void 0!=c){a.next=10;break}return a.abrupt("return");case 10:e("/prform"),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(2),console.log(a.t0);case 16:case"end":return a.stop()}}),a,null,[[2,13]])})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,l?r.a.createElement(s.a,{to:"/PrForm"}):r.a.createElement("div",{className:"login_form"},r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"form"},r.a.createElement("form",{style:v,className:"flip-card register-form "+g,id:"myForm1"},r.a.createElement("input",{type:"text",id:"remail",name:"remail",value:R.remail,onChange:D,placeholder:"email"}),r.a.createElement("input",{type:"password",id:"rpassword",name:"rpassword",value:R.rpassword,onChange:D,placeholder:"password",autoComplete:"on"}),r.a.createElement("button",{type:"button",className:"btn btn-primary register_btn",onClick:U},"create"),r.a.createElement("p",{className:"message"},"Already registered?",r.a.createElement("a",{href:"#",onClick:E},"Sign In")),c?r.a.createElement("p",{className:"alert alert-danger"},c):null),r.a.createElement("form",{style:O},r.a.createElement("input",{type:"text",id:"email",name:"email",placeholder:"email",value:N.email,onChange:k}),r.a.createElement("input",{type:"password",name:"password",placeholder:"password",value:N.password,onChange:k,autoComplete:"on"}),r.a.createElement("button",{id:"login_btn",type:"button",className:"btn btn-primary login_btn",onClick:C},"login"),r.a.createElement("p",{className:"message"},"Not registered?"," ",r.a.createElement("a",{href:"#",onClick:E},"Create an account")),c?r.a.createElement("p",{className:"alert alert-danger"},c):null)))))},G=a(12),q=a(15),B=a(13),H=a(16),V=function(e){function t(){return Object(b.a)(this,t),Object(q.a)(this,Object(B.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"media-wrap  about_tab",id:"about1"},r.a.createElement("h1",null,"TESTA"))}}]),t}(n.Component),M=function(e){function t(){return Object(b.a)(this,t),Object(q.a)(this,Object(B.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"media-wrap about_tab",id:"about2"},r.a.createElement("h1",null,"TESTB"))}}]),t}(n.Component),Q=function(e){function t(){return Object(b.a)(this,t),Object(q.a)(this,Object(B.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"media-wrap  about_tab",id:"about3"},r.a.createElement("h1",null,"TEST C"))}}]),t}(n.Component),z=(a(64),function(){var e=(new Date).toISOString().substring(0,10),t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],l=a[1];Object(n.useEffect)((function(){var e=g("221004");console.log(e);var t=e.map((function(e){return e.name}));l(t)}),["090605"]);var o=c.map((function(t,a){return r.a.createElement("div",{className:"flowchart",key:a},r.a.createElement("div",{className:"flow_no"},t,r.a.createElement("span",{className:"flowspan"})),r.a.createElement("div",{className:"flow_approval"},r.a.createElement("p",null,e),r.a.createElement("p",null,"approve")))}));return r.a.createElement("section",{className:"container contact"},r.a.createElement("h1",null,"About"),r.a.createElement("nav",null,r.a.createElement("a",{href:"#about1"},"PAGE1"),r.a.createElement("a",{href:"#about2"},"PAGE2"),r.a.createElement("a",{href:"#about3"},"PAGE3")),r.a.createElement(V,null),r.a.createElement(M,null),r.a.createElement(Q,null),r.a.createElement("div",{className:"flow_container"},r.a.createElement("div",{className:"flowchart"},r.a.createElement("div",{className:"flow_no"},"start",r.a.createElement("span",{className:"flowspan"}))),o,r.a.createElement("div",{className:"flowchart"},r.a.createElement("div",{className:"flow_no"},"over",r.a.createElement("span",{className:"flowspan"})))))});function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Y=function(e){var t=Object(s.g)();console.log(t);var a=Object(n.useState)({item:{},list:[],flow:[]}),c=Object(d.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)(""),u=Object(d.a)(i,2),m=u[0],f=u[1],b=(new Date).toISOString().substring(0,10);Object(n.useEffect)((function(){var e=["010101","120303","090605"],t={clyn:"Y",datatime:"2022-08-05 12:34:48",id:"00563",name:"Reira",text1:"2022-08-10",text2:"0000000253",text3:"",username:"123123"},a=[{datatime:"2022-08-05 12:34:48",id:"1",listno:"00563",name:"0000000253",price:"s",smallp:"kyino",username:"\u9375\u76e4"},{datatime:"2022-08-05 12:34:48",id:"2",listno:"00563",name:"0000000253",price:"\u5927",smallp:"tesco",username:"\u6ed1\u9f20"}];v.a.get("https://reqres.in/api/users/2").then((function(n){console.log(n.data.data);var r=n.data.data;console.log(r),o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},l,{item:t,list:a,flow:e}))}))}),[e]);var g=l.list.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("th",{scope:"row"},t),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.username),r.a.createElement("td",null,e.price))})),O=l.flow.map((function(e,t){return r.a.createElement("div",{className:"flowchart",key:t},r.a.createElement("div",{className:"flow_no"},e,r.a.createElement("span",{className:"flowspan"})),r.a.createElement("div",{className:"flow_approval"},r.a.createElement("p",null,b),r.a.createElement("p",null,"approve")))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"container contact"},r.a.createElement("h1",null,"\u6536\u4ef6\u5323",l.item.id),r.a.createElement("div",{className:"sign"},r.a.createElement("div",{className:"sign_menu"},r.a.createElement("li",{onClick:function(e){e.preventDefault();var a={assing:m,listno:t.state.listno};console.log(JSON.stringify(a));var n=E.domainName+"/sys_flow_approve.php";fetch(n,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){return console.error("Error:",e)}))}},r.a.createElement("a",null,r.a.createElement("i",{className:"fa-solid fa-play"}))),r.a.createElement("li",null,r.a.createElement("a",null,r.a.createElement("i",{className:"fa-solid fa-ban"}))),r.a.createElement("li",null,r.a.createElement("a",null,r.a.createElement("i",{className:"fa-solid fa-pause"})))),r.a.createElement("div",{className:"sign_option"},r.a.createElement("label",{className:"user2"},r.a.createElement("div",{className:"cs"},"\u55ae\u865f"),r.a.createElement("input",{type:"text",placeholder:"Subject",defaultValue:l.item.text2,name:"userps",id:"userps",readOnly:!0})),r.a.createElement("label",{className:"user2"},r.a.createElement("div",{className:"cs"},r.a.createElement("span",null,"\u7c3d\u6838\u610f\u898b")),r.a.createElement("input",{type:"text",name:"firstName",placeholder:"\u7c3d\u6838\u610f\u898b",onChange:function(e){f(e.target.value),console.log(e.target.value)}})))),r.a.createElement("div",{className:"flex_form"},r.a.createElement("div",{className:"flex-large"},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"inputUsername"},"\u54e1\u5de5\u59d3\u540d"),r.a.createElement("input",{type:"text",defaultValue:l.item.name,readOnly:!0})),r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"inputUsername"},"\u54e1\u5de5\u90e8\u9580"),r.a.createElement("input",{type:"text",defaultValue:l.item.username,readOnly:!0}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"inputUsername"},"\u9700\u7528\u6642\u9593"),r.a.createElement("input",{type:"text",defaultValue:l.item.text1,readOnly:!0})),r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"inputUsername"},"\u8acb\u8cfc\u55ae\u865f"),r.a.createElement("input",{type:"text",defaultValue:l.item.text2,readOnly:!0}))))),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"-"),r.a.createElement("th",{scope:"col"},"no"),r.a.createElement("th",{scope:"col"},"\u63cf\u8ff0"),r.a.createElement("th",{scope:"col"},"\u5c3a\u5bf8"))),r.a.createElement("tbody",null,g)),r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"\u7c3d\u6838\u6d41\u7a0b"),r.a.createElement("div",{className:"flow_container"},r.a.createElement("div",{className:"flowchart"},r.a.createElement("div",{className:"flow_no"},"start",r.a.createElement("span",{className:"flowspan"}))),O,r.a.createElement("div",{className:"flowchart"},r.a.createElement("div",{className:"flow_no"},"over",r.a.createElement("span",{className:"flowspan"})))))))};function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var X=function(e){var t=Object(n.useState)(e.currentItem),a=Object(d.a)(t,2),c=a[0],l=a[1],o=function(e){var t=e.target,a=t.name,n=t.value;l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},c,Object(p.a)({},a,n)))},s=function(){e.updateUser(c.id,c)};return r.a.createElement("div",{onKeyDown:function(e){"Enter"===e.key&&s()}},r.a.createElement("h3",null,"Editform"),Object.keys(e.currentItem).map((function(e){if("id"!=e&&"datatime"!=e)return r.a.createElement(n.Fragment,{key:e},r.a.createElement("label",{htmlFor:e},e),r.a.createElement("input",{type:"text",name:e,value:c[e],onChange:o}))})),r.a.createElement("button",{className:"btn",onClick:s},"edit confirm"))},Z=function(e){return r.a.createElement("table",{className:"table table-striped table-responsive-m"},r.a.createElement("thead",null,r.a.createElement("tr",null,Object.keys(e.bodyColumn).map((function(e){return"id"!==e&&r.a.createElement("th",{key:e},e)})),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,e.listBody.length>0?e.listBody.map((function(t){return r.a.createElement("tr",{key:t.id,"data-id":t.id},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.username),r.a.createElement("td",null,t.smallp),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-primary button_newitem","data-low":JSON.stringify(t),onClick:function(){return e.editRow(t)}},"Edit"),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.deleteRow(t.id)}},"Delete")))})):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:5},"No users"))))},$=function(e){var t=Object(n.useRef)(null);return r.a.createElement(r.a.Fragment,null,e.show&&r.a.createElement("div",{className:"modal-modal",onClick:function(a){t.current&&!t.current.contains(a.target)&&e.onClickOutside()}},r.a.createElement("section",{className:"flex-crud",ref:t},e.children,r.a.createElement("button",{className:"btn btn-danger button_close",onClick:e.handleClose},"Close"))))},ee=a(19),te=a(18),ae=r.a.forwardRef((function(e,t){var a=e.indeterminate,n=Object(te.a)(e,["indeterminate"]),c=r.a.useRef(),l=t||c;return r.a.useEffect((function(){l.current.indeterminate=a}),[l,a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"checkbox",ref:l},n)))})),ne=(a(66),function(e){var t=e.columns,a=e.data,c=e.onRowSelectStateChange,l=e.onRowClickFunc,o=Object(ee.useTable)({columns:t,data:a,initialState:{pageIndex:0},stateReducer:function(e,t){return"toggleRowSelected"===t.type&&(e.selectedRowIds=Object(p.a)({},t.id,!0)),console.log(e),e}},ee.usePagination,ee.useRowSelect,(function(e){e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllRowsSelectedProps;return r.a.createElement(ae,t())},Cell:function(e){var t=e.row;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,Object.assign({},t.getToggleRowSelectedProps(),t.values)))}}].concat(Object(f.a)(e))}))})),s=o.getTableProps,i=o.getTableBodyProps,u=o.headerGroups,m=o.page,d=o.nextPage,b=o.previousPage,E=o.canPreviousPage,g=o.canNextPage,O=o.pageOptions,v=o.state,h=o.gotoPage,y=o.pageCount,j=o.setPageSize,w=o.state.selectedRowIds,N=o.prepareRow,S=v.pageIndex,k=v.pageSize;return Object(n.useEffect)((function(){c(w)}),[c,w]),r.a.createElement(r.a.Fragment,null,r.a.createElement("table",s(),r.a.createElement("thead",null,u.map((function(e){return r.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return r.a.createElement("th",e.getHeaderProps(),e.render("Header"))})))}))),r.a.createElement("tbody",i(),m.map((function(e){return N(e),r.a.createElement("tr",Object.assign({},e.getRowProps(),{className:"odd:bg-white even:bg-gray-100",onClick:function(){return e.toggleRowSelected()}}),e.cells.map((function(t){return r.a.createElement("td",Object.assign({onClick:function(){return l(e,t)}},t.getCellProps()),t.render("Cell"))})))})))),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return h(0)},disabled:!E},"<<")," ",r.a.createElement("button",{onClick:function(){return b()},disabled:!E},"Previous")," ",r.a.createElement("button",{onClick:function(){return d()},disabled:!g},"Next")," ",r.a.createElement("button",{onClick:function(){return h(y-1)},disabled:!g},">>")," ",r.a.createElement("span",null,"Page"," ",r.a.createElement("strong",null,S+1," of ",O.length)," "),r.a.createElement("span",null,"| Go to page:"," ",r.a.createElement("input",{type:"number",defaultValue:S+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;h(t)},style:{width:"50px"}}))," ",r.a.createElement("select",{value:k,onChange:function(e){return j(Number(e.target.value))}},[10,25,50].map((function(e){return r.a.createElement("option",{key:e,value:e},"Show ",e)})))))}),re=[{Header:"Name",columns:[{Header:"First Name1",accessor:"title"},{Header:"Last Name",accessor:"category"}]},{Header:"Info",columns:[{Header:"id",accessor:"id"}]}];var ce=function(e){new AbortController;var t=Object(n.useState)(!1),a=Object(d.a)(t,2),c=(a[0],a[1],Object(n.useState)({})),l=Object(d.a)(c,2),o=(l[0],l[1]),s=Object(n.useState)(null),i=Object(d.a)(s,2),p=i[0],f=i[1],b=Object(n.useState)(!1),E=Object(d.a)(b,2),g=E[0],O=E[1],h=function(e){e.preventDefault(),e.stopPropagation(),O(!g)},y=function(){var t=Object(m.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://fakestoreapi.com/products/".concat(p));case 2:a=t.sent,n=a.data,e.setListValue([{id:n.id,name:n.title,username:n.category,smallp:"s"}]),o(p),O(!g);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=Object(n.useState)([]),w=Object(d.a)(j,2),N=w[0],S=w[1],k=r.a.useRef(!1);Object(n.useEffect)((function(){return k.current=!0,function(){k.current=!1}}),[]);var C=Object(n.useCallback)(Object(m.a)(u.a.mark((function e(){var t,a,n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://fakestoreapi.com/products");case 2:for(t=e.sent,a=t.data,n=[],r=0;r<a.length;r++)c=Object.keys(a[r]).reduce((function(e,t){return e[t]=a[r][t],e}),{}),n.push(c);console.log(n),S(n);case 8:case"end":return e.stop()}}),e)}))),[]);return Object(n.useEffect)((function(){C()}),[C]),Object(n.useEffect)((function(){return p&&y(),function(){!1}}),[p]),r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn btn-primary button_newitem",onClick:h},"..."),g&&r.a.createElement("div",{className:"modal-modal",onClick:h},r.a.createElement("div",{className:"popup_inner",onClick:function(e){return e.stopPropagation()}},r.a.createElement("div",{className:"orderno"},N&&r.a.createElement(ne,{data:N,columns:re,onRowSelectStateChange:o,onRowClickFunc:function(e){console.log(e.values.id),f(e.values.id)}})),r.a.createElement("button",{className:"btn btn-light",onClick:h},"close"),r.a.createElement("button",{className:"btn btn-primary",onClick:y},"\u78ba\u5b9a"))))};function le(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function oe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?le(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):le(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var se=function(){g("221004");var e=Object(s.h)(),t=I(),a={username:t.userno||"",userdep:t.dep||"",userdate:(new Date).toISOString().substring(0,10)||"",checkno:"no",newno:"newno"},c=Object(n.useState)(a),l=Object(d.a)(c,2),o=l[0],i=l[1],u=Object(n.useState)([]),m=Object(d.a)(u,2),f=m[0],b=m[1],E=Object(n.useState)(""),O=Object(d.a)(E,2),v=O[0],h=O[1],y=Object(n.useState)({}),j=Object(d.a)(y,2),w=j[0],N=j[1],S=Object(n.useState)(!1),k=Object(d.a)(S,2),C=k[0],P=k[1],x=function(){P(!C)},R=function(e){var t=e.target,a=t.name,n=t.value;i(oe({},o,Object(p.a)({},a,n)))};Object(n.useEffect)((function(){console.log(v),v&&(console.log(v[0]),i(oe({},o,{checkno:v[0].id})),b(v))}),[v]);return r.a.createElement("section",{className:"container contact"},r.a.createElement("h1",null,"\u63a1\u8cfc\u55ae"),r.a.createElement("div",{className:"flex_form"},r.a.createElement("div",{id:"myForm"},r.a.createElement("div",{className:"flex-large"},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"inputUsername"},"\u54e1\u5de5\u59d3\u540d"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputUsername",name:"username",value:o.username||"",onChange:R,placeholder:"\u54e1\u5de5\u59d3\u540d",autoFocus:!0,required:!0})),r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"inputUserdep"},"\u54e1\u5de5\u90e8\u9580"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputUserdep",name:"userdep",value:o.userdep||"",onChange:R,placeholder:"\u54e1\u5de5\u90e8\u9580",required:!0})),r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"inputUsertime"},"\u9700\u7528\u6642\u9593"),r.a.createElement("input",{type:"date",className:"form-control",id:"inputUsertime",name:"userdate",value:o.userdate||"",onChange:R})),r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"selectListno"},"\u8acb\u8cfc\u55ae\u865f"),r.a.createElement("div",{className:"input-group "},r.a.createElement("input",{type:"text",className:"form-control",id:"selectListno","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",placeholder:"\u8acb\u8cfc\u55ae\u865f",name:"checkno",value:o.checkno||"",onChange:R,readOnly:!0}))),r.a.createElement("div",null,r.a.createElement(ce,{setListValue:h}),r.a.createElement("p",null,"OrderNo_check from child component:"))))),r.a.createElement("div",{className:"flex-list"},r.a.createElement($,{show:C,handleClose:x,onClickOutside:x},r.a.createElement(X,{currentItem:w,updateUser:function(e,t){console.log(e),console.log(t),b(f.map((function(a){return a.id===e?t:a}))),x()},setShow:P})),r.a.createElement(Z,{listBody:f,editRow:function(e){P(!0),N({id:e.id,name:e.name,username:e.username,smallp:e.smallp})},deleteRow:function(e){i(oe({},o,{checkno:""})),b(f.filter((function(t){return t.id!==e})))},bodyColumn:{id:null,name:"",username:"",smallp:""}})),r.a.createElement("button",{className:"btn btn-warning button_submit",onClick:function(t){if(t.preventDefault(),f.length){fetch("https://reqres.in/api/listBody",{method:"POST",body:JSON.stringify({name:"morpheus",job:"leader"}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log(t),t.createdAt&&(alert("post\u6210\u529f"),e("/Inbox",{state:{id:"090605",listno:"00004"}}))})).catch((function(e){return console.error("Error:",e)}))}else alert("\u8acb\u9078\u55ae")}},"submit")))};function ie(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var ue=function(e){var t=Object(n.useState)(e.bodyColumn),a=Object(d.a)(t,2),c=a[0],l=a[1],o=function(e){var t=e.target,a=t.name,n=t.value;l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ie(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ie(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},c,Object(p.a)({},a,n)))},s=function(){c.name&&c.username?(e.addUser(c),l(e.bodyColumn)):console.log("please enter name/username value ")};return r.a.createElement("div",{onKeyDown:function(e){"Enter"===e.key&&(console.log("ENTER PRESSED"),s())}},r.a.createElement("h3",null,"ADD form"),Object.keys(c).map((function(e){if("id"!=e)return r.a.createElement(n.Fragment,{key:e},r.a.createElement("label",{htmlFor:e},e),r.a.createElement("input",{type:"text",name:e,value:c[e],onChange:o}))})),r.a.createElement("button",{className:"btn btn-primary button_newitem",onClick:s},"Add new user"))};a(67);function me(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var pe=function(){var e=Object(s.h)(),t=I(),a={username:t.userno,userdep:t.dep,userdate:(new Date).toISOString().substring(0,10)},c=Object(n.useState)(a),l=Object(d.a)(c,2),o=l[0],i=l[1],u={id:null,name:"",username:"",smallp:""},m=Object(n.useState)([]),b=Object(d.a)(m,2),E=b[0],g=b[1],O=Object(n.useState)([]),h=Object(d.a)(O,2),y=h[0],j=h[1],w=Object(n.useState)(!1),N=Object(d.a)(w,2),S=N[0],k=N[1],C=Object(n.useState)(!1),P=Object(d.a)(C,2),x=P[0],R=P[1],_=function(){k(!S),R(!1)},D=function(e){var t=e.target,a=t.name,n=t.value;i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?me(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):me(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},o,Object(p.a)({},a,n)))};return r.a.createElement("section",{className:"container contact"},r.a.createElement("h1",null,"PR\u8acb\u8cfc\u55ae"),r.a.createElement("div",{className:"flex_form"},r.a.createElement("form",{id:"myForm"},r.a.createElement("div",{className:"flex-large"},r.a.createElement("div",{className:"form-row"},Object.keys(a).map((function(e){return r.a.createElement("div",{className:"form-group col-md-6",key:e},r.a.createElement("label",{htmlFor:e},e),r.a.createElement("input",{type:"userdate"!==e?"text":"date",className:"form-control",id:e,name:e,value:o[e],onChange:D}))}))))),r.a.createElement("div",{className:"flex-list"},r.a.createElement($,{show:S,handleClose:_,onClickOutside:_},x?r.a.createElement(X,{currentItem:y,updateUser:function(e,t){R(!0),g(E.map((function(a){return a.id===e?t:a}))),k(!1)}}):r.a.createElement(ue,{addUser:function(e){if(0==E.length)e.id=E.length+1;else{var t=E.slice(-1)[0].id;e.id=t+1}g([].concat(Object(f.a)(E),[e]))},bodyColumn:u})),r.a.createElement("button",{className:"btn btn-primary button_newitem",type:"button",onClick:_},"+\u8acb\u8cfc\u9805\u76ee"),r.a.createElement(Z,{listBody:E,editRow:function(e){k(!0),R(!0),j({id:e.id,name:e.name,username:e.username,smallp:e.smallp})},deleteRow:function(e){g(E.filter((function(t){return t.id!==e})))},bodyColumn:u})),r.a.createElement("button",{className:"btn btn-warning button_submit",onClick:function(t){if(t.preventDefault(),E.length){console.log(JSON.stringify(o));var a={header:o,header_detail:E};console.log(JSON.stringify(a)),v.a.post("https://reqres.in/api/listBody",a).then((function(t){t.data.createdAt&&(alert("SUCCESS"),e("/poform"))})).catch((function(e){console.error(e)}))}else alert("\u8acb\u9078\u55ae")}},"submit")))},de=function(){return r.a.createElement("section",{className:"container contact"},r.a.createElement("h1",null,"Page not found"))},fe=function(e){e.component,Object(te.a)(e,["component"]);return I().IsLogin?r.a.createElement(s.b,null):r.a.createElement(s.a,{to:"/login"})},be=function(e,t){var a=function(a){e.current&&!e.current.contains(a.target)&&t()};Object(n.useEffect)((function(){return document.addEventListener("click",a),function(){document.removeEventListener("click",a)}}))},Ee=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),c=a[0],l=a[1],i=Object(n.useRef)();be(i,(function(){l(!1)}));var p=Object(s.g)(),f=F(),b=c?"active":"",E=function(){var t=Object(m.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N(f);case 3:a=t.sent,console.log(a),e.history.push("/login"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return"/login"!==p.pathname?r.a.createElement("header",null,r.a.createElement("ul",{className:"mobile-navlink"},r.a.createElement("div",{className:"menu "+b,onClick:function(e){l(!c),console.log(i.current),i.current&&!i.current.contains(e.target)&&l(!1)},ref:i},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("nav",{className:"main-menu "+b},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/prform"},"PrForm")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/poform"},"PoForm")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/inbox"},"Inbox")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/about"},"Outbox")),r.a.createElement("li",null,r.a.createElement("a",{onClick:E}," ",r.a.createElement("i",{className:"fa-solid fa-arrow-right-from-bracket"})))))):null},ge=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"page"},r.a.createElement(o.a,{basename:"Mysystem"},r.a.createElement(T,null,r.a.createElement(Ee,null),r.a.createElement(s.e,null,r.a.createElement(s.c,null),r.a.createElement(s.c,{path:"/login",element:r.a.createElement(J,null)}),r.a.createElement(s.c,{path:"/",element:r.a.createElement(fe,null)},r.a.createElement(s.c,{path:"/prform",element:r.a.createElement(pe,null)}),r.a.createElement(s.c,{path:"/poform",element:r.a.createElement(se,null)}),r.a.createElement(s.c,{path:"/about",element:r.a.createElement(z,null)}),r.a.createElement(s.c,{path:"/inbox",element:r.a.createElement(Y,null)}),r.a.createElement(s.c,{path:"*",element:r.a.createElement(de,null)})))))))};l.a.render(r.a.createElement(ge,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.49521960.chunk.js.map