!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.main=t():e.main=t()}(this,function(){return n={},o.m=r=[function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PULLS=t.ISSUES=t.BRANCHES=t.REPOS=t.ORGS=t.accessToken=t.apiUrl=void 0,t.apiUrl="https://api.github.com",t.accessToken=VARS.accessToken,t.ORGS="orgs",t.REPOS="repos",t.BRANCHES="branches",t.ISSUES="issues",t.PULLS="pulls"},,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});
// @description Get initial options
var n=r(0);t.default=function(){return n.accessToken?JSON.stringify({remove:["setup"]}):JSON.stringify({remove:["search","orgs"]})}}],o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=2);function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var r,n});