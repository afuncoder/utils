/**
 * @description:防抖 eg. getCouponMethod: debounce(function() {}, 1000)
 * @param {Function} fn 需要防抖的函数 eg. function() {}
 * @param {Number} delay 毫秒，防抖期限值 eg. 1000
 * @return {undefined}
 */
const debounce = (fn, delay) => {
    let timer = null //借助闭包
    return function () {
        let that = this
        let args = arguments
        if (timer) {
            clearTimeout(timer) //进入该分支语句，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时
        }
        timer = setTimeout(function () {
            fn.apply(that, args)
        }, delay) // 进入该分支说明当前并没有在计时，那么就开始一个计时
    }
}

/**
 * @description:节流 eg. getCouponMethod: throttle(function() {}, 1000)
 * @param {Function} fn 需要节流的函数 eg. function() {}
 * @param {Number} delay 毫秒，节流期限值 eg. 1000
 * @return {undefined}
 */
const throttle = (fn, delay) => {
    let valid = true
    return function () {
        let that = this
        let args = arguments
        if (!valid) {
            //休息时间 暂不接客
            return false
        }
        // 工作时间，执行函数并且在间隔期内把状态位设为无效
        valid = false
        setTimeout(() => {
            fn.apply(that, args)
            valid = true;
        }, delay)
    }
}

export default {
    debounce,
    throttle
}