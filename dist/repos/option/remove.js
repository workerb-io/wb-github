!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.main=t():e.main=t()}(this,(function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=28)}({0:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.accessToken=t.apiUrl=void 0,t.apiUrl="https://api.github.com",t.accessToken=VARS.accessToken},1:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.decodeApiResponse=t.getUrl=void 0;var n=o(0);t.getUrl=function(e){return n.apiUrl+e},t.decodeApiResponse=function(e){return e.response?{response:JSON.parse(e.response),status:e.status}:{response:{},status:e.status}}},28:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(1),r=o(0);if(options.repos){var s=httpGet(n.getUrl("/user"),{Authorization:"token "+r.accessToken}),i=n.decodeApiResponse(s).response,u=httpDelete(n.getUrl("/repos/"+i.login+"/"+options.repos.name),null,{Authorization:"token "+r.accessToken}),c=n.decodeApiResponse(u);switch(c.status){case 204:notify("Repository deleted","success",3e3),reIndex(["github","repos"]);break;case 403:case 404:notify(c.response.message,"error",3e3)}}else notify("Repository not found","error",3e3)}})}));