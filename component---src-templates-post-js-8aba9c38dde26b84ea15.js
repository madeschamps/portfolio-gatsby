(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{217:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"pageQuery",function(){return h});var a=n(6),r=n.n(a),l=n(0),c=n(1),i=n.n(c),o=n(286),s=n(291),m=n.n(s),u=n(226),p=n(248),d=function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){var t=this.props.data.wordpressPost;return e.createElement(u.a,null,e.createElement("h1",{dangerouslySetInnerHTML:{__html:t.title}}),e.createElement(o.a,{node:t,css:{marginBottom:Object(p.a)(.5)}}),e.createElement("div",{dangerouslySetInnerHTML:{__html:t.content}}),t.acf&&t.acf.page_builder_post&&t.acf.page_builder_post.map(function(t,n){if("WordPressAcf_image_gallery"===t.__typename)return e.createElement("div",{key:n+" image-gallery"},e.createElement("h2",null,"ACF Image Gallery"),t.pictures.map(function(t){var n=t.picture.localFile.childImageSharp.fluid;return e.createElement(m.a,{css:{marginBottom:Object(p.a)(1)},key:n.src,fluid:n})}));if("WordPressAcf_post_photo"===t.__typename){var a=t.photo.localFile.childImageSharp.fluid;return e.createElement("div",{key:n+"-photo"},e.createElement("h2",null,"ACF Post Photo"),e.createElement(m.a,{css:{marginBottom:Object(p.a)(1)},src:a.src,fluid:a}))}return null}))},n}(l.Component);d.propTypes={data:i.a.object.isRequired,edges:i.a.array},t.default=d;var h="862126946"}.call(this,n(64))},226:function(e,t,n){"use strict";(function(e){var a=n(6),r=n.n(a),l=n(0),c=n(1),i=n.n(c),o=n(91),s=n(227),m=n.n(s),u=(n(213),n(214),function(t){function n(){return t.apply(this,arguments)||this}r()(n,t);var a=n.prototype;return a.componentDidMount=function(){var e=["down","right"],t=Math.floor(Math.random()*e.length);this.randomDirection=e[t]},a.render=function(){return e.createElement("div",null,e.createElement("div",{className:"header container-fluid"},e.createElement("h1",{className:"header__logo"},e.createElement(m.a,{swipe:!0,direction:this.randomDirection,className:"header__logo-link",to:"/"},"Marc-André D")),e.createElement("input",{id:"burger",type:"checkbox"}),e.createElement("label",{for:"burger"},e.createElement("span",null),e.createElement("span",null),e.createElement("span",null)),e.createElement("nav",{className:"site-navigation"},e.createElement("ul",null,e.createElement("li",null,e.createElement(o.Link,{to:"/"},"Home")),e.createElement("li",null,e.createElement(o.Link,{to:"projects"},"Projects")),e.createElement("li",{className:"mb-3"},e.createElement("a",{href:"https://docdro.id/Jpw6BfH",target:"_blank"},"Download CV")),e.createElement("p",{className:"menu-message pb-3"},"Want to hire me? Contact me now via email."),e.createElement("a",{href:"mailto:marc.andre.deschamps@gmail.com",className:"button-rectangle menu-mail-item"},"marc.andre.deschamps@gmail.com")))),this.props.children)},n}(l.Component));u.propTypes={children:i.a.object.isRequired},t.a=u}).call(this,n(64))},248:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(288),r=n.n(a),l=n(289),c=n.n(l);c.a.headerLineHeight=1.1,c.a.overrideThemeStyles=function(){return{a:{color:"rgb(60,99,243)"},h1:{lineHeight:1}}};var i=new r.a(c.a),o=i.rhythm;i.scale},286:function(e,t,n){"use strict";(function(e){n(287),n(0);var a=n(254),r=n(248);t.a=function(t){var n=t.node,l=t.className,c=void 0===l?"":l;return e.createElement("div",{css:{marginTop:Object(r.a)(-.5)},className:c},e.createElement("span",{style:{marginRight:Object(r.a)(1)}},e.createElement(a.b,{size:14,style:{position:"relative",bottom:1}})," ",n.date),n.categories&&n.categories.map(function(t){return e.createElement("span",{style:{marginRight:Object(r.a)(1)},key:t.name},e.createElement(a.a,{size:14,style:{position:"relative",bottom:1}})," ",t.name)}),n.tags&&n.tags.map(function(t){return e.createElement("span",{key:t.name},e.createElement(a.c,{size:14,style:{position:"relative",bottom:1}})," ",t.name)}))}}).call(this,n(64))}}]);
//# sourceMappingURL=component---src-templates-post-js-8aba9c38dde26b84ea15.js.map