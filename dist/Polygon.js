!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.Polygon=e(require("react")):t.Polygon=e(t.react)}(window,function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){"use strict";var r=n(0);function o(){}t.exports=function(){function t(t,e,n,o,i,s){if(s!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=o,n.PropTypes=n,n}},function(t,e,n){t.exports=n(1)()},function(e,n){e.exports=t},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(3),i=a(o),s=a(n(2));function a(t){return t&&t.__esModule?t:{default:t}}var u=Math.sqrt(2),p=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n.componentWillReceiveProps=function(t){for(var e=n.caluatePoints(t.n||n.props.n,t.size||n.props.size,t.ratios||n.props.ratios),r=!1,o=0;o<e.length;o++)if(n.state.oldPoints[o][0]!==e[o][0]||n.state.oldPoints[o][1]!==e[o][1]){r=!0;break}if(r){var i=n.state.currentPoints.map(function(t,r){return t.map(function(t,o){return(e[r][o]-t)/n.props.duration})});n.props.isAnimating?n.setState({currentTicks:0,preTimestamp:-1,newPoints:e,oldPoints:n.state.currentPoints,steps:i},function(t){requestAnimationFrame(n.animatePolygon)}):n.setState({oldPoints:e,currentPoints:e})}},n.animatePolygon=function(t){if(n.state.currentTicks<n.props.duration){var e=-1===n.state.preTimestamp?0:n.state.currentTicks-n.state.preTimestamp+t,r=Math.min(1,e/n.props.duration),o=n.state.newPoints.map(function(t,e){return t.map(function(t,o){return r*t+(1-r)*n.state.oldPoints[e][o]})});n.setState({preTimestamp:t,currentTicks:e,currentPoints:o},function(t){requestAnimationFrame(n.animatePolygon)})}else n.setState({oldPoints:n.state.newPoints,currentPoints:n.state.newPoints})};var r=n.caluatePoints(n.props.n,n.props.size,n.props.ratios);return n.state={newPoints:r,oldPoints:r,currentPoints:r,steps:[],currentTicks:0,preTimestamp:-1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.Component),r(e,[{key:"toRadian",value:function(t){return t/180*Math.PI}},{key:"caluatePoints",value:function(t,e,n){Array.apply(null,Array(Math.max(t-n.length,0))).forEach(function(t){n.push(1)});for(var r=e/2,o=e/2,i=360/t,s=[],a=0;a<t;a++){var p=i*a,c=this.toRadian(p),f=Math.cos(c),l=c/2,d=Math.sin(l),m=Math.cos(l),y=u*o*Math.sqrt(1-f);s.push([(r+y*m)*n[a]+o*(1-n[a]),(0+y*d)*n[a]+o*(1-n[a])])}return s.map(function(t){return t.map(function(t){return Number(t.toPrecision(14))})})}},{key:"render",value:function(){var t=this;return i.default.createElement("svg",{width:this.props.size,height:this.props.size,className:this.props.className},i.default.createElement("polygon",{className:this.props.classPrefix+"polygon"||this.props.classPrefix+"svg",points:this.state.currentPoints,fill:this.props.fill}),this.props.renderPoint?this.state.currentPoints.map(function(e,n){return i.default.createElement("g",{className:t.props.classPrefix+"point",key:n},t.props.renderPoint(e,n))}):"")}}]),e}();e.default=p,p.defaultProps={n:3,size:50,fill:"#ad893e",ratios:[1,1,1],isAnimating:!0,duration:1e3,classPrefix:"r--poly-",renderPoint:null},p.propTypes={n:s.default.number,size:s.default.number,fill:s.default.string,ratios:s.default.arrayOf(s.default.number),isAnimating:s.default.bool,duration:s.default.number,renderPoint:s.default.func}}])});