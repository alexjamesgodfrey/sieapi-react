(this["webpackJsonpsieapi-react"]=this["webpackJsonpsieapi-react"]||[]).push([[0],{59:function(e,i,t){},66:function(e,i,t){},77:function(e,i,t){},78:function(e,i,t){},79:function(e,i,t){},80:function(e,i,t){},81:function(e,i,t){"use strict";t.r(i);var n=t(0),c=t.n(n),a=t(21),r=t.n(a),s=t(25),l=t(8),o=t(23),d=(t(66),t(1)),j=function(){return Object(d.jsx)("div",{className:"header-container",children:Object(d.jsxs)(o.a,{className:"justify-content-center",id:"flex-column",children:[Object(d.jsx)(o.a.Item,{as:"li",children:Object(d.jsx)(s.b,{to:"/",children:Object(d.jsx)(o.a.Link,{href:"/",children:"works"})})}),Object(d.jsx)(o.a.Item,{as:"li",children:Object(d.jsx)(s.b,{to:"/commission",children:Object(d.jsx)(o.a.Link,{href:"/commission",children:"commission"})})}),Object(d.jsx)(o.a.Item,{as:"li",children:Object(d.jsx)(s.b,{to:"/blog",children:Object(d.jsx)(o.a.Link,{href:"/blog",children:"blog"})})}),Object(d.jsx)(o.a.Item,{as:"li",children:Object(d.jsx)(s.b,{to:"/about",children:Object(d.jsx)(o.a.Link,{href:"/about",children:"about"})})})]})})},b=t(11),h=t(57),O=t.n(h),u=t(61),x=t(27),p=function(e){console.log(e.price);var i=Object(n.useState)(!1),t=Object(b.a)(i,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(b.a)(r,2),l=s[0],o=s[1],j=Object(n.useRef)();return Object(n.useEffect)((function(){window.paypal.Buttons({createOrder:function(i,t,n){return t.order.create({purchase_units:[{description:"".concat(e.title," ").concat(e.type),amount:{currency_code:"USD",value:e.price}}]})},onApprove:function(){var e=Object(u.a)(O.a.mark((function e(i,t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.order.capture();case 2:n=e.sent,o(!1),a(!0),console.log(n);case 6:case"end":return e.stop()}}),e)})));return function(i,t){return e.apply(this,arguments)}}(),onError:function(e){console.log(e)}}).render(j.current)}),[]),c?Object(d.jsx)("h3",{children:"success! you will receive an email with tracking information within 24 hours :)"}):l?Object(d.jsx)(x.a,{animation:"border",variant:"info"}):Object(d.jsx)("div",{onClick:function(){return o(!0)},children:Object(d.jsx)("div",{ref:j})})},m=t(39),g=t.n(m),f=t(28),P=t(20),v=t(14),y=t(12),k=t(45),N=t(9),S=(t(59),function(e){var i=Object(n.useState)(!1),t=Object(b.a)(i,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(b.a)(r,2),l=s[0],o=s[1],j=Object(n.useState)(!1),h=Object(b.a)(j,2),O=h[0],u=h[1],m=Object(n.useState)(!1),S=Object(b.a)(m,2),w=S[0],C=S[1],I=function(){return C(!0)},T=function(){return C(!1)},A=Object(n.useState)((function(){return e.hasPrint?"print":e.hasSignedPrint?"signed print":"original"})),H=Object(b.a)(A,2),$=H[0],L=H[1],z=Object(n.useState)((function(){return"print"===$?e.printPrice:"signed print"===$?e.signedPrintPrice:e.originalPrice})),B=Object(b.a)(z,2),F=B[0];B[1];console.log(e.childArray);var E=Object(f.b)({opacity:1,from:{opacity:0}});return Object(d.jsx)(g.a,{onLoaded:function(){return u(!0)},children:Object(d.jsx)(f.a.div,{style:E,className:"child-container",children:Object(d.jsxs)(P.a.div,{onHoverStart:function(){return a(!0)},onHoverEnd:function(){return function(){if(!1!==l)return null;a(!1)}()},className:"image-container",children:[Object(d.jsx)(P.a.div,{onTap:function(){!1===l?(a(!0),o(!0)):(o(!1),a(!1))},children:O?Object(d.jsx)("img",{className:"image",src:e.image,alt:"reload this page to load the image"}):Object(d.jsx)(x.a,{animation:"border",variant:"outline-info"})}),c&&O?Object(d.jsxs)(P.a.div,{animate:{y:180},className:"body-container",children:[Object(d.jsxs)("div",{className:"title-area",children:[Object(d.jsx)("h1",{children:e.title}),Object(d.jsxs)(k.a,{id:"drop",variant:"info",title:$,children:[e.hasPrint?Object(d.jsx)(y.a.Item,{as:"button",onClick:function(){return L("print")},children:"print"}):Object(d.jsx)(y.a.ItemText,{children:"print sold out"}),e.hasSignedPrint?Object(d.jsx)(y.a.Item,{as:"button",onClick:function(){return L("signed print")},children:"signed print"}):Object(d.jsx)(y.a.ItemText,{children:"signed print s/o"}),e.hasOriginal?Object(d.jsx)(y.a.Item,{active:!0,as:"button",onClick:function(){return L("original")},children:"original"}):Object(d.jsx)(y.a.ItemText,{children:"original s/o"})]})]}),Object(d.jsx)("h3",{className:"date",children:e.date}),"print"===$?Object(d.jsxs)("h6",{className:"description",children:[e.soldPrint," / \u221e sold"]}):Object(d.jsx)("span",{}),"signed print"===$?Object(d.jsxs)("h6",{className:"description",children:[e.soldSignedPrint," / 20 sold"]}):Object(d.jsx)("span",{}),"original"===$?Object(d.jsx)("h6",{className:"description",children:"0 / 1 sold"}):Object(d.jsx)("span",{}),"print"===$?Object(d.jsxs)(v.a,{id:"buy-button",variant:"outline-info",size:"md",onClick:I,children:["buy $",e.printPrice]}):Object(d.jsx)("span",{}),"signed print"===$?Object(d.jsxs)(v.a,{id:"buy-button",variant:"outline-info",size:"md",onClick:I,children:["buy $",e.signedPrintPrice]}):Object(d.jsx)("span",{}),"original"===$?Object(d.jsxs)(v.a,{id:"buy-button",variant:"outline-info",size:"md",onClick:I,children:["buy $",e.originalPrice]}):Object(d.jsx)("span",{})]}):Object(d.jsx)("span",{}),Object(d.jsxs)(N.a,{show:w,onHide:T,children:[Object(d.jsxs)(N.a.Header,{closeButton:!0,children:["print"===$?Object(d.jsxs)(N.a.Title,{children:[e.title," - $",e.printPrice," - first class mail"]}):Object(d.jsx)("span",{}),"signed print"===$?Object(d.jsxs)(N.a.Title,{children:[e.title," - $",e.signedPrintPrice," - first class mail"]}):Object(d.jsx)("span",{}),"original"===$?Object(d.jsxs)(N.a.Title,{children:[e.title," - $",e.originalPrice," - first class mail"]}):Object(d.jsx)("span",{})]}),Object(d.jsx)(N.a.Body,{children:Object(d.jsx)(p,{price:F,title:e.title,type:$})}),Object(d.jsx)(N.a.Footer,{children:Object(d.jsx)(v.a,{variant:"danger",onClick:T,children:"cancel"})})]})]})})})}),w=function(e){var i=Object(n.useState)(!1),t=Object(b.a)(i,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(b.a)(r,2),l=s[0],o=s[1],j=Object(n.useState)(!1),h=Object(b.a)(j,2),O=h[0],u=h[1],m=Object(n.useState)(!1),w=Object(b.a)(m,2),C=w[0],I=w[1],T=function(){return I(!0)},A=function(){return I(!1)},H=Object(n.useState)((function(){return e.hasPrint?"print":e.hasSignedPrint?"signed print":"original"})),$=Object(b.a)(H,2),L=$[0],z=$[1],B=Object(n.useState)((function(){return"print"===L?e.printPrice:"signed print"===L?e.signedPrintPrice:e.originalPrice})),F=Object(b.a)(B,2),E=F[0];F[1];console.log(e.childArray);var D=Object(f.b)({opacity:1,from:{opacity:0}}),J=function(){return function(){if(!1!==l)return null;a(!1)}()},_=function(){!1===l?(a(!0),o(!0)):(o(!1),a(!1))};return!0===e.isParent?Object(d.jsx)(g.a,{onLoaded:function(){return u(!0)},children:Object(d.jsx)(f.a.div,{style:D,className:"parent-container",children:Object(d.jsxs)(P.a.div,{onHoverStart:function(){return a(!0)},onHoverEnd:J,className:"image-container",children:[Object(d.jsx)(P.a.div,{onTap:_,children:O?Object(d.jsx)("img",{className:"image",src:e.image,style:(e.width,{height:e.height}),alt:"reload this page to load the image"}):Object(d.jsx)(x.a,{animation:"border",variant:"outline-info"})}),c&&O?Object(d.jsxs)(P.a.div,{animate:{y:180},className:"body-container",children:[Object(d.jsx)("div",{className:"title-area",children:Object(d.jsx)("h2",{children:e.title})}),Object(d.jsxs)("h3",{className:"date",children:[e.childArray.length," items created ",e.childArray[0].date," to ",e.childArray[e.childArray.length-1].date]}),Object(d.jsx)(v.a,{id:"buy-button",variant:"outline-info",size:"lg",onClick:T,children:"view"})]}):Object(d.jsx)("span",{}),Object(d.jsxs)(N.a,{show:C,onHide:A,size:"lg",children:[Object(d.jsx)(N.a.Header,{closeButton:!0,children:Object(d.jsx)(N.a.Title,{children:e.title})}),Object(d.jsx)("div",{className:"main-container",children:e.childArray.map((function(e,i){return Object(d.jsx)(S,{id:i,image:e.image,title:e.title,date:e.date,description:e.description,hasPrint:e.hasPrint,printPrice:e.printPrice,soldPrint:e.soldPrint,hasSignedPrint:e.hasSignedPrint,signedPrintPrice:e.signedPrintPrice,totalSignedPrint:e.totalSignedPrint,soldSignedPrint:e.soldSignedPrint,hasOriginal:e.hasOriginal,originalPrice:e.originalPrice,solOriginal:e.soldOriginal,price:e.price,isParent:e.isParent,isChild:e.isChild,width:e.width,childArray:e.childArray})}))}),Object(d.jsx)(N.a.Footer,{children:Object(d.jsx)(v.a,{variant:"danger",onClick:A,children:"cancel"})})]})]})})}):!0===e.isChild?null:Object(d.jsx)(g.a,{onLoaded:function(){return u(!0)},children:Object(d.jsx)(f.a.div,{style:D,className:"total-container",children:Object(d.jsxs)(P.a.div,{onHoverStart:function(){return a(!0)},onHoverEnd:J,className:"image-container",children:[Object(d.jsx)(P.a.div,{onTap:_,children:O?Object(d.jsx)("img",{className:"image",src:e.image,alt:"reload this page to load the image"}):Object(d.jsx)(x.a,{animation:"border",variant:"outline-info"})}),c&&O?Object(d.jsxs)(P.a.div,{animate:{y:180},className:"body-container",children:[Object(d.jsxs)("div",{className:"title-area",children:[Object(d.jsx)("h1",{children:e.title}),Object(d.jsxs)(k.a,{id:"drop",variant:"info",title:L,children:[e.hasPrint?Object(d.jsx)(y.a.Item,{as:"button",onClick:function(){return z("print")},children:"print"}):Object(d.jsx)(y.a.ItemText,{children:"print sold out"}),e.hasSignedPrint?Object(d.jsx)(y.a.Item,{as:"button",onClick:function(){return z("signed print")},children:"signed print"}):Object(d.jsx)(y.a.ItemText,{children:"signed print s/o"}),e.hasOriginal?Object(d.jsx)(y.a.Item,{active:!0,as:"button",onClick:function(){return z("original")},children:"original"}):Object(d.jsx)(y.a.ItemText,{children:"original s/o"})]})]}),Object(d.jsx)("h3",{className:"date",children:e.date}),"print"===L?Object(d.jsxs)("h6",{className:"description",children:[e.soldPrint," / \u221e sold"]}):Object(d.jsx)("span",{}),"signed print"===L?Object(d.jsxs)("h6",{className:"description",children:[e.soldSignedPrint," / 20 sold"]}):Object(d.jsx)("span",{}),"original"===L?Object(d.jsx)("h6",{className:"description",children:"0 / 1 sold"}):Object(d.jsx)("span",{}),"print"===L?Object(d.jsxs)(v.a,{id:"buy-button",variant:"outline-info",size:"md",onClick:T,children:["buy $",e.printPrice]}):Object(d.jsx)("span",{}),"signed print"===L?Object(d.jsxs)(v.a,{id:"buy-button",variant:"outline-info",size:"md",onClick:T,children:["buy $",e.signedPrintPrice]}):Object(d.jsx)("span",{}),"original"===L?Object(d.jsxs)(v.a,{id:"buy-button",variant:"outline-info",size:"md",onClick:T,children:["buy $",e.originalPrice]}):Object(d.jsx)("span",{})]}):Object(d.jsx)("span",{}),Object(d.jsxs)(N.a,{show:C,onHide:A,children:[Object(d.jsxs)(N.a.Header,{closeButton:!0,children:["print"===L?Object(d.jsxs)(N.a.Title,{children:[e.title," - $",e.printPrice," - priority mail"]}):Object(d.jsx)("span",{}),"signed print"===L?Object(d.jsxs)(N.a.Title,{children:[e.title," - $",e.signedPrintPrice," - priority mail"]}):Object(d.jsx)("span",{}),"original"===L?Object(d.jsxs)(N.a.Title,{children:[e.title," - $",e.originalPrice," - priority mail"]}):Object(d.jsx)("span",{})]}),Object(d.jsx)(N.a.Body,{children:Object(d.jsx)(p,{price:E,title:e.title,type:L})}),Object(d.jsx)(N.a.Footer,{children:Object(d.jsx)(v.a,{variant:"danger",onClick:A,children:"cancel"})})]})]})})})},C=(t(77),function(){return Object(d.jsxs)("p",{className:"footer",children:["want to showcase or sell your art like this? visit ",Object(d.jsx)(s.b,{className:"footer-link",to:"/about",children:"about"})]})}),I=(t(78),function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"aspen by sierra apicella"}),Object(d.jsx)("div",{className:"main-container",children:e.arr.map((function(e,i){return Object(d.jsx)(w,{id:i,image:e.image,title:e.title,date:e.date,description:e.description,hasPrint:e.hasPrint,printPrice:e.printPrice,soldPrint:e.soldPrint,hasSignedPrint:e.hasSignedPrint,signedPrintPrice:e.signedPrintPrice,totalSignedPrint:e.totalSignedPrint,soldSignedPrint:e.soldSignedPrint,hasOriginal:e.hasOriginal,originalPrice:e.originalPrice,solOriginal:e.soldOriginal,price:e.price,isParent:e.isParent,isChild:e.isChild,width:e.width,childArray:e.childArray})}))}),Object(d.jsx)(C,{})]})}),T=(t.p,t.p+"static/media/roseface.366b69f8.png"),A=t.p+"static/media/dafodilface.1c2c494d.jpg",H=t.p+"static/media/weird.402f4d57.jpg",$=t.p+"static/media/mother-collection.01a8afa1.jpg",L=t.p+"static/media/mother-1.6de8fb80.jpg",z=t.p+"static/media/mother-2.2a938fc1.jpg",B=t.p+"static/media/mother-3.70528f8f.png",F=t.p+"static/media/mother-4.8b7ba4d2.jpg",E=t.p+"static/media/mother-5.3a0e5086.png",D=t.p+"static/media/mother-6.21ec7c8c.jpg",J=function(){var e=function(e,i,t,n,c,a,r,s,l,o,d,j,b,h,O,u,x,p){return{image:e,title:i,date:t,description:n,hasPrint:c,printPrice:a,soldPrint:r,hasSignedPrint:s,signedPrintPrice:l,totalSignedPrint:o,soldSignedPrint:d,hasOriginal:j,originalPrice:b,soldOriginal:h,isParent:O,isChild:u,width:x,childArray:p}},i=[e(L,"bluebells","04.02.21","blank desc",!1,0,0,!1,0,0,0,!0,15,!1,!1,!0),e(z,"roses","04.04.21","blank desc",!1,0,0,!1,0,0,0,!0,15,!1,!1,!0),e(B,"carnation","04.04.21","blank desc",!1,0,0,!1,0,0,0,!0,15,!1,!1,!0),e(F,"motley","04.05.21","blank desc",!1,0,0,!1,0,0,0,!0,15,!1,!1,!0),e(E,"lilac","04.07.21","blank desc",!1,0,0,!1,0,0,0,!0,15,!1,!1,!0),e(D,"blue orchid","04.07.21","blank desc",!1,0,0,!1,0,0,0,!0,15,!1,!1,!0)],t=[e(T,"roseface","03.20.21","blank desc",!1,0,0,!1,0,0,0,!0,79,!1),e(A,"dafodilface","03.25.21","blank desc",!1,0,0,!1,0,0,0,!0,79,!1),e(H,"calico","03.30.21","blank desc",!1,0,0,!1,0,0,0,!0,89,!1),e($,"mother's day card collection","04.07.21","blank desc",!1,0,0,!1,0,0,0,!0,99,!1,!0,!1,600,i)];return Object(d.jsx)("div",{className:"total",children:Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)(j,{}),Object(d.jsx)(I,{arr:t})]})})},_=function(){return Object(d.jsx)("div",{className:"total",children:Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)(j,{}),Object(d.jsxs)("div",{className:"about",children:[Object(d.jsx)("h1",{children:"Commissions by Sierra Apicella"}),Object(d.jsx)("p",{children:"email art@sierraapicella.com"})]})]})})},M=function(){return Object(d.jsx)("div",{className:"total",children:Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)(j,{}),Object(d.jsxs)("div",{className:"about",children:[Object(d.jsx)("h1",{children:"blog"}),Object(d.jsx)("p",{children:"coming soon"})]})]})})},Q=(t(79),function(){return Object(d.jsx)("div",{className:"total",children:Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)(j,{}),Object(d.jsxs)("div",{className:"about",children:[Object(d.jsx)("h1",{children:"about me"}),Object(d.jsxs)("div",{className:"FAQ",children:[Object(d.jsx)("h5",{children:"can you create a website like this for me to sell or showcase my artwork?"}),Object(d.jsx)("p",{children:"yes. alex godfrey can make you a website just like this one, help you get a domain like sierraapicella .com, and edit the design of the website to your liking. "})]})]})]})})});t(80);var R=function(){return Object(d.jsx)(s.a,{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/commission",children:Object(d.jsx)(_,{})}),Object(d.jsx)(l.a,{path:"/blog",children:Object(d.jsx)(M,{})}),Object(d.jsx)(l.a,{path:"/about",children:Object(d.jsx)(Q,{})}),Object(d.jsx)(l.a,{path:"/",children:Object(d.jsx)(J,{})})]})})},U=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,87)).then((function(i){var t=i.getCLS,n=i.getFID,c=i.getFCP,a=i.getLCP,r=i.getTTFB;t(e),n(e),c(e),a(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(R,{})}),document.getElementById("root")),U()}},[[81,1,2]]]);
//# sourceMappingURL=main.e225a44d.chunk.js.map