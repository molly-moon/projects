(this["webpackJsonpapp-yolov2"]=this["webpackJsonpapp-yolov2"]||[]).push([[0],{153:function(e,t,a){e.exports=a(299)},158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},163:function(e,t,a){},198:function(e,t,a){},284:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(68),l=a.n(r),o=(a(158),a(159),a(30));a(160);function s(){return c.a.createElement("div",{className:"Home"},c.a.createElement("div",{className:"lander"},c.a.createElement("h1",null,"Object Detection "),c.a.createElement("p",null,"Detect objects on your photos with YOLOv2")))}a(161);function i(){return c.a.createElement("div",{className:"NotFound"},c.a.createElement("h3",null,"This page does not exist"))}var u=a(70),m=a.n(u),p=a(126),d=a(34),f=a(309),E=a(304),b=a(307),v=a(143),h=a(308),g=a(131);a(163);function O(e){var t=e.isLoading,a=e.className,n=void 0===a?"":a,r=e.disabled,l=void 0!==r&&r,o=Object(v.a)(e,["isLoading","className","disabled"]);return c.a.createElement(h.a,Object.assign({className:"LoaderButton ".concat(n),disabled:l||t},o),t&&c.a.createElement(g.a,{glyph:"refresh",className:"spinning"}),o.children)}var j={REGION:"us-east-1",URL:"https://ogz49gve3m.execute-api.us-east-1.amazonaws.com/default/simple-test"},y=(a(198),a(305));function w(e){var t=e.toString();e instanceof Error||!e.message||(t=e.message),alert(t)}function N(){var e=Object(n.useRef)(null),t=Object(n.useState)(null),a=Object(d.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(null),i=Object(d.a)(s,2),u=i[0],v=i[1],h=(Object(o.f)(),Object(n.useState)(!1)),g=Object(d.a)(h,2),j=g[0],N=g[1];function S(){return(S=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),N(!0),e.prev=2,e.next=5,x(u);case 5:a=e.sent,l(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),w(e.t0);case 12:N(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function x(e){return y.a.post("inference","",{headers:{"Content-Type":"application/json",Accept:"application/json"},body:e})}return c.a.createElement("div",{className:"NewInference"},c.a.createElement("form",{onSubmit:function(e){return S.apply(this,arguments)}},c.a.createElement(f.a,{controlId:"imageFile"},c.a.createElement(E.a,null,"File "),c.a.createElement(b.a,{onChange:function(t){e.current=t.target.files[0],console.log(e.current);var a=new FileReader;a.readAsDataURL(e.current),a.onloadend=function(){var e=a.result,t=e.substr(e.indexOf(",")+1);v(t)}},type:"file"})),c.a.createElement(O,{block:!0,type:"submit",bsSize:"large",bsStyle:"primary",isLoading:j},"Detect")),c.a.createElement("h4",null,c.a.createElement("img",{src:"data:image/png;base64,".concat(r)})))}a(284);function S(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),a=(t[0],t[1],Object(n.useState)([])),r=Object(d.a)(a,2),l=r[0];r[1];return c.a.createElement("div",{className:"Home"},c.a.createElement("p",null,"This is my result: ",l))}function x(){return c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/"},c.a.createElement(s,null)),c.a.createElement(o.a,{exact:!0,path:"/inference"},c.a.createElement(N,null)),c.a.createElement(o.a,{exact:!0,path:"/result"},c.a.createElement(S,null)),c.a.createElement(o.a,null,c.a.createElement(i,null)))}var L=a(29),k=a(306);var R=function(){return c.a.createElement("div",{className:"App container"},c.a.createElement(k.a,{fluid:!0,collapseOnSelect:!0},c.a.createElement(k.a.Header,null,c.a.createElement(k.a.Brand,null,c.a.createElement(L.b,{to:"/"},"Home")),c.a.createElement(k.a.Toggle,null))),c.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(33).a.configure({API:{endpoints:[{name:"inference",endpoint:j.URL,region:j.REGION}]}}),l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(L.a,null,c.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[153,1,2]]]);
//# sourceMappingURL=main.c194a665.chunk.js.map