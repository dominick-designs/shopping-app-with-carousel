(window["webpackJsonpanatta-stage"]=window["webpackJsonpanatta-stage"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),c=t.n(r),i=(t(14),t(2)),m=t(3),o=t(5),s=t(4),u=t(6),E=(t(15),function(){return l.a.createElement("header",{className:"container"},l.a.createElement("div",{className:"nav middle-menu"},l.a.createElement("img",{src:"./img/logo.png",alt:""})),l.a.createElement("div",{className:"nav left-menu"},l.a.createElement("a",{href:"https://anatta.io/",className:"item"},"Men"),l.a.createElement("a",{href:"https://anatta.io/",className:"item"},"Women")),l.a.createElement("div",{className:"nav right-menu"},l.a.createElement("a",{href:"https://anatta.io/",className:"item"},"About"),l.a.createElement("a",{href:"https://anatta.io/",className:"item"},l.a.createElement("i",{className:"fas fa-user"})),l.a.createElement("a",{href:"https://anatta.io/",className:"item"},l.a.createElement("i",{className:"fas fa-shopping-bag"}))))}),p=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"basic-background"},l.a.createElement("div",null,l.a.createElement("span",{className:"fas fa-lock"}),"Secure Payment "),l.a.createElement("div",null,"|"),l.a.createElement("div",null,l.a.createElement("i",{className:"fas fa-fighter-jet"}),"Express Shipping "),l.a.createElement("div",null,"|"),l.a.createElement("div",null,l.a.createElement("i",{className:"fas fa-box"}),"Free Returns")),l.a.createElement("footer",null,l.a.createElement("div",{className:"flex-column-headers"},l.a.createElement("div",null,l.a.createElement("h3",null,"Men"),l.a.createElement("p",null,"OCA Low"),l.a.createElement("p",null,"OCA High"),l.a.createElement("p",null,"CATIBA Low"),l.a.createElement("p",null,"CATIBA High")),l.a.createElement("div",null,l.a.createElement("h3",null,"Women"),l.a.createElement("p",null,"OCA Low"),l.a.createElement("p",null,"OCA High"),l.a.createElement("p",null,"CATIBA Low"),l.a.createElement("p",null,"CATIBA High")),l.a.createElement("div",null,l.a.createElement("h3",null,"Support"),l.a.createElement("p",null,"FAQ"),l.a.createElement("p",null,"Returns"),l.a.createElement("p",null,"Live Chat")),l.a.createElement("div",null,l.a.createElement("h3",null,"About"),l.a.createElement("p",null,"Mission"),l.a.createElement("p",null,"Vision"),l.a.createElement("p",null,"Future")),l.a.createElement("div",null,l.a.createElement("h3",null,"Pop Up Stories"),l.a.createElement("p",null,"Find near you"),l.a.createElement("p",null,"Register")),l.a.createElement("div",null,l.a.createElement("h3",null,"Newsletter"),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",{type:"email",name:"email",id:"email",value:"Enter email",readOnly:!0}),l.a.createElement("button",null,"Join Us")),l.a.createElement("div",null,l.a.createElement("i",{className:"fab fa-instagram fab-footer"}),l.a.createElement("i",{className:"fab fa-facebook-square fab-footer"})))))),l.a.createElement("footer",null,l.a.createElement("hr",null),l.a.createElement("div",{id:"copyright"},l.a.createElement("section",null,"Copyright \xa9 2019 CARIUMA. All Rights Reserved. Terms of Use | Privacy Policy"))))}}]),a}(n.Component),h=function(e){var a=e.photos;a.length=4;var t=e.products;return t.length=4,l.a.createElement("div",{className:"photo-container"},t.map((function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("figure",null,l.a.createElement("img",{src:"".concat(a.map((function(e){return e.url}))),alt:"",width:"120px"}),l.a.createElement("figcaption",null,e.name),l.a.createElement("figcaption",null,"$",e.price))))})))},d=t(1),f=function(e){var a=e.photos;a.length=4;var t=a.map((function(e){return e.url}));return l.a.createElement("div",{className:"flex"},l.a.createElement("div",{className:"tall"},l.a.createElement(d.c,{naturalSlideWidth:100,naturalSlideHeight:125,totalSlides:4},l.a.createElement(d.e,null,l.a.createElement(d.d,{index:0},l.a.createElement("img",{src:t[0],alt:""})),l.a.createElement(d.d,{index:1},l.a.createElement("img",{src:t[1],alt:""})),l.a.createElement(d.d,{index:2},l.a.createElement("img",{src:t[2],alt:""})),l.a.createElement(d.d,{index:3},l.a.createElement("img",{src:t[3],alt:""}))),l.a.createElement("div",{className:"space-apart"},l.a.createElement(d.a,{className:"button"},"Back"),l.a.createElement(d.b,{className:"button"},"Next")))),l.a.createElement("div",{className:"details"},l.a.createElement("h1",null,"Buying Options go here"),l.a.createElement("img",{src:"./img/product-detail.png",alt:"",width:"120px"})))},g=(t(16),function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(o.a)(this,Object(s.a)(a).call(this))).performSearch=function(){fetch("https://anatta-demo-app.herokuapp.com/api/images").then((function(e){return e.json()})).then((function(a){JSON.parse(JSON.stringify(a)),e.setState({photos:a,loading:!1})})).catch((function(e){console.log("There was an error fetching and parsing data",e)})),fetch("https://anatta-demo-app.herokuapp.com/api/products").then((function(e){return e.json()})).then((function(a){JSON.parse(JSON.stringify(a)),e.setState({products:a,loading:!1})})).catch((function(e){console.log("There was an error fetching and parsing data",e)}))},e.state={photos:[],products:[],loading:!0},e}return Object(u.a)(a,e),Object(m.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){this.performSearch()}},{key:"render",value:function(){return l.a.createElement("div",{className:"react-container"},l.a.createElement(E,null),l.a.createElement(f,{photos:this.state.photos}),l.a.createElement(h,{photos:this.state.photos,products:this.state.products}),l.a.createElement(p,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,a,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.ee3ced86.chunk.js.map