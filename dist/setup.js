(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["main"] = factory();
	else
		root["main"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/actions/setup.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/setup.ts":
/*!******************************!*\
  !*** ./src/actions/setup.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar tokenName = \"workerb\";\nopen(\"https://github.com/settings/tokens\");\nvar currentUrl = readURL();\nif (currentUrl.indexOf(\"login\") === -1) {\n    var allTokenNames = readAll(\"span.token-description a\");\n    var workerbToken = \"\";\n    for (var _i = 0, allTokenNames_1 = allTokenNames; _i < allTokenNames_1.length; _i++) {\n        var token = allTokenNames_1[_i];\n        if (token.toLowerCase().indexOf(tokenName) !== -1) {\n            workerbToken = token;\n        }\n    }\n    tokenName = workerbToken\n        ? workerbToken.trim().slice(-1) ===\n            parseInt(workerbToken.trim().slice(-1), 10).toString()\n            ? \"\" + workerbToken.trim().slice(0, -1) + (Number(workerbToken.trim().slice(-1)) + 1)\n            : workerbToken.trim() + \"1\"\n        : tokenName;\n    click(\"Generate new token\", {\n        method: \"by_text\",\n    });\n    type(tokenName, \"#oauth_access_description\", {\n        method: \"by_query_selector\",\n    });\n    click(\".token-scope input\", {\n        method: \"by_query_selector\",\n    });\n    click(\"Generate token\", {\n        method: \"by_text\",\n    });\n    var newAuthToken = read(\"#new-oauth-token\", {\n        method: \"by_query_selector\",\n    });\n    if (!newAuthToken) {\n        notify(\"Access token can't be empty\", \"error\", 3000);\n    }\n    else {\n        setVar(\"github\", [\n            {\n                name: \"accessToken\",\n                value: newAuthToken,\n            },\n        ]);\n        notify(\"Access token added successfully\", \"success\", 3000);\n        reIndex();\n    }\n}\nelse {\n    notify(\"Please login into your github account first\", \"error\", 3000);\n}\n\n\n//# sourceURL=webpack://main/./src/actions/setup.ts?");

/***/ })

/******/ });
});