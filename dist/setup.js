!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.main=t():e.main=t()}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=26)}({26:function(e,t,r){"use strict";var n="workerB";if(open("https://github.com/settings/tokens"),-1===readURL().indexOf("login")){for(var o=[],i=0,c=readAll("span.token-description a");i<c.length;i++){var u=c[i];-1!==u.toLowerCase().indexOf(n)&&o.push(u.trim())}var s=o.length?o.sort()[o.length-1]:"";n=s?s.trim().slice(-1)===parseInt(s.trim().slice(-1),10).toString()?""+s.trim().slice(0,-1)+(Number(s.trim().slice(-1))+1):s.trim()+"1":n,click("Generate new token",{method:"by_text"}),type(n,"#oauth_access_description",{method:"by_query_selector"}),click(".token-scope input",{method:"by_query_selector"}),click("Generate token",{method:"by_text"});var l=read("#new-oauth-token",{method:"by_query_selector"});l?(setVar("github",[{name:"accessToken",value:l}]),notify("Access token added successfully","success",3e3),reIndex()):notify("Access token can't be empty","error",3e3)}else notify("Please login into your github account first","error",3e3)}})}));