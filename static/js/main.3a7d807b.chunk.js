(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{33:function(e,t,a){e.exports=a(64)},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),s=a.n(o),c=a(7),i=a(6),l=a(16),m=a.n(l),u=a(10),p=a(11),v=a(13),d=a(12),h=a(14),E=a(30),y=a.n(E);a(56);var f=function(e){var t=e.id,a=e.year,n=e.title,o=e.summary,s=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(c.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:o,poster:s,genres:i}}},r.a.createElement("img",{src:s,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"genres"},i.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},o.slice(0,180),"..."))))},g=(a(62),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[],items:[]},a.getMovies=function(){var e,t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"));case 2:e=n.sent,t=e.data.data.movies,a.setState({movies:t,isLoading:!1});case 5:case"end":return n.stop()}}))},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(f,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component));var b=function(e){return console.log(e),r.a.createElement("span",null," About this page : I built it because I love movies.")},_=function(e){function t(){return Object(u.a)(this,t),Object(v.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/"),console.log(t.state)}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}}]),t}(r.a.Component);var N=function(){return r.a.createElement("div",null,r.a.createElement(c.b,{to:"/"},"Home"),"\xa0",r.a.createElement(c.b,{to:{pathname:"/about",state:{fromNavigation:!0}}},"About"))};a(63);var j=function(){return r.a.createElement(c.a,null,r.a.createElement(N,null),r.a.createElement(i.a,{path:"/",exact:!0,component:g}),r.a.createElement(i.a,{path:"/about",component:b}),r.a.createElement(i.a,{path:"/movie/:id",component:_}))};s.a.render(r.a.createElement(j,null),document.getElementById("potato"))}},[[33,1,2]]]);
//# sourceMappingURL=main.3a7d807b.chunk.js.map