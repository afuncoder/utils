/**
 * @description:两数字相加 保持精度
 * @param {Number|String} arg1 数字1 eg. 0.1
 * @param {Number|String} arg2 数字2 eg. 0.2
 * @return {Number} 0.3
 */
const addition = (arg1, arg2) => {
    let r1, r2, m
    try { r1 = arg1.toString().split('.')[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split('.')[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
}

/**
 * @description:两数字相减 保持精度
 * @param {Number|String} arg1 数字1 eg. 0.3
 * @param {Number|String} arg2 数字2 eg. 0.1
 * @return {Number} 0.2
 */
const subtraction = (arg1, arg2) => {
    let r1, r2, m, n
    try { r1 = arg1.toString().split('.')[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split('.')[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    n = (r1 >= r2) ? r1 : r2
    return Number(((arg1 * m - arg2 * m) / m).toFixed(n))
}

/**
 * @description:两数字相乘 保持精度
 * @param {Number|String} arg1 数字1 eg. 0.1
 * @param {Number|String} arg2 数字2 eg. 0.1
 * @return {Number} 0.1
 */
const multiplication = (arg1, arg2) => {
    let m = 0
    const s1 = arg1.toString()
    const s2 = arg2.toString()
    try { m += s1.split('.')[1].length } catch (e) { }
    try { m += s2.split('.')[1].length } catch (e) { }
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
}

/**
 * @description:两数字相除 保持精度
 * @param {Number|String} arg1 数字1 eg. 0.3
 * @param {Number|String} arg2 数字2 eg. 0.1
 * @return {Number} 3
 */
const division = (arg1, arg2) => {
    let t1 = 0
    let t2 = 0
    let r1
    let r2
    try { t1 = arg1.toString().split('.')[1].length } catch (e) { }
    try { t2 = arg2.toString().split('.')[1].length } catch (e) { }
    r1 = Number(arg1.toString().replace('.', ''))
    r2 = Number(arg2.toString().replace('.', ''))
    let intDiv = r1 / r2
    let pow = Math.pow(10, t2 - t1)
    return multiplication(intDiv, pow) // 这里用上面定义好的乘法运算
}

/**
 * @description:两数字相除 保持精度
 * @param {Number|String} arg1 数字1 eg. 0.3
 * @param {Number|String} arg2 数字2 eg. 0.1
 * @param {String} symbol 运算符 eg. /
 * @return {Number} 3
 */
const calculate = (arg1, arg2, symbol) => {
    switch (symbol) {
        case '+':
            addition(arg1, arg2)
            break
        case '-':
            subtraction(arg1, arg2)
            break
        case '*':
            multiplication(arg1, arg2)
            break
        case '/':
            division(arg1, arg2)
            break
        default:
            addition(arg1, arg2)
            break
    }
}

export default {
    addition,
    subtraction,
    multiplication,
    division,
    calculate
}