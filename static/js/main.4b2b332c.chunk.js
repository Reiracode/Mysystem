(window.webpackJsonpreirasys=window.webpackJsonpreirasys||[]).push([[0],{32:function(e,t,a){e.exports=a(66)},38:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),c=a.n(l),o=a(7),s=a(2),i=(a(37),a(38),a(3)),u=a.n(i),m=a(8),p=a(5),d=a(1),f=a(14),b=a(10),E=new function e(t){Object(b.a)(this,e);var a=t.indexOf(":",6);this.domainName=t.slice(0,a)+":8080/reirasys_api"}(window.location.href);function g(e){var t=[{id:"000001",name:"John",up_dep:"no"},{id:"000101",name:"Romy",up_dep:"000001"},{id:"000201",name:"Celia",up_dep:"000101"},{id:"000301",name:"Mary",up_dep:"000101"},{id:"001101",name:"John",up_dep:"000301"},{id:"001101",name:"Akane",up_dep:"001101"},{id:"221004",name:"Reira",up_dep:"000201"}];return function e(a){var n,r={id:a,name:""},l=t.find((function(e){return r.name=e.name,e.id==a}));return"no"==l.up_dep?[r]:(n=e(l.up_dep))&&[r].concat(Object(f.a)(n))}(e)}var O=a(9),v=a.n(O);function h(e,t){return y.apply(this,arguments)}function y(){return(y=Object(m.a)(u.a.mark((function e(t,a){var n,r,l,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://reqres.in/api/login",console.log(a),e.prev=2,t({type:"REQUEST_LOGIN"}),n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)},e.next=7,fetch("".concat("https://reqres.in/api/login"),n);case 7:return r=e.sent,e.next=10,r.json();case 10:if(l=e.sent,console.log(l),!l.token){e.next=17;break}return t({type:"LOGIN_SUCCESS",payload:c={userno:"000002",dep:"\u8cc7\u8a0a\u6280\u8853\u90e8",IsLogin:"true",loading:!1}}),localStorage.setItem("currentUser",JSON.stringify(c)),e.abrupt("return",c);case 17:return t({type:"LOGIN_ERROR",error:l.error}),e.abrupt("return");case 21:e.prev=21,e.t0=e.catch(2),t({type:"LOGIN_ERROR",error:e.t0});case 24:case"end":return e.stop()}}),e,null,[[2,21]])})))).apply(this,arguments)}function j(e,t){return w.apply(this,arguments)}function w(){return(w=Object(m.a)(u.a.mark((function e(t,a){var n,r,l,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://reqres.in/api/register",e.prev=1,t({type:"REQUEST_CREATE"}),console.log(a),n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)},e.next=7,fetch("".concat("https://reqres.in/api/register"),n);case 7:return r=e.sent,e.next=10,r.json();case 10:if(l=e.sent,console.log(l),!l.id){e.next=17;break}return c={userno:l.id,dep:"\u884c\u653f\u7ba1\u7406\u8655",IsLogin:"true",loading:!1},t({type:"CREATE_SUCCESS",payload:c}),localStorage.setItem("currentUser",JSON.stringify(c)),e.abrupt("return",c);case 17:return t({type:"CREATE_ERROR",error:l.error}),e.abrupt("return");case 21:e.prev=21,e.t0=e.catch(1),t({type:"CREATE_ERROR",error:e.t0});case 24:case"end":return e.stop()}}),e,null,[[1,21]])})))).apply(this,arguments)}function N(e){return S.apply(this,arguments)}function S(){return(S=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOGOUT"}),localStorage.removeItem("currentUser"),localStorage.removeItem("token");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k=localStorage.getItem("currentUser")?JSON.parse(localStorage.getItem("currentUser")).userno:"",x=localStorage.getItem("currentUser")?JSON.parse(localStorage.getItem("currentUser")).dep:"",_={userno:k,IsLogin:localStorage.getItem("currentUser")?JSON.parse(localStorage.getItem("currentUser")).IsLogin:"",loading:!1,errorMessage:null,dep:x},R=function(e,t){switch(t.type){case"REQUEST_LOGIN":return P({},e,{loading:!0});case"LOGIN_SUCCESS":return P({},e,{userno:t.payload.userno,dep:t.payload.dep,IsLogin:t.payload.IsLogin,loading:!1});case"LOGOUT":return P({},e,{user:"",IsLogin:!1});case"LOGIN_ERROR":return P({},e,{loading:!1,errorMessage:t.error});case"REQUEST_CREATE":return P({},e,{loading:!0});case"CREATE_SUCCESS":return P({},e,{userno:t.payload.userno,dep:t.payload.dep,IsLogin:!0,loading:!0});case"CREATE_ERROR":return P({},e,{loading:!1,errorMessage:t.error});default:throw new Error("Unhandled action type: ".concat(t.type))}},U=Object(n.createContext)();function D(){var e=Object(n.useContext)(U);if(void 0===e)throw new Error("useAuthState must be used within a AuthStateContext Provider");return e}var I=Object(n.createContext)();function F(){var e=Object(n.useContext)(I);if(void 0===e)throw new Error("useAuthDispatch must be used within a AuthDispatchContext Provider");return e}var T=function(e){var t=e.children,a=Object(n.useReducer)(R,_),l=Object(d.a)(a,2),c=l[0],o=l[1];return r.a.createElement(U.Provider,{value:c},r.a.createElement(I.Provider,{value:o},t))};function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var G=function(){var e=Object(s.h)(),t=Object(n.useState)(!1),a=Object(d.a)(t,2),l=a[0],c=a[1],o=function(){c(!l)},i=l?"v_v":"v_h",f={height:l?0:"250px",opacity:l?0:1,transition:"all .5s ease-in"},b={opacity:l?1:0,height:l?"250px":0,transition:"all .5s ease-in"},E=F(),g=D(),O=g.errorMessage,v=g.IsLogin,y="alert alert-danger",w=Object(n.useState)({email:"",password:""}),N=Object(d.a)(w,2),S=N[0],C=N[1],P=function(e){var t=e.target,a=t.name,n=t.value;C(A({},S,Object(p.a)({},a,n)))},k=function(){var t=Object(m.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("handleLogin"),a.preventDefault(),t.prev=2,t.next=5,h(E,S);case 5:if(n=t.sent,console.log(n),void 0!=n){t.next=9;break}return t.abrupt("return");case 9:if(n.token){t.next=11;break}return t.abrupt("return");case 11:e("/about"),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(e){return t.apply(this,arguments)}}(),x=Object(n.useState)({remail:"",rpassword:""}),_=Object(d.a)(x,2),R=_[0],U=_[1],I=function(e){var t=e.target,a=t.name,n=t.value;U(A({},R,Object(p.a)({},a,n)))},T=function(){var t=Object(m.a)(u.a.mark((function t(a){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("handleRegister"),a.preventDefault(),t.prev=2,n={email:R.remail,password:R.rpassword},t.next=6,j(E,n);case 6:if(r=t.sent,console.log(r),void 0!=r){t.next=10;break}return t.abrupt("return");case 10:e("/prform"),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,v?r.a.createElement(s.a,{to:"/PrForm"}):r.a.createElement("div",{className:"login_form"},r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"form"},r.a.createElement("form",{style:b,className:"flip-card register-form "+i,id:"myForm1"},r.a.createElement("input",{type:"text",id:"remail",name:"remail",value:R.remail,onChange:I,placeholder:"email"}),r.a.createElement("input",{type:"password",id:"rpassword",name:"rpassword",value:R.rpassword,onChange:I,placeholder:"password"}),r.a.createElement("button",{type:"button",className:"btn btn-primary register_btn",onClick:T},"create"),r.a.createElement("p",{className:"message"},"Already registered?",r.a.createElement("a",{href:"#",onClick:o},"Sign In")),O?r.a.createElement("p",{className:y},O):null),r.a.createElement("form",{style:f},r.a.createElement("input",{type:"text",id:"email",name:"email",placeholder:"email",value:S.email,onChange:P}),r.a.createElement("input",{type:"password",name:"password",placeholder:"password",value:S.password,onChange:P}),r.a.createElement("button",{id:"login_btn",type:"button",className:"btn btn-primary login_btn",onClick:k},"login"),r.a.createElement("p",{className:"message"},"Not registered?"," ",r.a.createElement("a",{href:"#",onClick:o},"Create an account")),O?r.a.createElement("p",{className:y},O):null)))))},J=a(12),q=a(15),H=a(13),M=a(16),V=function(e){function t(){return Object(b.a)(this,t),Object(q.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(J.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"media-wrap  about_tab",id:"about1"},r.a.createElement("h1",null,"TESTA"))}}]),t}(n.Component),B=function(e){function t(){return Object(b.a)(this,t),Object(q.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(J.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"media-wrap about_tab",id:"about2"},r.a.createElement("h1",null,"TESTB"))}}]),t}(n.Component),Q=function(e){function t(){return Object(b.a)(this,t),Object(q.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(J.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"media-wrap  about_tab",id:"about3"},r.a.createElement("h1",null,"TEST C"))}}]),t}(n.Component),z=(a(64),function(){var e=(new Date).toISOString().substring(0,10),t=Object(n.useState)([]),a=Object(d.a)(t,2),l=a[0],c=a[1];Object(n.useEffect)((function(){var e=g("221004");console.log(e);var t=e.map((function(e){return e.name}));c(t)}),["090605"]);var o=l.map((function(t,a){return r.a.createElement("div",{className:"flowchart",key:a},r.a.createElement("div",{className:"flow_no"},t,r.a.createElement("span",{className:"flowspan"})),r.a.createElement("div",{className:"flow_approval"},r.a.createElement("p",null,e),r.a.createElement("p",null,"approve")))}));return r.a.createElement("section",{className:"container contact"},r.a.createElement("div",{className:"page-2",id:"page-about"},r.a.createElement("div",{className:"container"},r.a.createElement("nav",null,r.a.createElement("a",{href:"#about1"},"PAGE1"),r.a.createElement("a",{href:"#about2"},"PAGE2"),r.a.createElement("a",{href:"#about3"},"PAGE3")),r.a.createElement(V,null),r.a.createElement(B,null),r.a.createElement(Q,null),r.a.createElement("div",{className:"flow_container"},r.a.createElement("div",{className:"flowchart"},r.a.createElement("div",{className:"flow_no"},"start",r.a.createElement("span",{className:"flowspan"}))),o,r.a.createElement("div",{className:"flowchart"},r.a.createElement("div",{className:"flow_no"},"over",r.a.createElement("span",{className:"flowspan"})))))))});function Y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var K=function(e){var t=Object(s.g)();console.log(t);var a=Object(n.useState)({item:{},list:[],flow:[]}),l=Object(d.a)(a,2),c=l[0],o=l[1],i=Object(n.useState)(""),u=Object(d.a)(i,2),m=u[0],f=u[1],b=(new Date).toISOString().substring(0,10);Object(n.useEffect)((function(){var e=["010101","120303","090605"],t={clyn:"Y",datatime:"2022-08-05 12:34:48",id:"00563",name:"Reira",text1:"2022-08-10",text2:"0000000253",text3:"",username:"123123"},a=[{datatime:"2022-08-05 12:34:48",id:"1",listno:"00563",name:"0000000253",price:"s",smallp:"kyino",username:"\u9375\u76e4"},{datatime:"2022-08-05 12:34:48",id:"2",listno:"00563",name:"0000000253",price:"\u5927",smallp:"tesco",username:"\u6ed1\u9f20"}];v.a.get("https://reqres.in/api/users/2").then((function(n){console.log(n.data.data);var r=n.data.data;console.log(r),o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Y(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},c,{item:t,list:a,flow:e}))}))}),[e]);var g=c.list.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("th",{scope:"row"},t),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.username),r.a.createElement("td",null,e.price))})),O=c.flow.map((function(e,t){return r.a.createElement("div",{className:"flowchart",key:t},r.a.createElement("div",{className:"flow_no"},e,r.a.createElement("span",{className:"flowspan"})),r.a.createElement("div",{className:"flow_approval"},r.a.createElement("p",null,b),r.a.createElement("p",null,"approve")))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"container contact"},r.a.createElement("h1",null,"\u6536\u4ef6\u5323",c.item.id),r.a.createElement("div",{className:"sign"},r.a.createElement("div",{className:"sign_menu"},r.a.createElement("li",{onClick:function(e){e.preventDefault();var a={assing:m,listno:t.state.listno};console.log(JSON.stringify(a));var n=E.domainName+"/sys_flow_approve.php";fetch(n,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){return console.error("Error:",e)}))}},r.a.createElement("a",null,"Approved")),r.a.createElement("li",null,r.a.createElement("a",null,"Rejected")),r.a.createElement("li",null,r.a.createElement("a",null,"overdue"))),r.a.createElement("div",{className:"sign_option"},r.a.createElement("label",{className:"user2"},r.a.createElement("div",{className:"cs"},"\u55ae\u865f"),r.a.createElement("input",{type:"text",placeholder:"Subject",defaultValue:c.item.text2,name:"userps",id:"userps",readOnly:!0})),r.a.createElement("label",{className:"user2"},r.a.createElement("div",{className:"cs"},r.a.createElement("span",null,"\u7c3d\u6838\u610f\u898b")),r.a.createElement("input",{type:"text",name:"firstName",placeholder:"\u7c3d\u6838\u610f\u898b",onChange:function(e){f(e.target.value),console.log(e.target.value)}})))),r.a.createElement("div",{className:"flex_form"},r.a.createElement("div",{className:"flex-large"},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"inputUsername"},"\u54e1\u5de5\u59d3\u540d"),r.a.createElement("input",{type:"text",defaultValue:c.item.name,readOnly:!0})),r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"inputUsername"},"\u54e1\u5de5\u90e8\u9580"),r.a.createElement("input",{type:"text",defaultValue:c.item.username,readOnly:!0}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"inputUsername"},"\u9700\u7528\u6642\u9593"),r.a.createElement("input",{type:"text",defaultValue:c.item.text1,readOnly:!0})),r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"inputUsername"},"\u8acb\u8cfc\u55ae\u865f"),r.a.createElement("input",{type:"text",defaultValue:c.item.text2,readOnly:!0}))))),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"-"),r.a.createElement("th",{scope:"col"},"no"),r.a.createElement("th",{scope:"col"},"\u63cf\u8ff0"),r.a.createElement("th",{scope:"col"},"\u5c3a\u5bf8"))),r.a.createElement("tbody",null,g)),r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"\u7c3d\u6838\u6d41\u7a0b"),r.a.createElement("div",{className:"flow_container"},r.a.createElement("div",{className:"flowchart"},r.a.createElement("div",{className:"flow_no"},"start",r.a.createElement("span",{className:"flowspan"}))),O,r.a.createElement("div",{className:"flowchart"},r.a.createElement("div",{className:"flow_no"},"over",r.a.createElement("span",{className:"flowspan"})))))))};function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var X=function(e){var t=Object(n.useState)(e.currentUser),a=Object(d.a)(t,2),l=a[0],c=a[1];Object(n.useEffect)((function(){c(e.currentUser)}),[e]);var o=function(e){var t=e.target,a=t.name,n=t.value;c(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},l,Object(p.a)({},a,n))),console.log(l)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Editform"),r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:l.name,onChange:o}),r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",name:"username",value:l.username,onChange:o}),r.a.createElement("label",null,"smallp"),r.a.createElement("input",{type:"text",name:"smallp",value:l.smallp,onChange:o}),r.a.createElement("button",{className:"btn",onClick:function(){console.log("handleUpdate"),e.updateUser(l.id,l)}},"Update user"))},Z=function(e){return console.log(e),r.a.createElement("table",{className:"table table-striped table-responsive-m"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Usersmallp"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,e.users.length>0?e.users.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.username),r.a.createElement("td",null,t.smallp),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-info",onClick:function(a){a.preventDefault(),e.editRow(t),e.isOpen(t)}},"Edit"),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.deleteUser(t.id)}},"Delete")))})):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:5},"No users"))))},$=function(e){var t=Object(n.useRef)(null),a=e.show?"modal-modal":"modal-modal display-none";return r.a.createElement("div",{className:a,onClick:function(a){t.current&&!t.current.contains(a.target)&&e.onClickOutside()}},r.a.createElement("section",{className:"flex-crud",ref:t},e.children,r.a.createElement("button",{onClick:e.handleClose},"Close")))},ee=a(18),te=a(20),ae=r.a.forwardRef((function(e,t){var a=e.indeterminate,n=Object(ee.a)(e,["indeterminate"]),l=r.a.useRef(),c=t||l;return r.a.useEffect((function(){c.current.indeterminate=a}),[c,a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"checkbox",ref:c},n)))}));function ne(e){var t=e.columns,a=e.data,l=e.onRowSelectStateChange,c=e.onRowClickFunc,o=Object(te.useTable)({columns:t,data:a,initialState:{selectedRowIds:{3:!0}},stateReducer:function(e,t){return console.log(t.id),"toggleRowSelected"===t.type&&(e.selectedRowIds=Object(p.a)({},t.id,!0)),console.log(e),e}},te.useRowSelect,(function(e){e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){e.getToggleAllRowsSelectedProps;return r.a.createElement("div",null,r.a.createElement(ae,null))},Cell:function(e){var t=e.row;return r.a.createElement("div",null,r.a.createElement(ae,t.getToggleRowSelectedProps()))}}].concat(Object(f.a)(e))}))})),s=o.getTableProps,i=o.getTableBodyProps,u=o.headerGroups,m=o.rows,d=o.prepareRow,b=o.selectedFlatRows,E=o.state.selectedRowIds;return Object(n.useEffect)((function(){l(E),console.log(E),console.log(b.map((function(e){return e.original})));var e=b.map((function(e){return e}));console.log(e),console.log(b)}),[l,E]),r.a.createElement(r.a.Fragment,null,r.a.createElement("table",s(),r.a.createElement("thead",null,u.map((function(e){return r.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return r.a.createElement("th",e.getHeaderProps(),e.render("Header"))})))}))),r.a.createElement("tbody",i(),m.slice(0,10).map((function(e,t){return d(e),r.a.createElement("tr",e.getRowProps(),e.cells.map((function(t){return r.a.createElement("td",Object.assign({onClick:function(){return c(e,t)}},t.getCellProps()),t.render("Cell"))})))})))))}var re=function(e){var t=r.a.useState(!1),a=Object(d.a)(t,2),l=a[0],c=a[1],o=r.a.useState({}),s=Object(d.a)(o,2),i=s[0],p=s[1],f=Object(n.useState)(!1),b=Object(d.a)(f,2),E=b[0],g=b[1],O=r.a.useMemo((function(){return[{Header:"Name",columns:[{Header:"First Name",accessor:"first_name"},{Header:"Last Name",accessor:"last_name"}]},{Header:"Info",columns:[{Header:"id",accessor:"id"}]}]}),[]),h=function(e){e.preventDefault(),e.stopPropagation(),g(!E)},y=r.a.useState({}),j=Object(d.a)(y,2),w=j[0],N=j[1],S=Object(n.useState)([]),C=Object(d.a)(S,2),P=C[0],k=C[1],x=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,n,r,l,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://reqres.in/api/users?page=2");case 2:for(t=e.sent,a=t.data,n=a.data,r=["first_name","last_name","id"],l=[],c=0;c<n.length;c++)o=Object.keys(n[c]).filter((function(e){return r.includes(e)})).reduce((function(e,t){return e[t]=n[c][t],e}),{}),l.push(o);console.log(l),k(l),console.log(l);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){x()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn btn-outline-secondary btn_line",onClick:h},"\u8acb\u8cfc\u55ae\u865f"),E?r.a.createElement("div",{className:"modal-modal",onClick:h},r.a.createElement("div",{className:"popup_inner",onClick:function(e){return e.stopPropagation()}},r.a.createElement("div",{className:"orderno"},r.a.createElement(ne,{columns:O,data:P,onRowSelectStateChange:p,onRowClickFunc:function(e,t){console.log(e),console.log(t),N(e.values.id),c(!l)}})),r.a.createElement("button",{className:"btn btn-light",onClick:h},"\u95dc\u6389"),r.a.createElement("button",{className:"btn btn-primary",onClick:function(t){t.preventDefault(),console.log(w),console.log(i),i?e.value(w||i):e.value(""),g(!E)}},"\u78ba\u5b9a"))):null)};function le(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ce(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?le(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):le(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var oe=function(){var e=g("221004");console.log(e);Object(s.g)();var t=Object(s.h)(),a=Object(n.useState)(!1),l=Object(d.a)(a,2),c=l[0],o=l[1],i=D(),u=i.userno,m=i.dep;console.log(u),console.log(m);var f={username:u,userdep:m,userdate:(new Date).toISOString().substring(0,10),checkno:"no"},b=Object(n.useState)(f),E=Object(d.a)(b,2),O=E[0],h=E[1],y=function(e){var t=e.target,a=t.name,n=t.value;h(ce({},O,Object(p.a)({},a,n)))},j=Object(n.useState)(""),w=Object(d.a)(j,2),N=w[0],S=w[1],C=Object(n.useState)(!1),P=Object(d.a)(C,2),k=P[0],x=P[1],_=function(e){console.log(e),x(!k),console.log("openBox"+k)},R=Object(n.useState)([]),U=Object(d.a)(R,2),I=U[0],F=U[1],T=Object(n.useState)([]),L=Object(d.a)(T,2),A=L[0],G=L[1],J=Object(n.useState)(!1),q=Object(d.a)(J,2),H=q[0],M=q[1];Object(n.useEffect)((function(){N&&(v.a.get("https://reqres.in/api/users?page=1").then((function(e){console.log(e.data.data)})).catch((function(e){console.error(e)})),v.a.get("https://reqres.in/api/users/".concat(N)).then((function(e){var t=e.data.data;console.log(t);var a=[],n={listno:t.fils,id:"".concat(N),name:t.first_name,username:t.last_name,smallp:t.avatar};a.push(n),console.log(a),F(a)})).catch((function(e){console.error(e)})))}),[N]);var V=Object(n.useState)(""),B=Object(d.a)(V,2),Q=(B[0],B[1]),z=Object(n.useState)({redirect:!1,pathname:"",state:""}),Y=Object(d.a)(z,2);Y[0],Y[1];return r.a.createElement("section",{className:"container contact"},r.a.createElement("h1",null,"PO\u63a1\u8cfc\u55ae"),r.a.createElement("div",{className:"flex_form"},r.a.createElement("form",{id:"myForm",onSubmit:function(e){if(e.preventDefault(),I.length){fetch("https://reqres.in/api/users",{method:"POST",body:JSON.stringify({name:"morpheus",job:"leader"}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),e.createdAt&&(alert("post\u6210\u529f"),Q("sucess"),t("/Inbox",{state:{id:"090605",listno:"00004"}}))})).catch((function(e){return console.error("Error:",e)}))}else alert("\u8acb\u9078\u55ae")}},r.a.createElement("div",{className:"flex-large"},r.a.createElement("h2",{className:"header_line"},"header"),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"inputUsername"},"\u54e1\u5de5\u59d3\u540d"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputUsername",name:"username",value:O.username,onChange:y,placeholder:"\u54e1\u5de5\u59d3\u540d",autoFocus:!0,required:!0})),r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"inputUserdep"},"\u54e1\u5de5\u90e8\u9580"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputUserdep",name:"userdep",value:O.userdep,onChange:y,placeholder:"\u54e1\u5de5\u90e8\u9580",required:!0}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"inputUsertime"},"\u9700\u7528\u6642\u9593"),r.a.createElement("input",{type:"date",className:"form-control",id:"inputUsertime",name:"userdate",value:O.userdate,onChange:y})),r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"selectListno"},"\u8acb\u8cfc\u55ae\u865f"),r.a.createElement("div",{className:"input-group "},r.a.createElement("input",{type:"text",className:"form-control",id:"selectListno","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",placeholder:"\u8acb\u8cfc\u55ae\u865f",name:"checkno",value:O.checkno,onChange:y,readOnly:!0}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement(re,{value:function(e){console.log(e),S(e),h(ce({},O,{checkno:e}))}})))))),r.a.createElement("div",{className:"flex-list"},r.a.createElement($,{show:c,handleClose:function(){o(!1)},onClickOutside:function(){o(!1)}}),r.a.createElement("h2",null,"View users List"),r.a.createElement(Z,{isOpen:_,users:I,editRow:function(e){M(!0),G({listno:e.listno,id:e.id,name:e.name,username:e.username,smallp:e.smallp,datatime:e.datatime})},deleteUser:function(e){M(!1),F(I.filter((function(t){return t.id!==e})))}})),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"submit")),k?r.a.createElement("div",{className:"modal-modal"},r.a.createElement("div",{className:"flex-crud"},H?r.a.createElement(r.a.Fragment,null,r.a.createElement(X,{editing:H,setEditing:M,currentUser:A,updateUser:function(e,t){M(!1),F(I.map((function(a){return a.id===e?t:a}))),_(!1)},isOpen:_})):"")):null))};function se(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var ie=function(e){var t={id:null,name:"",username:"",smallp:""},a=Object(n.useState)(t),l=Object(d.a)(a,2),c=l[0],o=l[1],s=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?se(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):se(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},c);t[e.target.name]=e.target.value,o(t)};document.addEventListener("keydown",(function(e){"Enter"===e.key&&(console.log("ENTER PRESSED"),i())}));var i=function(){if(c.name&&c.username){e.addUser(c),console.log(c);var a=Object.keys(c).map((function(e,t){"id"!=e&&console.log(e+t+c[e])}));console.log(a),o(t)}};return r.a.createElement(r.a.Fragment,null,Object.keys(c).map((function(e){if("id"!=e)return r.a.createElement(n.Fragment,{key:e},r.a.createElement("label",{htmlFor:e},e),r.a.createElement("input",{type:"text",name:e,value:c[e],onChange:s}))})),r.a.createElement("button",{className:"btn",onClick:i},"Add new user"),r.a.createElement("button",{onClick:function(){return e.SetShow(!1)}},"Cancel"))};function ue(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var me=function(e){var t=Object(s.h)(),a=D(),l={username:a.userno,userdep:a.dep,userdate:(new Date).toISOString().substring(0,10)},c=Object(n.useState)(l),o=Object(d.a)(c,2),i=o[0],u=o[1],m=Object(n.useState)([]),b=Object(d.a)(m,2),E=b[0],g=b[1],O=Object(n.useState)([]),h=Object(d.a)(O,2),y=h[0],j=h[1],w=Object(n.useState)(!1),N=Object(d.a)(w,2),S=N[0],C=N[1],P=Object(n.useState)(!1),k=Object(d.a)(P,2),x=k[0],_=k[1],R=Object(n.useState)(!1),U=Object(d.a)(R,2),I=U[0],F=U[1],T=Object(n.useState)("add"),L=Object(d.a)(T,2),A=L[0],G=L[1],J=function(){F(!I),G("add")},q=function(e){var t=e.target,a=t.name,n=t.value;u(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ue(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ue(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},i,Object(p.a)({},a,n)))};return r.a.createElement("section",{className:"container contact"},r.a.createElement("h1",null,"PR\u8acb\u8cfc\u55ae"),r.a.createElement("div",{className:"flex_form"},r.a.createElement("form",{id:"myForm"},r.a.createElement("div",{className:"flex-large"},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"inputUsername"},"\u54e1\u5de5\u59d3\u540d"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputUsername",name:"username",value:i.username,onChange:q,placeholder:"\u54e1\u5de5\u59d3\u540d",autoFocus:!0,required:!0})),r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"inputUserdep"},"\u54e1\u5de5\u90e8\u9580"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputUserdep",name:"userdep",value:i.userdep,onChange:q,placeholder:"\u54e1\u5de5\u90e8\u9580",required:!0}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"inputUsertime"},"\u9700\u7528\u6642\u9593"),r.a.createElement("input",{type:"date",className:"form-control",id:"inputUsertime",name:"userdate",value:i.userdate,onChange:q}))))),r.a.createElement("div",{className:"flex-list"},r.a.createElement($,{show:I,handleClose:function(){F(!1)},onClickOutside:function(){F(!1)}},"add"===A?r.a.createElement(ie,{addUser:function(e){if(console.log(E),0==E.length)e.id=E.length+1;else{var t=E.slice(-1)[0].id;e.id=t+1}g([].concat(Object(f.a)(E),[e]))},SetShow:F}):"edit"===A?r.a.createElement(X,{editing:S,setEditing:C,currentUser:y,updateUser:function(e,t){C(!1),G("edit"),g(E.map((function(a){return a.id===e?t:a}))),J()},SetShow:F}):null),r.a.createElement("button",{className:"btn add_item",type:"button",onClick:J},"+\u8acb\u8cfc\u9805\u76ee"),r.a.createElement(Z,{isOpen:function(){_(!x),F(!0)},users:E,editRow:function(e){C(!0),G("edit"),j({id:e.id,name:e.name,username:e.username,smallp:e.smallp,datatime:e.datatime})},deleteUser:function(e){C(!1),g(E.filter((function(t){return t.id!==e})))}})),r.a.createElement("button",{className:"btn btn-primary",onClick:function(e){if(e.preventDefault(),E.length){console.log(JSON.stringify(i));var a={header:i,header_detail:E};console.log(JSON.stringify(a));v.a.post("https://reqres.in/api/users",a).then((function(e){var a=e.data;console.log(a),a.createdAt&&(alert("SUCCESS"),t("/poform"))})).catch((function(e){console.error(e)}))}else alert("\u8acb\u9078\u55ae")}},"submit")))},pe=function(e){e.component,Object(ee.a)(e,["component"]);return D().IsLogin?r.a.createElement(s.b,null):r.a.createElement(s.a,{to:"/login"})},de=function(e){var t=Object(s.g)();console.log(t.pathname);var a=F(),n=function(){var t=Object(m.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N(a);case 3:n=t.sent,console.log(n),e.history.push("/login"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return"/login"!==t.pathname?r.a.createElement("nav",{className:"main-menu"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/prform"},"PrForm")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/poform"},"PoForm")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/inbox"},"\u6536\u4ef6\u5323")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/about"},"\u5bc4\u4ef6\u5323")),r.a.createElement("li",null,r.a.createElement("a",{onClick:n},"LOGOUT")))):null},fe=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Page not found"))},be=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"page"},r.a.createElement(o.a,{basename:"Mysystem"},r.a.createElement(T,null,r.a.createElement(de,null),r.a.createElement(s.e,null,r.a.createElement(s.c,null),r.a.createElement(s.c,{path:"/login",element:r.a.createElement(G,null)}),r.a.createElement(s.c,{path:"/",element:r.a.createElement(pe,null)},r.a.createElement(s.c,{path:"/prform",element:r.a.createElement(me,null)}),r.a.createElement(s.c,{path:"/poform",element:r.a.createElement(oe,null)}),r.a.createElement(s.c,{path:"/about",element:r.a.createElement(z,null)}),r.a.createElement(s.c,{path:"/inbox",element:r.a.createElement(K,null)}),r.a.createElement(s.c,{path:"*",element:r.a.createElement(fe,null)})))))))};c.a.render(r.a.createElement(be,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.4b2b332c.chunk.js.map