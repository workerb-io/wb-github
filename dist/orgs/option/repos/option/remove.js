!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.main=t():e.main=t()}(this,function(){return r={},n.m=o={0:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.accessToken=t.apiUrl=void 0,t.apiUrl="https://api.github.com",t.accessToken=VARS.accessToken},1:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.decodeApiResponse=t.getUrl=void 0;var r=o(0);t.getUrl=function(e){return r.apiUrl+e};t.decodeApiResponse=function(e){return e.response?{response:JSON.parse(e.response),status:e.status}:{response:{},status:e.status}}},27:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});
// @description Delete the repository
var r=o(1),t=o(0);if(options.repos){o=httpGet(r.getUrl("/user"),{Authorization:"token "+t.accessToken}),o=r.decodeApiResponse(o).response,t=httpDelete(r.getUrl("/repos/"+o.login+"/"+options.repos.repo_name),null,{Authorization:"token "+t.accessToken});log(t);var n=r.decodeApiResponse(t);switch(n.status){case 204:notify("Repository deleted","success",3e3),reIndex(["repos"]);break;case 403:case 404:notify(n.response.message,"error",3e3)}}else notify("Repository not found","error",3e3)}},n.c=r,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=27);function n(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var o,r});