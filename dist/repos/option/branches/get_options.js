!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.main=t():e.main=t()}(this,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.accessToken=t.apiUrl=void 0,t.apiUrl="https://api.github.com",t.accessToken=VARS.accessToken},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.decodeApiResponse=t.getUrl=void 0;var o=n(0);t.getUrl=function(e){return o.apiUrl+e},t.decodeApiResponse=function(e){return e.response?{response:JSON.parse(e.response),status:e.status}:{response:{},status:e.status}}},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=n(0),i=[];if(options.repos){var s=httpGet(o.getUrl("/repos/"+options.repos.owner.login+"/"+options.repos.name+"/branches?per_page=20&_="+(new Date).getTime()),{Authorization:"token "+r.accessToken});i=o.decodeApiResponse(s).response}t.default=function(){return JSON.stringify({add:i.map((function(e){return{name:e.name,description:e.commit.sha,html_url:options.repos.html_url+"/commit/"+e.commit.sha}}))})}}])}));