/**
 * @description:比较两个对象是否相同
 * @param {Object} o1 对象1 eg. {name:1,age:1}
 * @param {Object} o2 对象2 eg. {name:1,age:2}
 * @return {Boolean} false
 */
const isObjEqual = (o1, o2) => {
    const props1 = Object.getOwnPropertyNames(o1)
    const props2 = Object.getOwnPropertyNames(o2)
    if (props1.length != props2.length) {
        return false
    }
    for (let i = 0; i < props1.length; i++) {
        let propName = props1[i]
        if (o1[propName] !== o2[propName]) {
            return false
        }
    }
    return true
}

/**
 * @description:比较两个对象是否相同
 * @param {Object} origin 被拷贝对象（原对象） eg. { name: 'Nick', date: [new Date(1621261792177)], callback: function() { console.log('shadiao') }, link: undefined, name1: NaN, name2: Infinity, name3: -Infinity, reg:/[^\x00-\xff]/igm }
 * @return {Object}
 */
function deepClone(origin) {
    if (origin === null) return null
    if (typeof origin !== 'object') return origin;
    if (origin instanceof Date) return new Date(origin);
    if (origin instanceof RegExp) return new RegExp(obj);
    var _target = origin.constructor() //保持继承链
    // 循环 origin
    for (var key in origin) {
        //不遍历其原型链上的属性
        if (origin.hasOwnProperty(key)) {
            // 如果 origin[key] 是一个引用类型的值，则进入递归逻辑
            if (typeof origin[key] === 'object' && origin[key] !== null) {
                // 进入递归，此时原始值就是 origin[key]，被赋值的对象是 _target[key]
                // 注意，上述第一次声明的 _target 将会贯穿整个递归，后续所有的赋值，都将会被 return 到 _target
                _target[key] = deepClone(origin[key])
            } else {
                // 如果不是对象或数组，则进入此逻辑，直接赋值给 _target[key]
                _target[key] = origin[key]
            }
        }
    }
    // for...in 循环结束后，return 当前上下文的 _target 值
    return _target
}

/**
 * @description:判断对象是否包含某属性
 * @param {Object} obj 对象 eg. {name:1,age:1}
 * @param {Object} key 属性名 eg. age
 * @return {Boolean} true
 */
const hasKey = (obj, key) => {
    return key in obj
}

/**
 * @description:获取url参数
 * @param {String} url 网址 eg. https://baidu.com?s=1&f=2
 * @return {Object} {s: '1', f: '2'}
 */
const queryURLParams = (url) => {
    let result = {}
    const reg1 = /([^?=&#]+)=([^?=&#]+)/g
    const reg2 = /#([^?=&#]+)/g
    url.replace(reg1, (n, x, y) => result[x] = y)
    url.replace(reg2, (n, x) => result['HASH'] = x)
    return result
}

export default {
    isObjEqual,
    deepClone,
    hasKey,
    queryURLParams
}