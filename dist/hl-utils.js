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
  const spliceZero = (i) => {
    if (i.toString().length === 1) {
      i = '0' + i;
    } else {
      i = i + '';
    }
    return i
  };

  /**
   * @description:时间戳转日期格式
   * @param {Number} date eg. 1649321280333
   * @return {String} '2022-04-07 16:48:00'
   */
  // 获取当前日期yy-mm-dd
  // date 为时间对象
  const format = (date, join='-') => {
    const dt = date || new Date();
    const year = dt.getFullYear();
    const month = spliceZero(dt.getMonth() + 1);
    const day = spliceZero(dt.getDate());
    const hour = spliceZero(dt.getHours());
    const minute = spliceZero(dt.getMinutes());
    const second = spliceZero(dt.getSeconds());
    return `${year}${join}${month}${join}${day} ${hour}:${minute}:${second}`
  };

  var time = {
    format
  };

  var index = {
    time
  };

  return index;

}));
