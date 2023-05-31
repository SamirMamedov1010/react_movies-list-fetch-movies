(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var i=c(8),s=c.n(i),a=(c(15),c(2)),n=c(1),r=(c(16),c(17),c(18),c(0)),l=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(l,{movie:e},e.imdbId)}))})},d=c(10),j=c(9),m=c(6),b=c.n(m),u=c(7),v=c.n(u);c(21);var h=function(e){var t=e.value,c=e.movies,i=e.setValue,s=e.setMovies,o=Object(n.useState)(null),m=Object(a.a)(o,2),u=m[0],h=m[1],O=Object(n.useState)(!1),x=Object(a.a)(O,2),f=x[0],p=x[1],N=Object(n.useState)(!1),g=Object(a.a)(N,2),y=g[0],w=g[1],I=function(){var e=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,(c=t,fetch("".concat("https://www.omdbapi.com/?apikey=75d0e657","&t=").concat(c)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))).then((function(e){if("imdbID"in e){var t={title:e.Title,description:e.Plot,imgUrl:(c=e.Poster,"N/A"===c?"https://via.placeholder.com/360x270.png?text=no%20preview":c),imdbUrl:"https://www.imdb.com/title/".concat(e.imdbID),imdbId:e.imdbID};h(t)}else p(!0),h(null);var c})).finally((function(){return w(!1)}));case 3:case"end":return e.stop()}var c}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault()},children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:v()("input",{"is-danger":f}),value:t,onChange:function(e){p(!1),i(e.target.value)}})}),f&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"searchButton",type:"submit",className:v()("button is-light",{"is-loading":y}),onClick:I,disabled:!t,children:"Find a movie"})}),u&&Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){return u&&function(e){var t=!1;c.forEach((function(c){c.imdbId===e.imdbId&&(t=!0)})),t||s((function(t){return[].concat(Object(d.a)(t),[e])})),h(null),i("")}(u)},children:"Add to the list"})})]})]}),u&&Object(r.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),Object(r.jsx)(l,{movie:u})]})]})},O=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(""),l=Object(a.a)(s,2),d=l[0],j=l[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(o,{movies:c})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(h,{value:d,movies:c,setValue:j,setMovies:i})})]})};s.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.a6e6817c.chunk.js.map