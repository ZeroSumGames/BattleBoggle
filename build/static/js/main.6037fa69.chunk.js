(this.webpackJsonpbattleboggle=this.webpackJsonpbattleboggle||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},26:function(e,t,n){e.exports=n.p+"static/media/logo.9549ae36.svg"},27:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a=n(5),r=n.n(a),l=(n(25),n(26),n(27),n(6)),c=n(7),s=n(9),u=n(8),d=n(10),p=n(4),v=function(e){return i.a.createElement("div",{style:{width:"50px",height:"50px",border:"1px solid #000",display:"inline-block"}},e.letter.value," ",e.letter.points)};var f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=function(e){var t=[],n=!0,o=!1,i=void 0;try{for(var a,r=e[Symbol.iterator]();!(n=(a=r.next()).done);n=!0){a.value.forEach((function(e){return t.push(e)}))}}catch(l){o=!0,i=l}finally{try{n||null==r.return||r.return()}finally{if(o)throw i}}return t}(this.props.board);return i.a.createElement("div",null,e&&e.map((function(e,t){return i.a.createElement(v,{letter:e,key:t})})))}}]),t}(i.a.Component),h=Object(p.b)((function(e){return{board:e.board}}),(function(e){return{}}))(f);var m={letters:{A:{id:0,value:"A",points:1},B:{id:1,value:"B",points:4},C:{id:2,value:"C",points:4},D:{id:3,value:"D",points:2},E:{id:4,value:"E",points:1},F:{id:5,value:"F",points:4},G:{id:6,value:"G",points:3},H:{id:7,value:"H",points:3},I:{id:8,value:"I",points:1},J:{id:9,value:"J",points:10},K:{id:10,value:"K",points:5},L:{id:11,value:"L",points:3},M:{id:12,value:"M",points:4},N:{id:13,value:"N",points:2},O:{id:14,value:"O",points:1},P:{id:15,value:"P",points:4},Q:{id:16,value:"Q",points:10},R:{id:17,value:"R",points:1},S:{id:18,value:"S",points:1},T:{id:19,value:"T",points:1},U:{id:20,value:"U",points:2},V:{id:21,value:"V",points:5},W:{id:22,value:"W",points:4},X:{id:23,value:"X",points:1},Y:{id:24,value:"Y",points:1},Z:{id:25,value:"Z",points:10}},board:{},powerups:[]},b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).props.initializeLetters(),n.props.initializeBoard(n.props.letters),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",{className:"game"},i.a.createElement("h1",{className:"title"},"Battle Boggle!"),i.a.createElement("div",{className:"head"},i.a.createElement("div",null,"Round".concat("#")),i.a.createElement("div",{classname:"playerScore"},i.a.createElement("div",{classname:"player1Score"}),i.a.createElement("div",{classname:"player2Score"})),i.a.createElement("div",{classname:"timer"})),i.a.createElement("div",{className:"body"},i.a.createElement(h,null)))}}]),t}(i.a.Component),g=Object(p.b)((function(e){return{letters:e.letters}}),(function(e){return{initializeLetters:function(t){e(function(e){return{type:"INITIALIZE_LETTERS",letters:e}}(t))},initializeBoard:function(t){e({type:"BUILD_BOARD",board:function(e){for(var t=[],n=0;n<16;n++)n%4===0&&t.push([]),t[Math.floor(n/4)][n%4]=e[String.fromCharCode(Math.floor(26*Math.random())+65)];return t}(t)})}}}))(b);var w=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(g,null))},y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var O=n(2),j=n(17),k=n(18),S=n(19),B=Object(O.combineReducers)({board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.board,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BUILD_BOARD":return t.board;default:return e}},letters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.letters;arguments.length>1&&arguments[1];return e}}),A=Object(S.composeWithDevTools)(Object(O.applyMiddleware)(k.a,Object(j.createLogger)({collapsed:!0}))),L=Object(O.createStore)(B,A);r.a.render(i.a.createElement(p.a,{store:L},i.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):E(t,e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.6037fa69.chunk.js.map