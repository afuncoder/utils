/**
 * @description:校验身份证号
 * @param {String} idCard
 * @return {Boolean}
 */
const idCard = idCard => {
    if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(idCard))) {
        return false
    }
    if (idCard.length === 15) {
        const re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/)
        let arrSplit = idCard.match(re)

        // 检查生日日期是否正确
        let dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4])
        let bGoodDay
        bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]))
        if (!bGoodDay) {
            return false
        }
        return true
    }
    if (idCard.length === 18) {
        // 加权因子
        let weight_factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
        // 校验码
        let check_code = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
        let last = idCard[17]// 最后一位
        let seventeen = idCard.substring(0, 17)
        // ISO 7064:1983.MOD 11-2
        // 判断最后一位校验码是否正确
        let arr = seventeen.split('')
        let len = arr.length
        let num = 0
        for (let i = 0; i < len; i++) {
            num = num + arr[i] * weight_factor[i]
        }
        // 获取余数
        let resisue = num % 11
        let last_no = check_code[resisue]
        // 格式的正则 正则思路
        /*
        第一位不可能是0,第二位到第六位可以是0-9,第七位到第十位是年份，所以七八位为19或者20,一位和十二位是月份，这两位是01-12之间的数值,
        十三位和十四位是日期，是从01-31之间的数值,十五，十六，十七都是数字0-9,十八位可能是数字0-9，也可能是X
        */
        let idcard_patter = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/
        // 判断格式是否正确
        let format = idcard_patter.test(idCard)
        // 返回验证结果，校验码和格式同时正确才算是合法的身份证号码
        return !!(last === last_no && format)
    }
}

export default {
    idCard
}