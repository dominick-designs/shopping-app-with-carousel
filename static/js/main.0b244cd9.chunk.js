(window["webpackJsonpanatta-stage"]=window["webpackJsonpanatta-stage"]||[]).push([[0],{32:function(e,t,a){e.exports=a(50)},37:function(e,t,a){},38:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),c=a.n(r),i=(a(37),a(6)),o=a(8),m=a(10),s=a(9),u=a(11),E=(a(38),function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:"./img/logo.png",alt:""})),l.a.createElement("a",{href:"https://anatta.io/",className:"item"},"Men"),l.a.createElement("a",{href:"https://anatta.io/",className:"item"},"Women"),l.a.createElement("a",{href:"https://anatta.io/",className:"item"},"About"),l.a.createElement("a",{href:"https://anatta.io/",className:"item"},l.a.createElement("i",{className:"fas fa-user"})),l.a.createElement("a",{href:"https://anatta.io/",className:"item"},l.a.createElement("i",{className:"fas fa-shopping-bag"}))))}),h=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"basic-background"},l.a.createElement("div",null,l.a.createElement("span",{className:"fas fa-lock"}),"Secure Payment "),l.a.createElement("div",null,"|"),l.a.createElement("div",null,l.a.createElement("i",{className:"fas fa-fighter-jet"}),"Express Shipping "),l.a.createElement("div",null,"|"),l.a.createElement("div",null,l.a.createElement("i",{className:"fas fa-box"}),"Free Returns")),l.a.createElement("footer",{className:"black-bg"},l.a.createElement("div",{className:"flex-column-headers"},l.a.createElement("h3",null,"Men"),l.a.createElement("h3",null,"Women"),l.a.createElement("h3",null,"Support"),l.a.createElement("h3",null,"About"),l.a.createElement("h3",null,"Pop Up Stories"),l.a.createElement("h3",null,"Newsletter")),l.a.createElement("div",{className:"flex-column"},l.a.createElement("ul",null,l.a.createElement("li",null,"OCA Low"),l.a.createElement("li",null,"OCA High"),l.a.createElement("li",null,"CATIBA Low"),l.a.createElement("li",null,"CATIBA High")),l.a.createElement("ul",null,l.a.createElement("li",null,"OCA Low"),l.a.createElement("li",null,"OCA High"),l.a.createElement("li",null,"CATIBA Low"),l.a.createElement("li",null,"CATIBA High")),l.a.createElement("ul",null,l.a.createElement("li",null,"FAQ"),l.a.createElement("li",null,"Returns"),l.a.createElement("li",null,"Live Chat")),l.a.createElement("ul",null,l.a.createElement("li",null,"Mission"),l.a.createElement("li",null,"Vision"),l.a.createElement("li",null,"Future")),l.a.createElement("ul",null,l.a.createElement("li",null,"Find near you"),l.a.createElement("li",null,"Register")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("div",null,l.a.createElement("input",{type:"email",name:"email",id:"email",value:"Enter email",readOnly:!0}),l.a.createElement("button",null,"Join Us")),l.a.createElement("div",null,l.a.createElement("i",{className:"fab fa-instagram fab-footer"}),l.a.createElement("i",{className:"fab fa-facebook-square fab-footer"}))))),l.a.createElement("hr",null),l.a.createElement("div",{id:"copyright"},l.a.createElement("section",null,"Copyright \xa9 2019 CARIUMA. All Rights Reserved. Terms of Use | Privacy Policy"))))}}]),t}(n.Component),p=function(e){return l.a.createElement("div",{className:"photo-container"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("figure",null,l.a.createElement("img",{src:e.url,alt:""}),l.a.createElement("figcaption",null,e.name),l.a.createElement("figcaption",null,"$",e.price)))))},f=function(e){var t,a=e.photos;a.length=4,a.length>0&&(t=a.map((function(e){return l.a.createElement(p,{url:"".concat(e.url),key:e.id})})));var n,r=e.products;return r.length=4,r.length>0&&(n=r.map((function(e){return l.a.createElement(p,{price:"".concat(e.price),name:"".concat(e.name),key:e.id})}))),l.a.createElement("div",{className:"photo-container"},l.a.createElement("h1",null,"You'll also like"),l.a.createElement("ul",null,t),l.a.createElement("ul",null,n))},d=(a(13),function(){return l.a.createElement("aside",null)}),g=function(){return l.a.createElement("main",{className:"mainContainer"},l.a.createElement("div",null,l.a.createElement("h1",null,"Buying Options go here"),l.a.createElement("img",{src:"https://via.placeholder.com/528x290.png?text=This+is+where+Buying+Options"})),l.a.createElement("div",null,l.a.createElement("h1",null,"Carousel Goes here"),l.a.createElement("img",{src:"https://via.placeholder.com/528x290.png?text=This+is+where+Carousel+Goes"})))};a(31),a(54);var v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).performSearch=function(){fetch("https://anatta-demo-app.herokuapp.com/api/images").then((function(e){return e.json()})).then((function(t){JSON.parse(JSON.stringify(t)),e.setState({photos:t,loading:!1})})).catch((function(e){console.log("There was an error fetching and parsing data",e)})),fetch("https://anatta-demo-app.herokuapp.com/api/products").then((function(e){return e.json()})).then((function(t){JSON.parse(JSON.stringify(t)),e.setState({products:t,loading:!1})})).catch((function(e){console.log("There was an error fetching and parsing data",e)}))},e.state={photos:[],products:[],loading:!0},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.performSearch()}},{key:"render",value:function(){return console.log(this.state.products),this.state.products.length>0&&console.log("more than zero"),l.a.createElement("div",{className:"react-container"},l.a.createElement(E,null),l.a.createElement(g,null),l.a.createElement(d,null),l.a.createElement(f,{photos:this.state.photos,products:this.state.products}),l.a.createElement(h,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.0b244cd9.chunk.js.map