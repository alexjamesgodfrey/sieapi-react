(this["webpackJsonpsieapi-react"]=this["webpackJsonpsieapi-react"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(27),a=n.n(r),s=n(21),o=n(14),l=n(68),j=n(79),d=n(9),u=n(77);n(85),n(106);console.log("test");var b=u.a.initializeApp({apiKey:"AIzaSyC_0Fv2N1V5TRt_pqSmMnK_qTueey8ZTLA",authDomain:"sieapi.firebaseapp.com",projectId:"sieapi",storageBucket:"sieapi.appspot.com",messagingSenderId:"330860118207",appId:"1:330860118207:web:05c6730f02e532cb1c460a"}),h=b.auth(),O=b,x=n(1),p=i.a.createContext();function f(){return Object(c.useContext)(p)}function m(e){var t=e.children,n=Object(c.useState)(),i=Object(d.a)(n,2),r=i[0],a=i[1],s=Object(c.useState)(!0),o=Object(d.a)(s,2),l=o[0],j=o[1];Object(c.useEffect)((function(){return h.onAuthStateChanged((function(e){a(e),j(!1)}))}),[]);var u={currentUser:r,login:function(e,t){return h.signInWithEmailAndPassword(e,t)},logout:function(){return h.signOut()}};return Object(x.jsx)(p.Provider,{value:u,children:!l&&t})}function v(e){var t=e.component,n=Object(j.a)(e,["component"]),c=f().currentUser;return console.log(c),Object(x.jsx)(o.b,Object(l.a)(Object(l.a)({},n),{},{render:function(e){return null!=c?Object(x.jsx)(t,Object(l.a)({},e)):Object(x.jsx)(o.a,{to:"/login"})}}))}var g=n(13),y=n.n(g),w=n(17),k=n(30),N=(n(96),function(){return Object(x.jsx)("div",{className:"header-container",children:Object(x.jsxs)(k.a,{className:"justify-content-center",id:"flex-column",children:[Object(x.jsx)(k.a.Item,{as:"li",children:Object(x.jsx)(s.b,{to:"/",children:Object(x.jsx)(k.a.Link,{href:"/",children:"works"})})}),Object(x.jsx)(k.a.Item,{as:"li",children:Object(x.jsx)(s.b,{to:"/commission",children:Object(x.jsx)(k.a.Link,{href:"/commission",children:"commission"})})}),Object(x.jsx)(k.a.Item,{as:"li",children:Object(x.jsx)(s.b,{to:"/blog",children:Object(x.jsx)(k.a.Link,{href:"/blog",children:"blog"})})}),Object(x.jsx)(k.a.Item,{as:"li",children:Object(x.jsx)(s.b,{to:"/about",children:Object(x.jsx)(k.a.Link,{href:"/about",children:"about"})})})]})})}),C=n(37),S=function(e){console.log(e.price);var t=Object(c.useState)(!1),n=Object(d.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)(!1),s=Object(d.a)(a,2),o=s[0],l=s[1],j=Object(c.useRef)();return Object(c.useEffect)((function(){window.paypal.Buttons({createOrder:function(t,n,c){return n.order.create({purchase_units:[{description:"".concat(e.title," ").concat(e.type),amount:{currency_code:"USD",value:e.price}}]})},onApprove:function(){var e=Object(w.a)(y.a.mark((function e(t,n){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.order.capture();case 2:c=e.sent,l(!1),r(!0),console.log(c);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),onError:function(e){console.log(e)}}).render(j.current)}),[]),i?Object(x.jsx)("h3",{children:"success! you will receive an email with tracking information within 24 hours :)"}):o?Object(x.jsx)(C.a,{animation:"border",variant:"info"}):Object(x.jsx)("div",{onClick:function(){return l(!0)},children:Object(x.jsx)("div",{ref:j})})},P=n(50),L=n.n(P),T=n(41),A=n(114),I=n(28),H=n(29),E=n(72),B=n(16),F=(n(76),function(e){var t=Object(c.useState)(!1),n=Object(d.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)(!1),s=Object(d.a)(a,2),o=s[0],l=s[1],j=Object(c.useState)(!1),u=Object(d.a)(j,2),b=u[0],h=u[1],O=Object(c.useState)(!1),p=Object(d.a)(O,2),f=p[0],m=p[1],v=function(){return m(!1)},g=Object(c.useState)((function(){return e.hasPrint?"print":e.hasSignedPrint?"signed print":"original"})),y=Object(d.a)(g,2),w=y[0],k=y[1],N=Object(c.useState)((function(){return"print"===w?e.printPrice:"signed print"===w?e.signedPrintPrice:e.originalPrice})),P=Object(d.a)(N,2),F=P[0];P[1];console.log(e.childArray);var q=Object(T.b)({opacity:1,from:{opacity:0}});return Object(x.jsx)(L.a,{onLoaded:function(){return h(!0)},children:Object(x.jsx)(T.a.div,{style:q,className:"child-container",children:Object(x.jsxs)(A.a.div,{onHoverStart:function(){return r(!0)},onHoverEnd:function(){return function(){if(!1!==o)return null;r(!1)}()},className:"image-container",children:[Object(x.jsx)(A.a.div,{onTap:function(){!1===o?(r(!0),l(!0)):(l(!1),r(!1))},children:b?Object(x.jsx)("img",{className:"image",src:e.image,alt:"reload this page to load the image"}):Object(x.jsx)(C.a,{animation:"border",variant:"outline-info"})}),i&&b?Object(x.jsxs)(A.a.div,{animate:{y:180},className:"body-container",children:[Object(x.jsxs)("div",{className:"title-area",children:[Object(x.jsx)("h1",{children:e.title}),Object(x.jsxs)(E.a,{id:"drop",variant:"info",title:w,children:[e.hasPrint?Object(x.jsx)(H.a.Item,{as:"button",onClick:function(){return k("print")},children:"print"}):Object(x.jsx)(H.a.ItemText,{children:"print sold out"}),e.hasSignedPrint?Object(x.jsx)(H.a.Item,{as:"button",onClick:function(){return k("signed print")},children:"signed print"}):Object(x.jsx)(H.a.ItemText,{children:"signed print s/o"}),e.hasOriginal?Object(x.jsx)(H.a.Item,{active:!0,as:"button",onClick:function(){return k("original")},children:"original"}):Object(x.jsx)(H.a.ItemText,{children:"original s/o"})]})]}),Object(x.jsx)("h3",{className:"date",children:e.date}),Object(x.jsx)("h6",{className:"description",children:"0 / 1 sold"}),Object(x.jsxs)(I.a,{id:"buy-button",variant:"outline-info",size:"md",onClick:function(){return m(!0)},children:["buy $",e.price]})]}):Object(x.jsx)("span",{}),Object(x.jsxs)(B.a,{show:f,onHide:v,children:[Object(x.jsx)(B.a.Header,{closeButton:!0,children:Object(x.jsxs)(B.a.Title,{children:[e.title," - $",e.price," - first class mail"]})}),Object(x.jsx)(B.a.Body,{children:Object(x.jsx)(S,{price:F,title:e.title,type:w})}),Object(x.jsx)(B.a.Footer,{children:Object(x.jsx)(I.a,{variant:"danger",onClick:v,children:"cancel"})})]})]})})})}),q=function(e){var t=Object(c.useState)(!1),n=Object(d.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)(!1),s=Object(d.a)(a,2),o=s[0],l=s[1],j=Object(c.useState)(!1),u=Object(d.a)(j,2),b=u[0],h=u[1],O=Object(c.useState)(!1),p=Object(d.a)(O,2),f=p[0],m=p[1],v=function(){return m(!0)},g=function(){return m(!1)},y=Object(c.useState)((function(){return e.hasPrint?"print":e.hasSignedPrint?"signed print":"original"})),w=Object(d.a)(y,2),k=w[0],N=(w[1],Object(c.useState)((function(){return"print"===k?e.printPrice:"signed print"===k?e.signedPrintPrice:e.originalPrice}))),P=Object(d.a)(N,2),H=P[0],E=(P[1],Object(T.b)({opacity:1,from:{opacity:0}})),q=function(){return function(){if(!1!==o)return null;r(!1)}()},R=function(){!1===o?(r(!0),l(!0)):(l(!1),r(!1))};return!0===e.isParent?Object(x.jsx)(L.a,{onLoaded:function(){return h(!0)},children:Object(x.jsx)(T.a.div,{style:E,className:"parent-container",children:Object(x.jsxs)(A.a.div,{onHoverStart:function(){return r(!0)},onHoverEnd:q,className:"image-container",children:[Object(x.jsx)(A.a.div,{onTap:R,children:b?Object(x.jsx)("img",{className:"image",src:e.image,style:(e.width,{height:e.height}),alt:"reload this page to load the image"}):Object(x.jsx)(C.a,{animation:"border",variant:"outline-info"})}),i&&b?Object(x.jsxs)(A.a.div,{animate:{y:180},className:"body-container",children:[Object(x.jsx)("div",{className:"title-area",children:Object(x.jsx)("h2",{children:e.title})}),Object(x.jsxs)("h3",{className:"date",children:[e.childArray.length," items created ",e.childArray[0].date," to ",e.childArray[e.childArray.length-1].date]}),Object(x.jsx)(I.a,{id:"buy-button",variant:"outline-info",size:"lg",onClick:v,children:"view"})]}):Object(x.jsx)("span",{}),Object(x.jsxs)(B.a,{show:f,onHide:g,size:"lg",children:[Object(x.jsx)(B.a.Header,{closeButton:!0,children:Object(x.jsx)(B.a.Title,{children:e.title})}),Object(x.jsx)("div",{className:"main-container",children:e.childArray.map((function(e,t){return Object(x.jsx)(F,{id:t,image:e.image,title:e.title,date:e.date,description:e.description,price:e.price,isParent:e.isParent,isChild:e.isChild,width:e.width,childArray:e.childArray})}))}),Object(x.jsx)(B.a.Footer,{children:Object(x.jsx)(I.a,{variant:"danger",onClick:g,children:"cancel"})})]})]})})}):!0===e.isChild?null:Object(x.jsx)(L.a,{onLoaded:function(){return h(!0)},children:Object(x.jsx)(T.a.div,{style:E,className:"total-container",children:Object(x.jsxs)(A.a.div,{onHoverStart:function(){return r(!0)},onHoverEnd:q,className:"image-container",children:[Object(x.jsx)(A.a.div,{onTap:R,children:b?Object(x.jsx)("img",{className:"image",src:e.image,alt:"reload this page to load the image"}):Object(x.jsx)(C.a,{animation:"border",variant:"outline-info"})}),i&&b?Object(x.jsxs)(A.a.div,{animate:{y:180},className:"body-container",children:[Object(x.jsx)("div",{className:"title-area",children:Object(x.jsx)("h1",{children:e.title})}),Object(x.jsx)("h3",{className:"date",children:e.date}),Object(x.jsx)("h6",{className:"description",children:"0 / 1 sold"}),Object(x.jsxs)(I.a,{id:"buy-button",variant:"outline-info",size:"md",onClick:v,children:["buy $",e.price]})]}):Object(x.jsx)("span",{}),Object(x.jsxs)(B.a,{show:f,onHide:g,children:[Object(x.jsx)(B.a.Header,{closeButton:!0,children:Object(x.jsxs)(B.a.Title,{children:[e.title," - $",e.price," - priority mail"]})}),Object(x.jsx)(B.a.Body,{children:Object(x.jsx)(S,{price:H,title:e.title,type:k})}),Object(x.jsx)(B.a.Footer,{children:Object(x.jsx)(I.a,{variant:"danger",onClick:g,children:"cancel"})})]})]})})})},R=(n(99),function(){return Object(x.jsxs)("p",{className:"footer",children:["log in as ",Object(x.jsx)(s.b,{className:"footer-link",to:"/admin",children:"admin"})]})}),D=(n(100),function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"aspen by sierra apicella"}),Object(x.jsx)("div",{className:"main-container",children:e.arr.map((function(e,t){return Object(x.jsx)(q,{id:t,image:e.image,title:e.title,date:e.date,description:e.description,price:e.price,isParent:e.isParent,isChild:e.isChild,childArray:e.childArray})}))}),Object(x.jsx)(R,{})]})}),G=(n.p,n.p+"static/media/mother-1.6de8fb80.jpg"),z=n.p+"static/media/mother-2.2a938fc1.jpg",U=n.p+"static/media/mother-3.70528f8f.png",_=n.p+"static/media/mother-4.8b7ba4d2.jpg",$=n.p+"static/media/mother-5.3a0e5086.png",J=n.p+"static/media/mother-6.21ec7c8c.jpg",K=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],r=function(){var e=Object(w.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/works");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,i(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){r()}),[]);var a=function(e,t,n,c,i,r,a,s,o){return{image:e,title:t,date:n,description:c,price:i,isParent:r,isChild:a,width:s,childArray:o}};a(G,"bluebells","04.02.21","blank desc",15,!1,!0),a(z,"roses","04.04.21","blank desc",15,!1,!0),a(U,"carnation","04.04.21","blank desc",15,!1,!0),a(_,"motley","04.05.21","blank desc",!1,15,!1,!0),a($,"lilac","04.07.21","blank desc",!1,15,!1,!0),a(J,"blue orchid","04.07.21","blank desc",15,!1,!0);return Object(x.jsx)("div",{className:"total",children:Object(x.jsxs)("div",{className:"main",children:[Object(x.jsx)(N,{}),Object(x.jsx)(D,{arr:n})]})})},M=function(){return Object(x.jsx)("div",{className:"total",children:Object(x.jsxs)("div",{className:"main",children:[Object(x.jsx)(N,{}),Object(x.jsxs)("div",{className:"about",children:[Object(x.jsx)("h1",{children:"Commissions by Sierra Apicella"}),Object(x.jsx)("p",{children:"email art@sierraapicella.com"})]})]})})},W=function(){return Object(x.jsx)("div",{className:"total",children:Object(x.jsxs)("div",{className:"main",children:[Object(x.jsx)(N,{}),Object(x.jsxs)("div",{className:"about",children:[Object(x.jsx)("h1",{children:"blog"}),Object(x.jsx)("p",{children:"coming soon"})]})]})})},Q=(n(101),function(){return Object(x.jsx)("div",{className:"total",children:Object(x.jsxs)("div",{className:"main",children:[Object(x.jsx)(N,{}),Object(x.jsxs)("div",{className:"about",children:[Object(x.jsx)("h1",{children:"about me"}),Object(x.jsxs)("div",{className:"FAQ",children:[Object(x.jsx)("h5",{children:"can you create a website like this for me to sell or showcase my artwork?"}),Object(x.jsx)("p",{children:"yes. alex godfrey can make you a website just like this one, help you get a domain like sierraapicella .com, and edit the design of the website to your liking. "})]})]})]})})}),V=(n(102),n(115));function Z(e){var t=Object(c.useState)(!1),n=Object(d.a)(t,2),i=n[0],r=n[1],a=function(){var t=Object(w.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/api/deletework/".concat(e.work.id),{method:"DELETE"});case 3:r(!1),e.reload(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("did not delete work");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"d-flex flex-column",children:[Object(x.jsx)("img",{alt:"work",style:{width:"150px",margin:"20px"},src:e.work.image}),Object(x.jsx)(I.a,{style:{width:"100px",margin:"0px auto"},variant:"danger",onClick:function(){return r(!0)},children:"delete"}),Object(x.jsxs)(B.a,{show:i,onHide:function(){return r(!1)},children:[Object(x.jsx)(B.a.Header,{closeButton:!0,children:Object(x.jsx)(B.a.Title,{children:"Confirm Deletion"})}),Object(x.jsxs)(B.a.Body,{children:["This action is irreversible . Please ensure that you want to delete ",Object(x.jsx)("strong",{children:e.work.title})]}),Object(x.jsxs)(B.a.Footer,{children:[Object(x.jsx)(I.a,{variant:"secondary",onClick:function(){return r(!1)},children:"Cancel"}),Object(x.jsx)(I.a,{variant:"danger",onClick:function(){return a()},children:"Delete"})]})]})]})}n(103);function X(){var e=f(),t=e.currentUser,n=e.logout,i=Object(o.g)(),r=Object(c.useState)("add"),a=Object(d.a)(r,2),s=a[0],l=a[1],j=Object(c.useState)(),u=Object(d.a)(j,2),b=u[0],h=u[1],p=Object(c.useState)([]),m=Object(d.a)(p,2),v=m[0],g=m[1],k=Object(c.useState)(!1),N=Object(d.a)(k,2),C=(N[0],N[1],Object(c.useRef)()),S=Object(c.useRef)(),P=Object(c.useRef)(),L=Object(c.useRef)(),T=Object(c.useRef)(),A=function(){var e=Object(w.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/works");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,g(n),console.log(v);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(w.a)(y.a.mark((function e(t){var n,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n='{\n            "image": "'.concat(b,'",\n            "title": "').concat(C.current.value,'",\n            "date": "').concat(S.current.value,'",\n            "description": "').concat(P.current.value,'",\n            "price": "').concat(parseFloat(L.current.value),'",\n            "sold": "').concat("true"===T.current.value,'"\n        }'),console.log(n),e.next=5,fetch("/api/creatework",{method:"POST",headers:{"Content-Type":"application/json"},body:n});case 5:c=e.sent,console.log(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(w.a)(y.a.mark((function e(t){var n,c,i,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.target.files[0],c=O.storage().ref(),i=c.child(n.name),e.next=6,i.put(n);case 6:return e.next=8,i.getDownloadURL();case 8:r=e.sent,h(r),console.log(r),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("upload failed");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(w.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n();case 3:i.push("/"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){A()}),[]),Object(x.jsxs)("div",{style:{margin:"30px"},children:[Object(x.jsxs)("h3",{children:["admin -- ",t.email]}),Object(x.jsxs)("div",{className:"d-flex justify-content-between",style:{width:"500px"},children:["add"===s?Object(x.jsx)("h4",{style:{color:"#ffc0cb"},children:"add a work"}):Object(x.jsx)("h4",{onClick:function(){return l("add")},children:"add a work"}),"edit"===s?Object(x.jsx)("h4",{style:{color:"#ffc0cb"},children:"edit a work"}):Object(x.jsx)("h4",{onClick:function(){return l("edit")},children:"edit a work"}),"delete"===s?Object(x.jsx)("h4",{style:{color:"#ffc0cb"},children:"delete a work"}):Object(x.jsx)("h4",{onClick:function(){return l("delete")},children:"delete a work"})]}),"add"===s&&Object(x.jsxs)(V.a,{className:"w-50",children:[Object(x.jsxs)(V.a.Group,{id:"title",children:[Object(x.jsx)(V.a.Label,{id:"font-color",children:"title"}),Object(x.jsx)(V.a.Control,{type:"text",ref:C,required:!0})]}),Object(x.jsxs)(V.a.Group,{id:"image",children:[Object(x.jsx)(V.a.Label,{id:"font-color",children:"upload image"}),Object(x.jsx)(V.a.File,{type:"file",accept:"image/*",onChange:function(e){return E(e)},required:!0})]}),Object(x.jsx)("div",{id:"display-container",children:Object(x.jsx)("img",{src:b,id:"display"})}),Object(x.jsxs)(V.a.Group,{id:"date",children:[Object(x.jsx)(V.a.Label,{id:"font-color",children:"date (xx.xx.xx)"}),Object(x.jsx)(V.a.Control,{type:"text",ref:S,required:!0})]}),Object(x.jsxs)(V.a.Group,{id:"description",children:[Object(x.jsx)(V.a.Label,{id:"font-color",children:"description"}),Object(x.jsx)(V.a.Control,{type:"text",ref:P,required:!0})]}),Object(x.jsxs)(V.a.Group,{id:"price",children:[Object(x.jsx)(V.a.Label,{id:"font-color",children:"price (enter number)"}),Object(x.jsx)(V.a.Control,{type:"text",ref:L,required:!0})]}),Object(x.jsxs)(V.a.Group,{id:"sold",children:[Object(x.jsx)(V.a.Label,{id:"font-color",children:"sold"}),Object(x.jsxs)(V.a.Control,{as:"select",ref:T,required:!0,children:[Object(x.jsx)("option",{children:"false"}),Object(x.jsx)("option",{children:"true"})]})]}),Object(x.jsx)(I.a,{id:"loginbutton",className:"w-100 mx-auto",variant:"warning",type:"submit",onClick:function(e){return H(e)},children:"add work"})]}),"delete"===s&&Object(x.jsx)("div",{className:"d-flex",children:v.map((function(e,t){return Object(x.jsx)(Z,{work:e,reload:A})}))}),Object(x.jsx)("h3",{id:"forgot-link",onClick:B,style:{marginTop:"50px"},children:"logout"})]})}var Y=n(112),ee=n(116),te=n(113);n(104);function ne(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=f(),i=n.currentUser,r=n.login,a=n.logout,s=Object(c.useState)(""),l=Object(d.a)(s,2),j=l[0],u=l[1],b=Object(c.useState)(!1),h=Object(d.a)(b,2),O=h[0],p=h[1],m=Object(o.g)(),v=function(){var n=Object(w.a)(y.a.mark((function n(c){return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),n.prev=1,u(""),p(!0),n.next=6,r(e.current.value,t.current.value);case 6:m.push("/admin"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),u("invalid email/password combination");case 12:p(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}(),g=function(){var e=Object(w.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a();case 3:m.push("/"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"signup",children:Object(x.jsx)(Y.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(x.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(x.jsx)(ee.a,{children:i?Object(x.jsx)("p",{id:"forgot-link",onClick:g,children:"logout"}):Object(x.jsxs)(ee.a.Body,{children:[Object(x.jsx)("h2",{id:"font-color",className:"text-center mb-4",children:"admin"}),O?Object(x.jsx)("div",{className:"auth-spinner",children:Object(x.jsx)(C.a,{id:"auth-spin",variant:"warning",animation:"border"})}):Object(x.jsxs)("div",{children:[j&&Object(x.jsx)(te.a,{variant:"danger",children:j}),Object(x.jsxs)(V.a,{onSubmit:v,className:"d-flex flex-column",children:[Object(x.jsxs)(V.a.Group,{id:"email",children:[Object(x.jsx)(V.a.Label,{id:"font-color",children:"email"}),Object(x.jsx)(V.a.Control,{type:"email",ref:e,required:!0})]}),Object(x.jsxs)(V.a.Group,{id:"password",children:[Object(x.jsx)(V.a.Label,{id:"font-color",children:"password"}),Object(x.jsx)(V.a.Control,{type:"password",ref:t,required:!0})]}),Object(x.jsx)(I.a,{disabled:O,id:"loginbutton",className:"w-100 mx-auto",variant:"warning",type:"submit",children:"log in"})]})]})]})})})})})}var ce=function(){return Object(x.jsx)(s.a,{children:Object(x.jsx)(m,{children:Object(x.jsxs)(o.d,{children:[Object(x.jsx)(v,{path:"/admin",component:X,exact:!0}),Object(x.jsx)(o.b,{path:"/login",children:Object(x.jsx)(ne,{})}),Object(x.jsx)(o.b,{path:"/commission",children:Object(x.jsx)(M,{})}),Object(x.jsx)(o.b,{path:"/blog",children:Object(x.jsx)(W,{})}),Object(x.jsx)(o.b,{path:"/about",children:Object(x.jsx)(Q,{})}),Object(x.jsx)(o.b,{path:"/",children:Object(x.jsx)(K,{})})]})})})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,117)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(ce,{})}),document.getElementById("root")),ie()},76:function(e,t,n){},96:function(e,t,n){},99:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.66794137.chunk.js.map