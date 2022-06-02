(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(4),i=n.n(o),a=(n(9),n(2)),s=(n(10),n(0)),u=function(e){var t=e.displText,n=e.onClick;return Object(s.jsx)("button",{onClick:n,children:t})},l={nOfRows:5,nOfCols:5,snake:[{x:0,y:2},{x:0,y:1},{x:0,y:0}],snakeColor:"blue",food:{x:3,y:3},foodColor:"red",delay:1e3};var f=function(e){e.width=500,e.height=500};var h=function(e,t,n){var r=(t.height/8).toFixed(0);e.clearRect(0,0,t.width,t.height),e.font="".concat(r,"px Arial"),e.textAlign="center",e.textBaseline="middle",e.fillStyle="#ff3333",e.fillText("Game Over",t.width/2,t.height/2-parseInt(r)),e.fillText("Score: ".concat(n),t.width/2,t.height/2+parseInt(r))};var d,j=function(e,t,n,r,c){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"blue";e.fillStyle=o;var i=t*c+1,a=n*r+1;e.fillRect(a,i,r-2,c-2)},b=(n(12),function(e){var t=Object(r.useRef)(null),n=e.snake,c=e.food,o=e.isGameOver,i=e.score,a=l.nOfRows,u=l.nOfCols,d=l.snakeColor,b=l.foodColor;return Object(r.useEffect)((function(){var e=t.current;if(null!==e){var r=e.width/u,s=e.height/a;f(e);var l=e.getContext("2d");null!==l&&(n.forEach((function(e){return j(l,e.x,e.y,r,s,d)})),j(l,c.x,c.y,r,s,b),o&&h(l,e,i))}}),[n,c,a,u,b,d,o,i]),Object(s.jsx)("div",{children:Object(s.jsx)("canvas",{width:"500",height:"500",ref:t,className:"canvas"})})});!function(e){e[e.Up=1]="Up",e[e.Down=10]="Down",e[e.Right=2]="Right",e[e.Left=11]="Left"}(d||(d={}));var O=d;var v=function(e,t){var n=e.slice();return n.unshift(t),n},x=function(e){var t=e.isGameOver,n=e.score;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:"Game status: "})," ",t?"Game Over":"In Progress"]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:"Score: "})," ",n]})]})};var y=function(e,t){for(var n=0,r=0;r<2;r++)if(arguments[r]<0)throw new Error("range must not include negative numbers");return 1===arguments.length&&(t=e,e=0),e=Math.ceil(e),t&&(t=Math.floor(t),n=Math.floor(Math.random()*(t-e))+e),n};var g=function(e,t){for(var n=0;n<t.length;n++)if(e.x===t[n].x&&e.y===t[n].y)return!0;return!1};function m(e,t){return{x:y(e,t),y:y(e,t)}}var p=function(e,t,n){for(var r=m(e,t);g(r,n);)r=m(e,t);return r},w=function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{children:[" ",Object(s.jsx)("b",{children:"Instructions: "})," "]}),Object(s.jsxs)("span",{children:["Click the button to start the game. The snake moves itself.",Object(s.jsx)("br",{}),"Arrow keys on your keyboard (\u2190 \u2191 \u2192 \u2193) change the direction of the snake",Object(s.jsx)("br",{}),"(90 deg. right or left from the direction of the snake's head).",Object(s.jsx)("br",{}),"Collect food. Avoid collision with the walls and the snake's body.",Object(s.jsx)("br",{})]})]})};function k(e,t){return t===O.Up?{x:e.x-1,y:e.y}:t===O.Down?{x:e.x+1,y:e.y}:t===O.Right?{x:e.x,y:e.y+1}:{x:e.x,y:e.y-1}}n(13);var C=function(e){var t=e.choices,n=e.actionOnSelect,c=Object(r.useState)(t[0].name),o=Object(a.a)(c,2),i=o[0],u=o[1],l=function(e){u(e.name),n(e.delay)};return Object(s.jsxs)("fieldset",{children:[Object(s.jsx)("legend",{children:"Choose speed level"}),t.map((function(e){return t=e,Object(s.jsxs)("span",{children:[Object(s.jsx)("input",{type:"radio",value:t.name,name:"speed",onChange:function(){return l(t)},checked:i===t.name}),Object(s.jsx)("label",{htmlFor:t.name,onClick:function(){return l(t)},children:t.name})]},t.id);var t}))]})};var S=function(e,t,n){var r=k(e[0],t),c=r.x<0||r.x>=n,o=r.y<0||r.y>=n;return c||o};var R=function(e,t){var n=k(e[0],t);return g(n,e)},A=(n(14),function(){var e=Object(r.useState)(l.delay),t=Object(a.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(l.food),i=Object(a.a)(o,2),f=i[0],h=i[1],d=Object(r.useState)(!0),j=Object(a.a)(d,2),y=j[0],g=j[1],m=l.nOfRows*l.nOfCols,A=Object(r.useState)(O.Right),I=Object(a.a)(A,2),E=I[0],L=I[1],G=Object(r.useState)(l.snake),T=Object(a.a)(G,2),D=T[0],F=T[1],M=Object(r.useState)(D.length),U=Object(a.a)(M,2),B=U[0],P=U[1];return Object(r.useEffect)((function(){var e=function(e){var t=E;"ArrowLeft"===e.key&&(t=O.Left),"ArrowUp"===e.key&&(t=O.Up),"ArrowRight"===e.key&&(t=O.Right),"ArrowDown"===e.key&&(t=O.Down),t!==E&&9!==Math.abs(t-E)&&L(t)};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[E]),Object(r.useEffect)((function(){var e=function(){F((function(e){return function(e,t){var n=e.slice(0,-1);return n.unshift(k(e[0],t)),n}(e,E)}))},t=function(){clearInterval(r),F(l.snake),h(l.food),L(O.Right)},r=setInterval((function(){var n;y?t():!function(){var e=k(D[0],E);return e.x===f.x&&e.y===f.y}()?e():D.length===m-1?(P((function(e){return e+1})),g(!0)):(P((function(e){return e+1})),n=v(D,f),h(p(0,l.nOfRows,n)),F((function(e){return v(e,f)}))),(S(D,E,l.nOfRows)||R(D,E))&&g(!0)}),n);return function(){clearInterval(r)}}),[n,f,y,m,E,B,D]),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(w,{}),Object(s.jsx)(x,{isGameOver:y,score:B}),Object(s.jsx)(b,{snake:D,food:f,isGameOver:y,score:B}),y&&Object(s.jsx)(u,{onClick:function(){P(D.length),g(!1)},displText:"start game"}),y&&Object(s.jsx)(C,{choices:[{id:0,name:"Kindergarten",delay:1e3},{id:1,name:"School",delay:800},{id:2,name:"College",delay:600}],actionOnSelect:function(e){c(e)}})]})}),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),o(e),i(e)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(A,{})}),document.getElementById("root")),I()}],[[15,1,2]]]);
//# sourceMappingURL=main.3e56fe44.chunk.js.map