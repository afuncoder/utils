
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
   * @description:日期转时间戳
   * @param {String} date eg. '2022-04-09 17:07:52'
   * @return {Number} 1649495272000
   */


  var timestamp = function timestamp(date) {
    if (!date) return '';
    var stamp = Date.parse(new Date(date));
    return stamp;
  };
  /**
   * @description:格式化日期到时分秒
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
  /**
   * @description:格式化日期到天
   * @param {String|Number} date 时间戳或者日期，建议使用时间戳 eg. 1649321280333
   * @param {String} join 年月日连接符 eg. /
   * @return {String} '2022/04/07'
   */


  var formatDay = function formatDay(date) {
    var join = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
    var time = formatBasic(date, join);
    return time.substring(0, 10);
  };
  /**
   * @description:计算两个时间戳之间的时间差 X天Y小时Z分Q秒
   * @param {Timestamp} start 开始时间戳 eg. 1620206976000
   * @param {Timestamp} end 结束时间戳 eg. 1649495272000
   * @return {String} '338天23小时38分16秒'
   */


  var timeCal = function timeCal(start, end) {
    if (!start || !end) return 0;
    var dateDiff = end - start; //时间差的毫秒数

    var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); //计算出相差天数

    var leave1 = dateDiff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数

    var hours = Math.floor(leave1 / (3600 * 1000)); //计算出小时数

    var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数

    var minutes = Math.floor(leave2 / (60 * 1000)); //计算相差分钟数

    var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数

    var seconds = Math.round(leave3 / 1000); //计算相差秒数

    var result = (dayDiff ? dayDiff + '天' : '') + hours + '小时' + minutes + '分' + seconds + '秒';
    return result;
  };
  /**
   * @description:获取几天前日期
   * @param {Number} days 几天前 eg. -7（七天前） 0（当天）
   * @param {String} join 年月日连接符 eg. -
   * @return {String} '2022-04-02'
   */


  var daysAgo = function daysAgo(days) {
    var join = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
    var today = new Date();
    var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * days;
    today.setTime(targetday_milliseconds); // 注意，这行是关键代码

    var tYear = today.getFullYear();
    var tMonth = today.getMonth();
    var tDate = today.getDate();
    tMonth = spliceZero(tMonth + 1);
    tDate = spliceZero(tDate);
    return "".concat(tYear).concat(join).concat(tMonth).concat(join).concat(tDate);
  };
  /**
   * @description:总秒数转化为时分秒
   * @param {Number|String} value 总秒数 eg. 4550
   * @return {String} '01时15分50秒'
   */


  var formatTimes = function formatTimes(value) {
    var result = parseInt(value);
    var h = spliceZero(Math.floor(result / 3600));
    var m = spliceZero(Math.floor(result / 60 % 60));
    var s = spliceZero(Math.floor(result % 60));
    result = "".concat(h != '00' ? h + '时' : '').concat(m != '00' ? m + '分' : '').concat(s, "\u79D2");
    return result;
  };

  var time = {
    timestamp: timestamp,
    format: format,
    formatDay: formatDay,
    timeCal: timeCal,
    daysAgo: daysAgo,
    formatTimes: formatTimes
  };

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /**
   * @description:对象数组1 依据name属性 去除对象数组2
   * @param {Array} array1 数组1 eg. [{name:1,age:1}, {name:2,age:2}, {name:3,age:3}]
   * @param {Array} array2 数组2 eg. [{name:1,age:1}]
   * @param {String} name 属性名 eg. age
   * @return {Array} [{name:2,age:2}, {name:3,age:3}]
   */
  var twoArrObjDeduplication = function twoArrObjDeduplication(array1, array2, name) {
    var a = array1;
    var b = array2;
    var c = a.filter(function (x) {
      return b.every(function (y) {
        return y[name] !== x[name];
      });
    });
    return c;
  };
  /**
   * @description:取两数组对象中相同值
   * @param {Array} array1 数组1 eg. [{name:1,age:1}, {name:2,age:2}, {name:3,age:3}]
   * @param {Array} array2 数组2 eg. [{name:1,age:1}]
   * @param {String} name 属性名 eg. age
   * @return {Array} [{name:1,age:1}]
   */


  var twoArrObjGetSame = function twoArrObjGetSame(array1, array2, name) {
    var result = [];

    for (var i = 0; i < array2.length; i++) {
      var obj = array2[i];
      var num = obj[name];
      var isExist = false;

      for (var j = 0; j < array1.length; j++) {
        var aj = array1[j];
        var n = aj[name];

        if (n === num) {
          isExist = true;
          break;
        }
      }

      if (isExist) {
        result.push(obj);
      }
    }

    return result;
  };
  /**
   * @description:依据name属性单个数组对象去重
   * @param {Array} arr 数组1 eg. [{name:1,age:1}, {name:2,age:1}, {name:3,age:3}]
   * @param {String} name 去重依据属性 eg. age
   * @return {Array} [{name:1,age:1}, {name:3,age:3}]
   */


  var arrObjDeduplication = function arrObjDeduplication(arr, name) {
    var map = new Map();

    var _iterator = _createForOfIteratorHelper(arr),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        if (!map.has(item[name])) {
          map.set(item[name], item);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return _toConsumableArray(map.values());
  };

  var arr = {
    twoArrObjDeduplication: twoArrObjDeduplication,
    twoArrObjGetSame: twoArrObjGetSame,
    arrObjDeduplication: arrObjDeduplication
  };

  /**
   * @description:比较两个对象是否相同
   * @param {Object} o1 对象1 eg. {name:1,age:1}
   * @param {Object} o2 对象2 eg. {name:1,age:2}
   * @return {Boolean} false
   */
  var isObjEqual = function isObjEqual(o1, o2) {
    var props1 = Object.getOwnPropertyNames(o1);
    var props2 = Object.getOwnPropertyNames(o2);

    if (props1.length != props2.length) {
      return false;
    }

    for (var i = 0; i < props1.length; i++) {
      var propName = props1[i];

      if (o1[propName] !== o2[propName]) {
        return false;
      }
    }

    return true;
  };
  /**
   * @description:比较两个对象是否相同
   * @param {Object} origin 被拷贝对象（原对象） eg. { name: 'Nick', date: [new Date(1621261792177)], callback: function() { console.log('shadiao') }, link: undefined, name1: NaN, name2: Infinity, name3: -Infinity, reg:/[^\x00-\xff]/igm }
   * @return {Object}
   */


  function deepClone(origin) {
    if (origin === null) return null;
    if (_typeof(origin) !== 'object') return origin;
    if (origin instanceof Date) return new Date(origin);
    if (origin instanceof RegExp) return new RegExp(obj);

    var _target = origin.constructor(); //保持继承链
    // 循环 origin


    for (var key in origin) {
      //不遍历其原型链上的属性
      if (origin.hasOwnProperty(key)) {
        // 如果 origin[key] 是一个引用类型的值，则进入递归逻辑
        if (_typeof(origin[key]) === 'object' && origin[key] !== null) {
          // 进入递归，此时原始值就是 origin[key]，被赋值的对象是 _target[key]
          // 注意，上述第一次声明的 _target 将会贯穿整个递归，后续所有的赋值，都将会被 return 到 _target
          _target[key] = deepClone(origin[key]);
        } else {
          // 如果不是对象或数组，则进入此逻辑，直接赋值给 _target[key]
          _target[key] = origin[key];
        }
      }
    } // for...in 循环结束后，return 当前上下文的 _target 值


    return _target;
  }
  /**
   * @description:判断对象是否包含某属性
   * @param {Object} obj 对象 eg. {name:1,age:1}
   * @param {Object} key 属性名 eg. age
   * @return {Boolean} true
   */


  var hasKey = function hasKey(obj, key) {
    return key in obj;
  };
  /**
   * @description:获取url参数
   * @param {String} url 网址 eg. https://baidu.com?s=1&f=2
   * @return {Object} {s: '1', f: '2'}
   */


  var queryURLParams = function queryURLParams(url) {
    var result = {};
    var reg1 = /([^?=&#]+)=([^?=&#]+)/g;
    var reg2 = /#([^?=&#]+)/g;
    url.replace(reg1, function (n, x, y) {
      return result[x] = y;
    });
    url.replace(reg2, function (n, x) {
      return result['HASH'] = x;
    });
    return result;
  };

  var obj$1 = {
    isObjEqual: isObjEqual,
    deepClone: deepClone,
    hasKey: hasKey,
    queryURLParams: queryURLParams
  };

  /**
   * @description:两数字相加 保持精度
   * @param {Number|String} arg1 数字1 eg. 0.1
   * @param {Number|String} arg2 数字2 eg. 0.2
   * @return {Number} 0.3
   */
  var addition = function addition(arg1, arg2) {
    var r1, r2, m;

    try {
      r1 = arg1.toString().split('.')[1].length;
    } catch (e) {
      r1 = 0;
    }

    try {
      r2 = arg2.toString().split('.')[1].length;
    } catch (e) {
      r2 = 0;
    }

    m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m;
  };
  /**
   * @description:两数字相减 保持精度
   * @param {Number|String} arg1 数字1 eg. 0.3
   * @param {Number|String} arg2 数字2 eg. 0.1
   * @return {Number} 0.2
   */


  var subtraction = function subtraction(arg1, arg2) {
    var r1, r2, m, n;

    try {
      r1 = arg1.toString().split('.')[1].length;
    } catch (e) {
      r1 = 0;
    }

    try {
      r2 = arg2.toString().split('.')[1].length;
    } catch (e) {
      r2 = 0;
    }

    m = Math.pow(10, Math.max(r1, r2));
    n = r1 >= r2 ? r1 : r2;
    return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
  };
  /**
   * @description:两数字相乘 保持精度
   * @param {Number|String} arg1 数字1 eg. 0.1
   * @param {Number|String} arg2 数字2 eg. 0.1
   * @return {Number} 0.1
   */


  var multiplication = function multiplication(arg1, arg2) {
    var m = 0;
    var s1 = arg1.toString();
    var s2 = arg2.toString();

    try {
      m += s1.split('.')[1].length;
    } catch (e) {}

    try {
      m += s2.split('.')[1].length;
    } catch (e) {}

    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
  };
  /**
   * @description:两数字相除 保持精度
   * @param {Number|String} arg1 数字1 eg. 0.3
   * @param {Number|String} arg2 数字2 eg. 0.1
   * @return {Number} 3
   */


  var division = function division(arg1, arg2) {
    var t1 = 0;
    var t2 = 0;
    var r1;
    var r2;

    try {
      t1 = arg1.toString().split('.')[1].length;
    } catch (e) {}

    try {
      t2 = arg2.toString().split('.')[1].length;
    } catch (e) {}

    r1 = Number(arg1.toString().replace('.', ''));
    r2 = Number(arg2.toString().replace('.', ''));
    var intDiv = r1 / r2;
    var pow = Math.pow(10, t2 - t1);
    return multiplication(intDiv, pow); // 这里用上面定义好的乘法运算
  };
  /**
   * @description:两数字相除 保持精度
   * @param {Number|String} arg1 数字1 eg. 0.3
   * @param {Number|String} arg2 数字2 eg. 0.1
   * @param {String} symbol 运算符 eg. /
   * @return {Number} 3
   */


  var calculate = function calculate(arg1, arg2, symbol) {
    switch (symbol) {
      case '+':
        addition(arg1, arg2);
        break;

      case '-':
        subtraction(arg1, arg2);
        break;

      case '*':
        multiplication(arg1, arg2);
        break;

      case '/':
        division(arg1, arg2);
        break;

      default:
        addition(arg1, arg2);
        break;
    }
  };

  var cal = {
    addition: addition,
    subtraction: subtraction,
    multiplication: multiplication,
    division: division,
    calculate: calculate
  };

  /**
   * @description:防抖 eg. getCouponMethod: debounce(function() {}, 1000)
   * @param {Function} fn 需要防抖的函数 eg. function() {}
   * @param {Number} delay 毫秒，防抖期限值 eg. 1000
   * @return {undefined}
   */
  var debounce = function debounce(fn, delay) {
    var timer = null; //借助闭包

    return function () {
      var that = this;
      var args = arguments;

      if (timer) {
        clearTimeout(timer); //进入该分支语句，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时
      }

      timer = setTimeout(function () {
        fn.apply(that, args);
      }, delay); // 进入该分支说明当前并没有在计时，那么就开始一个计时
    };
  };
  /**
   * @description:节流 eg. getCouponMethod: throttle(function() {}, 1000)
   * @param {Function} fn 需要节流的函数 eg. function() {}
   * @param {Number} delay 毫秒，节流期限值 eg. 1000
   * @return {undefined}
   */


  var throttle = function throttle(fn, delay) {
    var valid = true;
    return function () {
      var that = this;
      var args = arguments;

      if (!valid) {
        //休息时间 暂不接客
        return false;
      } // 工作时间，执行函数并且在间隔期内把状态位设为无效


      valid = false;
      setTimeout(function () {
        fn.apply(that, args);
        valid = true;
      }, delay);
    };
  };

  var optimization = {
    debounce: debounce,
    throttle: throttle
  };

  /**
   * @description:校验身份证号
   * @param {String} idCard
   * @return {Boolean}
   */
  var idCard = function idCard(_idCard) {
    if (!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(_idCard)) {
      return false;
    }

    if (_idCard.length === 15) {
      var re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);

      var arrSplit = _idCard.match(re); // 检查生日日期是否正确


      var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
      var bGoodDay;
      bGoodDay = dtmBirth.getYear() == Number(arrSplit[2]) && dtmBirth.getMonth() + 1 == Number(arrSplit[3]) && dtmBirth.getDate() == Number(arrSplit[4]);

      if (!bGoodDay) {
        return false;
      }

      return true;
    }

    if (_idCard.length === 18) {
      // 加权因子
      var weight_factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; // 校验码

      var check_code = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
      var last = _idCard[17]; // 最后一位

      var seventeen = _idCard.substring(0, 17); // ISO 7064:1983.MOD 11-2
      // 判断最后一位校验码是否正确


      var arr = seventeen.split('');
      var len = arr.length;
      var num = 0;

      for (var i = 0; i < len; i++) {
        num = num + arr[i] * weight_factor[i];
      } // 获取余数


      var resisue = num % 11;
      var last_no = check_code[resisue]; // 格式的正则 正则思路

      /*
      第一位不可能是0,第二位到第六位可以是0-9,第七位到第十位是年份，所以七八位为19或者20,一位和十二位是月份，这两位是01-12之间的数值,
      十三位和十四位是日期，是从01-31之间的数值,十五，十六，十七都是数字0-9,十八位可能是数字0-9，也可能是X
      */

      var idcard_patter = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/; // 判断格式是否正确

      var format = idcard_patter.test(_idCard); // 返回验证结果，校验码和格式同时正确才算是合法的身份证号码

      return !!(last === last_no && format);
    }
  };

  var reg = {
    idCard: idCard
  };

  var email_reg = "lsdjeloqewoqej";      
  var http_reg = "(http|https)//:w+/";

  var index = {
    time: time,
    arr: arr,
    obj: obj$1,
    cal: cal,
    optimization: optimization,
    reg: reg
  };

  return index;

}));
