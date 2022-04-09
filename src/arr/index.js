/**
 * @description:对象数组1 依据name属性 去除对象数组2
 * @param {Array} array1 数组1 eg. [{name:1,age:1}, {name:2,age:2}, {name:3,age:3}]
 * @param {Array} array2 数组2 eg. [{name:1,age:1}]
 * @param {String} name 属性名 eg. age
 * @return {Array} [{name:2,age:2}, {name:3,age:3}]
 */
const twoArrObjDeduplication = (array1, array2, name) => {
    const a = array1
    const b = array2
    const c = a.filter(x => b.every(y => y[name] !== x[name]))
    return c
}

/**
 * @description:取两数组对象中相同值
 * @param {Array} array1 数组1 eg. [{name:1,age:1}, {name:2,age:2}, {name:3,age:3}]
 * @param {Array} array2 数组2 eg. [{name:1,age:1}]
 * @param {String} name 属性名 eg. age
 * @return {Array} [{name:1,age:1}]
 */
const twoArrObjGetSame = (array1, array2, name) => {
    const result = []
    for (let i = 0; i < array2.length; i++) {
        const obj = array2[i]
        const num = obj[name]
        let isExist = false
        for (let j = 0; j < array1.length; j++) {
            const aj = array1[j]
            const n = aj[name]
            if (n === num) {
                isExist = true
                break
            }
        }
        if (isExist) {
            result.push(obj)
        }
    }
    return result
}

/**
 * @description:依据name属性单个数组对象去重
 * @param {Array} arr 数组1 eg. [{name:1,age:1}, {name:2,age:1}, {name:3,age:3}]
 * @param {String} name 去重依据属性 eg. age
 * @return {Array} [{name:1,age:1}, {name:3,age:3}]
 */
const arrObjDeduplication = (arr, name) => {
    let map = new Map()
    for (let item of arr) {
        if (!map.has(item[name])) {
            map.set(item[name], item)
        }
    }
    return [...map.values()]
}

export default {
    twoArrObjDeduplication,
    twoArrObjGetSame,
    arrObjDeduplication
}