(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var r,a=n(0),l=n.n(a),s=n(47),i=n.n(s),o=(n(56),n(1)),c=n.n(o),u=n(5),p=n(6),f=n(13),h=n(17),v=n(15),d=n(3),y=n(16),m=n(4),g=n(49),w=n(7),k=n(23),S=(n(69),new k.InferenceSession),b="./11_2w4_1100.onnx",O=!1,x="",_=!0;function j(){return E.apply(this,arguments)}function E(){return(E=Object(m.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.loadModel(b);case 2:O=!0;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t){return e+11*t}function C(e){var t=e%11;return[t,(e-t)/11]}function G(e,t,n,r){for(var a=C(n),l=Object(y.a)(a,2),s=l[0],i=l[1],o=new Set([n]),c="0"===r?new Set([i]):new Set([s]),u=new Set(function(e){var t=C(e),n=Object(y.a)(t,2),r=n[0],a=n[1],l=[];return 0!==r&&l.push(A(r-1,a)),0!==r&&10!==a&&l.push(A(r-1,a+1)),0!==a&&l.push(A(r,a-1)),10!==a&&l.push(A(r,a+1)),10!==r&&0!==a&&l.push(A(r+1,a-1)),10!==r&&l.push(A(r+1,a)),l}(n)),p=0;p<e[r].length;p++){var f=new Set(e[r][p]),h=new Set(t[r][p]);new Set(Object(d.a)(f).filter((function(e){return u.has(e)}))).size>0&&(o=new Set([].concat(Object(d.a)(o),Object(d.a)(f))),c=new Set([].concat(Object(d.a)(c),Object(d.a)(h))))}return e[r].push(Array.from(o)),t[r].push(Array.from(c)),c.has(0)&&c.has(10)}Array.prototype.last||(Array.prototype.last=function(){return this[this.length-1]});var J=function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={showRatings:e.initial},r.handleClick=r.handleClick.bind(Object(f.a)(r)),r}return Object(p.a)(n,[{key:"handleClick",value:function(){this.props.toggle(!this.state.showRatings),this.setState((function(e){return{showRatings:!e.showRatings}}))}},{key:"render",value:function(){return l.a.createElement("button",{onClick:this.handleClick},this.state.showRatings?"Hide Ratings":"Show Ratings")}}]),n}(l.a.Component),N={setup:function(){return{cells:Array(121).fill(null),connected_sets:[[],[]],connected_set_rows:[[],[]],winner:null,model_output:Array(121).fill(null),model_display:Array(121).fill(null)}},moves:{clickCell:function(e,t,n){if(1==e.cells.reduce((function(e,t){return e+(t?1:0)}),0)&&"0"==e.cells[n])_=!_,x="Switched!";else{var r=t.currentPlayer;_||(r="0"===t.currentPlayer?"1":"0"),e.cells[n]=r;var a=G(e.connected_sets,e.connected_set_rows,n,r);e.last_move=n,a&&(e.winner=r)}}},endIf:function(e,t){if(null!==e.winner)return{winner:e.winner}},turn:{moveLimit:1},ai:{enumerate:function(e,t){for(var n=[],r=0;r<121;r++)null===e.cells[r]&&n.push({move:"clickCell",args:[r]});return n}}};var R=function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).setDisplayRatings=r.setDisplayRatings.bind(Object(f.a)(r)),r.state={display_ratings:!1},r}return Object(p.a)(n,[{key:"findSureWinMove",value:function(e,t,n){var r=function e(t,n,r,a,l){var s=_?"0":"1",i=_?"1":"0";if(0===a)return[0,null];if(l){for(var o=-10,c=null,u=0;u<121;u++)if(null===t[u]){var p=Array.from(t),f=JSON.parse(JSON.stringify(n)),h=JSON.parse(JSON.stringify(r));if(p[u]="a",G(f,h,u,i))return[1,u];var v=e(t,f,h,a-1,!1);if(v[0]>o&&(o=v[0],c=u),o>=1)return[o,c]}return[o,c]}for(var d=10,y=null,m=0;m<121;m++)if(null===t[m]){var g=Array.from(t),w=JSON.parse(JSON.stringify(n)),k=JSON.parse(JSON.stringify(r));if(g[m]="p",G(w,k,m,s))return[-1,m];var S=e(g,w,k,a-1,!0);if(S[0]<d&&(y=m,(d=S[0])<=0))return[d,y]}return[d,y]}(e,t,n,3,!0);return r[0]>0?r[1]:null}},{key:"onClick",value:function(e){var t=this;if(this.isActive(e)){var n=_?"0":"1",a=Array.from(this.props.G.cells);a[e]=n,this.props.moves.clickCell(e);var l=JSON.parse(JSON.stringify(this.props.G.connected_sets)),s=JSON.parse(JSON.stringify(this.props.G.connected_set_rows));if(!G(l,s,e,n)){var i=this.findSureWinMove(a,l,s);if(null===i)this.runModel(a).then((function(e){for(var n=t.props.G.cells.reduce((function(e,t){return e+(t?1:0)}),0),a=-1,l=0;l<121;l++)(n<=1||null===t.props.G.cells[l])&&(-1===a||e[l]>r)&&(a=l,r=e[l]);for(var s=0,i=0;i<121;i++){if(n<=1||null===t.props.G.cells[i])s+=Math.pow(2,e[i]-r)}for(var o=0;o<121;o++)if(n<=1||null===t.props.G.cells[o]){var c=Math.pow(2,e[o]-r);t.props.G.model_display[o]=(100*c/s).toFixed(0)}else t.props.G.model_display[o]="";t.props.moves.clickCell(a)}));else{console.log("Found sure win move",i),this.props.moves.clickCell(i);for(var o=0;o<121;o++)this.props.G.model_display[o]=""}}}}},{key:"setDisplayRatings",value:function(e){this.setState({display_ratings:e})}},{key:"runModel",value:function(){var e=Object(m.a)(c.a.mark((function e(t){var n,r,a,l,s,i,o,u,p,f,h,v,d,y,m,g,w,b,E,C,G,J,N,R,H,M,W;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,x="waiting for agent to move...",O){e.next=5;break}return e.next=5,j();case 5:if(n=[],_){for(r=0;r<11;r++)for(a=0;a<11;a++)l=A(r,a),n.push("1"===t[l]?1:0);for(s=0;s<11;s++)for(i=0;i<11;i++)o=A(s,i),n.push("0"===t[o]?1:0)}else{for(u=0;u<11;u++)for(p=0;p<11;p++)f=A(p,u),n.push("0"===t[f]?1:0);for(h=0;h<11;h++)for(v=0;v<11;v++)d=A(v,h),n.push("1"===t[d]?1:0)}for(y=[],m=0;m<121;m++)y.push(n[121-m-1]);for(g=0;g<121;g++)y.push(n[242-g-1]);return w=[new k.Tensor(new Float32Array(n),"float32",[1,2,11,11])],b=[new k.Tensor(new Float32Array(y),"float32",[1,2,11,11])],e.next=14,S.run(w);case 14:return E=e.sent,e.next=17,S.run(b);case 17:if(C=e.sent,G=E.values().next().value,J=C.values().next().value,N=[],_)for(R=0;R<11;R++)for(H=0;H<11;H++)M=A(R,H),N.push((G.data[M]+J.data[121-M-1])/2);else N=G.data;for(W=0;W<121;W++)this.props.G.model_output[W]=N[W];return x="",e.abrupt("return",N);case 27:e.prev=27,e.t0=e.catch(0),console.error(e.t0);case 30:case"end":return e.stop()}}),e,this,[[0,27]])})));return function(t){return e.apply(this,arguments)}}()},{key:"cellStyle",value:function(e){return null===this.props.G.cells[e]?"emptyStyle":"0"===this.props.G.cells[e]?"p1Style":"p2Style"}},{key:"cellText",value:function(e,t){return this.props.G.model_display[e]}},{key:"isActive",value:function(e){return!!this.props.isActive&&null===this.props.G.cells[e]}},{key:"render",value:function(){var e=this;if(this.props.ctx.gameover){var t=_?"0":"1";x=this.props.ctx.gameover.winner===t?"Player has won!":"Agent has won!"}for(var n={fill:"rgb(251, 41, 67)",stroke:"black",strokeWidth:.1},r={fill:"rgb(6, 154, 243)",stroke:"black",strokeWidth:.1},a={fill:"white",stroke:"black",strokeWidth:.1},s=[],i=0;i<11;i++)for(var o=function(t){var o=i+11*t;s.push(l.a.createElement(w.Hexagon,{id:o,key:o,onClick:function(){return e.onClick(o)},cellStyle:"p2Style"===e.cellStyle(o)?r:"p1Style"===e.cellStyle(o)?n:a,q:i,r:t,s:-i-t},l.a.createElement(w.Text,null,e.cellText(o,e.state.display_ratings))))},c=0;c<11;c++)o(c);for(var u=121,p=0;p<11;p++){var f=-1;s.push(l.a.createElement(w.Hexagon,{key:u++,cellStyle:n,q:p,r:f,s:-p-f})),s.push(l.a.createElement(w.Hexagon,{key:u++,cellStyle:r,q:f,r:p,s:-p-f})),f=11,s.push(l.a.createElement(w.Hexagon,{key:u++,cellStyle:n,q:p,r:f,s:-p-f})),s.push(l.a.createElement(w.Hexagon,{key:u++,cellStyle:r,q:f,r:p,s:-p-f}))}return l.a.createElement("div",null,l.a.createElement("div",{class:"intro"},"HexHex - A reinforcement deep learning agent by Simon Buchholz, David Harbecke, and Pascal Van Cleeff.",l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/harbecke/hex"},"github.com/harbecke/hex")),l.a.createElement("div",{id:"winner"},x),l.a.createElement("div",{id:"controls"},l.a.createElement(J,{initial:!1,toggle:this.setDisplayRatings})),l.a.createElement("div",{className:"App"},l.a.createElement(w.HexGrid,{width:1e3,height:800,viewBox:"0 -3 30 30"},l.a.createElement(w.Layout,{size:{x:1,y:1},flat:!1,spacing:1},s))))}}]),n}(l.a.Component),H=Object(g.a)({game:N,board:R,debug:!1});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},51:function(e,t,n){e.exports=n(103)},56:function(e,t,n){},69:function(e,t,n){},99:function(e,t){}},[[51,1,2]]]);
//# sourceMappingURL=main.a528e3f5.chunk.js.map