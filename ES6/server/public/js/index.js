/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	// 正则扩展
	{
	  var regex = new RegExp('xyz', 'i');
	  var regex2 = new RegExp(/xyz/i);

	  console.log(regex.test('xyz123'), regex2.test('xyz123'));

	  // 第二个修饰符会覆盖第一个中的修饰符
	  var regex3 = new RegExp(/xyz/ig, 'i');
	  console.log(regex3.flags);
	}

	{
	  var s = 'qqq_qqq_q';
	  var a1 = /q+/g;
	  var a2 = new RegExp('q+', 'y');
	  // 都是全局匹配 但是g是从上次匹配的位置开始匹配 中间匹配上也算 y 粘连模式是匹配上的下一个紧贴着的下一个
	  console.log('one', a1.exec(s), a2.exec(s));
	  console.log('two', a1.exec(s), a2.exec(s));
	  // 检测是否开启粘连模式
	  console.log(a1.sticky, a2.sticky);
	}
	// 第一个当成2个字符，u会当成一个字符
	{
	  console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'));
	  console.log('u-2', /^(?:\uD83D(?![\uDC00-\uDFFF]))/.test('\uD83D\uDC2A'));
	  // 中间放的是编码 要加u才能识别
	  console.log(/\u{61}/.test('a'));
	  console.log(/a/.test('a'));
	}

/***/ })
/******/ ]);