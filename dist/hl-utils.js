
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.hlUtils = factory());
})(this, (function () { 'use strict';

  /**
   * @description:时间格式化、1位数时，前面拼接0
   * @param {String|Number} i eg. 1
   * @return {String} '01'
   */
  var spliceZero = function spliceZero(i) {
    if (i.toString().length === 1) {
      i = '0' + i;
    } else {
      i = i + '';
    }

    return i;
  };
  /**
   * @description:格式化日期
   * @param {String|Number} date 时间戳或者日期，建议使用时间戳 eg. 1649321280333
   * @param {String} join 年月日连接符 eg. /
   * @return {String} '2022/04/07 16:48:00'
   */


  var format = function format(date) {
    var join = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
    var dt = date ? new Date(date) : new Date();
    var year = dt.getFullYear();
    var month = spliceZero(dt.getMonth() + 1);
    var day = spliceZero(dt.getDate());
    var hour = spliceZero(dt.getHours());
    var minute = spliceZero(dt.getMinutes());
    var second = spliceZero(dt.getSeconds());
    return "".concat(year).concat(join).concat(month).concat(join).concat(day, " ").concat(hour, ":").concat(minute, ":").concat(second);
  };

  var time = {
    format: format
  };

  var index = {
    time: time
  };

  return index;

}));
