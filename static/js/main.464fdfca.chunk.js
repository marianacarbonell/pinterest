(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(e,a,t){},165:function(e,a,t){},184:function(e,a,t){},185:function(e,a,t){"use strict";t.r(a);var n=t(2),c=t.n(n),s=t(77),i=t.n(s),o=t(78),r=t.n(o),l=(t(164),t(36)),m=t(37),u=t(39),f=t(38),p=t(40),d=(t(165),t(54),function(e){function a(){return Object(l.a)(this,a),Object(u.a)(this,Object(f.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"navbar"},c.a.createElement("navbar",null,c.a.createElement("url",null,c.a.createElement("img",{src:"https://cdn.freebiesupply.com/logos/large/2x/pinterest-1-logo-png-transparent.png",className:"image",alt:""}),c.a.createElement("i",{class:"fas fa-search"}),c.a.createElement("input",{className:"Search",placeholder:"Buscar"}),c.a.createElement("a",{className:"Home"},"Inicio"),c.a.createElement("a",{className:"Follow"},"Siguiendo"),c.a.createElement("i",{class:"fas fa-user-astronaut"}),c.a.createElement("a",{className:"Name"},"Mariana"),c.a.createElement("i",{className:"fas fa-comment-dots"}),c.a.createElement("i",{className:"fas fa-bell"}),c.a.createElement("i",{className:"fas fa-ellipsis-h"}))))}}]),a}(n.Component)),h=t(56),g=t.n(h),E=t(79),v=t.n(E),y=(t(184),function(e){return c.a.createElement("div",{className:"modalContainer",onClick:function(a){"flex"===a.target.getAttribute("class")&&e.pushClick()}},c.a.createElement("a",{href:"inicio",className:"inicio"},c.a.createElement("i",{className:"fas fa-chevron-left",style:{fontSize:"20px"}}),"Inicio"),c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"modal"},c.a.createElement("div",{className:"headerModal"},c.a.createElement("a",{href:"#",className:"btn-guardar"},c.a.createElement("i",{className:"fas fa-thumbtack",style:{fontSize:"15px"}}),"Guardar"),c.a.createElement("a",{href:"#",className:"btn-enviar"},c.a.createElement("i",{className:"fas fa-upload",style:{fontSize:"15px"}}),"Enviar")),c.a.createElement("div",{className:"bodyModal"},c.a.createElement("img",{className:"imgModal",src:e.imgUrl,alt:""})))))}),b=function(e){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"item"},c.a.createElement("img",{src:e.url,onClick:function(){return e.pushClick(e)}})))},N=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(c)))).state={images:[],isLoading:!0,errors:null,apikey:"12145459-9f7087c163adfae3e8a92828d",page:20,toShowing:!1},t.fetchData=function(){var e=t.state.page+20;t.setState({page:e}),g.a.get("https://pixabay.com/api/?key=12145459-9f7087c163adfae3e8a92828d&q=all&image_type=photo&page="+t.state.page/20+"&per_page=20").then(function(e){var a=e.data.hits;t.setState({images:a.concat(t.state.images),isLoading:!1}),console.log(a.concat(t.state.images))})},t.openModal=function(e){t.setState({toShowing:e.url})},t.closeModal=function(){t.setState({toShowing:!1})},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://pixabay.com/api/?key=12145459-9f7087c163adfae3e8a92828d&q=all&image_type=photo").then(function(a){e.setState({images:a.data.hits,isLoading:!1})}).catch(function(a){return e.setState({error:a,isLoading:!1})})}},{key:"getImage",value:function(){var e=this;return this.state.images.map(function(a,t){return c.a.createElement(b,{key:t,pushClick:e.openModal,url:a.previewURL})})}},{key:"render",value:function(){return c.a.createElement("div",null,this.state.toShowing&&c.a.createElement(y,{pushClick:this.closeModal,imgUrl:this.state.toShowing}),c.a.createElement(d,null),c.a.createElement("div",{className:"masonry"},c.a.createElement(v.a,{style:{overflow:"none"},dataLength:this.state.images.length,next:this.fetchData,hasMore:!0},this.state.images&&this.getImage())))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.initializeApp({apiKey:"AIzaSyDCzEyMWwfDzAAivUESp8vE2Ou61oCzlN8",authDomain:"comentarios-cd6c9.firebaseapp.com",databaseURL:"https://comentarios-cd6c9.firebaseio.com",projectId:"comentarios-cd6c9",storageBucket:"comentarios-cd6c9.appspot.com",messagingSenderId:"815230709622"}),i.a.render(c.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},54:function(e,a,t){},80:function(e,a,t){e.exports=t(185)}},[[80,1,2]]]);
//# sourceMappingURL=main.464fdfca.chunk.js.map