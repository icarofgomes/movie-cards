(this["webpackJsonpmovie-cards"]=this["webpackJsonpmovie-cards"]||[]).push([[0],{32:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(24),s=a.n(r),c=(a(32),a(0));var i=function(){return Object(c.jsx)("div",{className:"flex justify-center my-36",children:Object(c.jsxs)("div",{className:"flex justify-center items-center space-x-1 text-xl text-gray-400",children:[Object(c.jsx)("svg",{fill:"none",className:"w-24 h-24 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{clipRule:"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor",fillRule:"evenodd"})}),Object(c.jsx)("div",{children:"Loading ..."})]})})},o=a(17),l=a(12),d=a(11),m={title:"",subtitle:"",imagePath:"",storyline:"",genre:"",rating:0};function u(e){var t=e.movie,a=void 0===t?m:t,r=e.onSubmit,s=Object(n.useState)(a),i=Object(d.a)(s,2),u=i[0],j=i[1],b=function(){r(u)},x=function(e){var t=e.target,a=t.name,n=t.value;j(Object(l.a)(Object(l.a)({},u),{},Object(o.a)({},a,n)))};return Object(c.jsx)("div",{className:"text-black bg-white w-5/6 mx-auto mt-5 rounded-lg p-2 md:w-3/6",children:Object(c.jsxs)("form",{children:[Object(c.jsx)(B,{name:"title",updateMovie:x,value:u.title}),Object(c.jsx)(B,{name:"subtitle",updateMovie:x,value:u.subtitle}),Object(c.jsx)(B,{name:"imagePath",updateMovie:x,value:u.imagePath}),Object(c.jsx)("div",{className:"p-2 flex flex-col bg-white",children:Object(c.jsx)("div",{className:"flex flex-col space-y-2",children:Object(c.jsxs)("label",{className:"text-gray-700 select-none font-medium",htmlFor:"movie_storyline",children:[Object(c.jsx)("div",{className:"mr-2 text-green-600 font-bold text-lg",children:"Storyline"}),Object(c.jsx)("textarea",{className:"px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 w-full md:p-0",id:"movie_storyline",value:u.storyline,name:"storyline",onChange:x,rows:"3"})]})})}),Object(c.jsx)("div",{className:"p-2 flex flex-col bg-white",children:Object(c.jsx)("div",{className:"flex flex-col space-y-2",children:Object(c.jsxs)("label",{className:"text-gray-700 select-none font-medium",htmlFor:"movie_genre",children:[Object(c.jsx)("div",{className:"mr-2 text-green-600 font-bold text-lg",children:"Genre"}),Object(c.jsxs)("select",{className:"px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 md:p-0",id:"movie_genre",value:u.genre,onChange:x,name:"genre",children:[Object(c.jsx)("option",{value:"action",children:"A\xe7\xe3o"}),Object(c.jsx)("option",{value:"comedy",children:"Com\xe9dia"}),Object(c.jsx)("option",{value:"thriller",children:"Suspense"}),Object(c.jsx)("option",{value:"fantasy",children:"Fantasia"})]})]})})}),Object(c.jsx)("div",{className:"p-2 flex flex-col bg-white",children:Object(c.jsx)("div",{className:"flex flex-col space-y-2",children:Object(c.jsxs)("label",{className:"text-gray-700 select-none font-medium",htmlFor:"movie_rating",children:[Object(c.jsx)("div",{className:"mr-2 text-green-600 font-bold text-lg",children:"Rating"}),Object(c.jsx)("input",{className:"px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 md:p-0",placeholder:"D\xea a avalia\xe7\xe3o do filme",id:"movie_rating",type:"number",step:.1,min:0,max:5,value:u.rating,name:"rating",onChange:x})]})})}),Object(c.jsx)("button",{className:"mt-4 px-1.5 text-xl w-full text-white bg-green-600 py-1.5 rounded-xl shadow-lg text-center font-bold",type:"button",onClick:b,children:"Submit"})]})})}u.defaultProps={movie:m};var j=u,b=a(9);var x=function(e){var t=e.movie,a=t.title,n=t.id,r=t.rating,s=t.imagePath;return Object(c.jsx)("div",{className:"p-4 md:p-2","data-testid":"movie-card",children:Object(c.jsxs)("div",{className:"bg-white p-4 rounded-xl shadow-lg mx-auto",children:[Object(c.jsxs)("div",{className:"flex justify-between pb-4",children:[Object(c.jsx)("h3",{className:"text-xl font-bold text-green-600",children:a}),Object(c.jsxs)("div",{className:"flex items-center justify-end",children:[Object(c.jsx)("svg",{className:"w-6 h-6 text-gray-900 fill-current",viewBox:"0 0 24 24",children:Object(c.jsx)("path",{d:"M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"})}),Object(c.jsx)("div",{className:"text-green-600 font-bold text-xl ml-1",children:r})]})]}),Object(c.jsx)("div",{className:"h-96 p-2",children:Object(c.jsx)("img",{className:"max-h-96 md:max-h-80 mx-auto rounded-xl",src:s,alt:a})}),Object(c.jsx)("div",{className:"my-1",children:Object(c.jsx)("div",{className:"mt-4 text-xl w-full text-white bg-green-600 py-1.5 rounded-xl shadow-lg text-center font-bold",children:Object(c.jsx)(b.b,{to:"/movies/".concat(n),children:"VER DETALHES"})})})]})})},f=a(6),h=a(7),p=a.n(h),v=a(13),g=a(27),O=[{id:1,title:"Star Wars",subtitle:"Empire Strikes Back",storyline:"Yoda treina Luke Skywalker para ser um cavaleiro Jedi. Han Solo corteja a Princesa Leia enquanto Darth Vader retorna para combater as for\xe7as rebeldes que tentam salvar a gal\xe1xia.",rating:4.5,imagePath:"https://live.staticflickr.com/65535/48207320557_01bf42f0f3_b.jpg",bookmarked:!0,genre:"action"},{id:2,title:"A Clockwork Orange",subtitle:"Laranja Mec\xe2nica",storyline:"O jovem Alex passa as noites com uma gangue de amigos briguentos. Depois que \xe9 preso, se submete a uma t\xe9cnica de modifica\xe7\xe3o de comportamento para poder ganhar sua liberdade.",rating:4.5,imagePath:"https://live.staticflickr.com/2761/4062111702_98da5213b1_b.jpg",bookmarked:!1,genre:"action"},{id:3,title:"Ratatouille",subtitle:"Ratatouille",storyline:"Remy reside em Paris e possui um sofisticado paladar. Seu sonho \xe9 se tornar um chef de cozinha e desfrutar as diversas obras da arte culin\xe1ria. O \xfanico problema \xe9 que ele \xe9 um rato. Quando se acha dentro de um dos restaurantes mais finos de Paris, Remy decide transformar seu sonho em realidade.",rating:5,imagePath:"https://live.staticflickr.com/1248/1051508675_5ffd3d1093.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"The Lord of the Rings",subtitle:"The Fellowship of the Ring",storyline:"Em uma terra fant\xe1stica e \xfanica, um hobbit recebe de presente de seu tio um anel m\xe1gico e maligno que precisa ser destru\xeddo antes que caia nas m\xe3os do mal. Para isso, o hobbit Frodo tem um caminho \xe1rduo pela frente, onde encontra perigo, medo e seres bizarros. Ao seu lado para o cumprimento desta jornada, ele aos poucos pode contar com outros hobbits, um elfo, um an\xe3o, dois humanos e um mago, totalizando nove seres que formam a Sociedade do Anel.",rating:4.5,imagePath:"https://live.staticflickr.com/8144/7559312898_027e98481e_b.jpg",bookmarked:!0,genre:"fantasy"},{id:5,title:"Forrest Gump",subtitle:"O Contador de Hist\xf3rias",storyline:"Mesmo com o racioc\xednio lento, Forrest Gump nunca se sentiu desfavorecido. Gra\xe7as ao apoio da m\xe3e, ele teve uma vida normal. Seja no campo de futebol como um astro do esporte, lutando no Vietn\xe3 ou como capit\xe3o de um barco de pesca de camar\xe3o, Forrest inspira a todos com seu otimismo. Mas a pessoa que Forrest mais ama pode ser a mais dif\xedcil de salvar: seu amor de inf\xe2ncia, a doce e perturbada Jenny.",rating:4.2,imagePath:"https://live.staticflickr.com/721/21505208734_9b94ae2e24_b.jpg",bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(O));var w=function(){return JSON.parse(localStorage.getItem("movies"))},y=function(e){return localStorage.setItem("movies",JSON.stringify(e))},N="OK",k=function(e){return function(t){setTimeout((function(){t(e)}),2e3)}},S=function(e){var t=w().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){k(t)(e)}))},P=function(e){return new Promise((function(t){var a=w().map((function(t){return t.id===parseInt(e.id,10)?Object(l.a)(Object(l.a)({},t),e):t}));y(a),k(N)(t)}))},L=function(e){return new Promise((function(t){var a=w(),n=a[a.length-1].id+1,r=Object(l.a)(Object(l.a)({},e),{},{id:n});a=[].concat(Object(g.a)(a),[r]),y(a),k(N)(t)}))},R=function(e){var t=w();return t=t.filter((function(t){return t.id!==parseInt(e,10)})),y(t),new Promise((function(e){k({status:N})(e)}))};var _=function(e){var t=e.match.params.id,a=Object(n.useState)(!1),r=Object(d.a)(a,2),s=r[0],o=r[1],l=Object(n.useState)(""),m=Object(d.a)(l,2),u=m[0],b=m[1];Object(n.useEffect)((function(){h()}));var x=function(){var e=Object(v.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(t);case 2:b(t),o(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(v.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t);case 2:a=e.sent,b(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s?Object(c.jsx)(f.a,{to:"/movie-cards"}):""===u?Object(c.jsx)(i,{}):Object(c.jsx)("div",{"data-testid":"edit-movie",children:Object(c.jsx)(j,{movie:u,onSubmit:x})})};var C=function(e){var t=e.match.params.id,a=Object(n.useState)(""),r=Object(d.a)(a,2),s=r[0],o=r[1];Object(n.useEffect)((function(){var e=function(){var e=Object(v.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t);case 2:a=e.sent,o(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}));var l=function(){var e=Object(v.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=s.title,u=s.storyline,j=s.imagePath,x=s.genre,f=s.rating,h=s.subtitle;return""===s?Object(c.jsx)(i,{}):Object(c.jsx)("div",{className:"bg-gray-800 py-2",children:Object(c.jsxs)("div",{className:"flex flex-col bg-white w-11/12 mx-auto rounded-xl text-black p-4","data-testid":"movie-details",children:[Object(c.jsx)("h1",{className:"text-green-600 font-bold text-xl mb-2 mx-auto",children:m}),Object(c.jsxs)("div",{className:"md:flex",children:[Object(c.jsx)("img",{className:"max-h-80 rounded mx-auto mb-2",alt:"Movie Cover",src:j}),Object(c.jsxs)("div",{className:"md:p-4 md:flex md:flex-col md:justify-center",children:[Object(c.jsxs)("p",{className:"text-lg md:my-2",children:[Object(c.jsx)("span",{className:"font-bold text-green-600 mr-1",children:"Subtitle:"}),h]}),Object(c.jsxs)("p",{className:"text-lg md:my-2",children:[Object(c.jsx)("span",{className:"text-green-600 font-bold mr-1",children:"Storyline:"}),u]}),Object(c.jsxs)("p",{className:"text-lg md:my-2",children:[Object(c.jsx)("span",{className:"text-green-600 font-bold mr-1",children:"Genre:"}),x]}),Object(c.jsxs)("p",{className:"text-lg md:my-2",children:[Object(c.jsx)("span",{className:"text-green-600 font-bold mr-1",children:"Rating:"}),f]})]})]}),Object(c.jsxs)("div",{className:"flex justify-between md:justify-evenly",children:[Object(c.jsx)(b.b,{to:"/movie-cards",children:Object(c.jsx)("div",{className:"mt-4 px-1.5 text-xl w-full text-white bg-green-600 py-1.5 rounded-xl shadow-lg text-center font-bold",children:"VOLTAR"})}),Object(c.jsx)(b.b,{to:"".concat(t,"/edit"),children:Object(c.jsx)("div",{className:"mt-4 px-1.5 text-xl w-full text-white bg-green-600 py-1.5 rounded-xl shadow-lg text-center font-bold",children:"EDITAR"})}),Object(c.jsx)(b.b,{to:"/movie-cards",onClick:l,children:Object(c.jsx)("div",{className:"mt-4 px-1.5 text-xl w-full text-white bg-green-600 py-1.5 rounded-xl shadow-lg text-center font-bold",children:"DELETAR"})})]})]})})},A=a(48),E=a(50),F=a(49),I=a(47);a(43),a(44);F.a.use([I.a]);var M=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){s()}));var s=function(){var e=Object(v.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var t=w();k(t)(e)}));case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=a.map((function(e,t){return Object(c.jsx)(A.a,{children:Object(c.jsx)(x,{movie:e})},t)}));return 0===o.length?Object(c.jsx)(i,{}):Object(c.jsxs)("div",{className:"pb-2","data-testid":"movie-list",children:[Object(c.jsx)("div",{className:"h-5/6",children:Object(c.jsx)(E.a,{navigation:window.screen.width>768,spaceBetween:50,slidesPerView:window.screen.width>768?3:1,children:o})}),Object(c.jsx)(b.b,{to:"/movies/new",children:Object(c.jsx)("div",{className:"mx-auto text-xl w-2/3 text-white bg-blue-600 py-1.5 rounded-xl shadow-lg text-center font-bold md:w-2/6",children:"ADICIONAR CART\xc3O"})})]})};var q=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],r=t[1],s=function(){var e=Object(v.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t);case 2:r(!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a?Object(c.jsx)(f.a,{to:"/movie-cards"}):Object(c.jsx)("div",{"data-testid":"new-movie",children:Object(c.jsx)(j,{onSubmit:s})})};var T=function(){return Object(c.jsx)("div",{"data-testid":"404-error",children:"P\xe1gina n\xe3o encontrada"})};var D=function(){return Object(c.jsxs)(f.d,{children:[Object(c.jsx)(f.b,{exact:!0,path:"/movies/new",component:q}),Object(c.jsx)(f.b,{exact:!0,path:"/movies/:id/edit",render:function(e){return Object(c.jsx)(_,Object(l.a)({},e))}}),Object(c.jsx)(f.b,{exact:!0,path:"/movie-cards",component:M}),Object(c.jsx)(f.b,{exact:!0,path:"/movies/:id",render:function(e){return Object(c.jsx)(C,Object(l.a)({},e))}}),Object(c.jsx)(f.b,{component:T})]})};var J=function(){return Object(c.jsx)("header",{children:Object(c.jsx)("h1",{className:"text-center text-3xl font-bold py-6 bg-green-600",children:"Movie Cards Library"})})};var B=function(e){var t=e.name,a=e.value,n=e.updateMovie;return Object(c.jsx)("div",{className:"p-2 flex flex-col bg-white",children:Object(c.jsx)("div",{className:"flex flex-col space-y-2",children:Object(c.jsxs)("label",{className:"text-gray-700 select-none font-medium",htmlFor:"movie-".concat(t),children:[Object(c.jsx)("div",{className:"capitalize mr-2 text-green-600 font-bold text-lg",children:t}),Object(c.jsx)("input",{className:"py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 md:py-0 md:w-full",placeholder:"Insira o ".concat(t),id:"movie-".concat(t),type:"text",name:t,value:a,onChange:n})]})})})};var z=function(){return Object(c.jsxs)("div",{className:"bg-gray-800 text-white h-screen md:pb-4",children:[Object(c.jsx)(J,{}),Object(c.jsx)(D,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(c.jsx)(b.a,{children:Object(c.jsx)(z,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.4f2471ee.chunk.js.map