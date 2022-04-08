/**
 * @description:时间格式化、1位数时，前面拼接0
 * @param {String|Number} i eg. 1
 * @return {String} '01'
 */
const spliceZero = (i) => {
  if (i.toString().length === 1) {
    i = '0' + i
  } else {
    i = i + ''
  }
  return i
}

/**
 * @description:格式化日期
 * @param {String|Number} date 时间戳或者日期，建议使用时间戳 eg. 1649321280333
 * @param {String} join 年月日连接符 eg. /
 * @return {String} '2022/04/07 16:48:00'
 */
const format = (date, join='-') => {
  const dt = date ? new Date(date) : new Date()
  const year = dt.getFullYear()
  const month = spliceZero(dt.getMonth() + 1)
  const day = spliceZero(dt.getDate())
  const hour = spliceZero(dt.getHours())
  const minute = spliceZero(dt.getMinutes())
  const second = spliceZero(dt.getSeconds())

  return `${year}${join}${month}${join}${day} ${hour}:${minute}:${second}`
}

export default {
  format
}
