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
 * @description:日期转时间戳
 * @param {String} date eg. '2022-04-09 17:07:52'
 * @return {Number} 1649495272000
 */
const timestamp = (date) => {
  if (!date) return ''
  const stamp = Date.parse(new Date(date))
  return stamp
}

/**
 * @description:格式化日期到时分秒
 * @param {String|Number} date 时间戳或者日期，建议使用时间戳 eg. 1649321280333
 * @param {String} join 年月日连接符 eg. /
 * @return {String} '2022/04/07 16:48:00'
 */
const format = (date, join = '-') => {
  const dt = date ? new Date(date) : new Date()
  const year = dt.getFullYear()
  const month = spliceZero(dt.getMonth() + 1)
  const day = spliceZero(dt.getDate())
  const hour = spliceZero(dt.getHours())
  const minute = spliceZero(dt.getMinutes())
  const second = spliceZero(dt.getSeconds())

  return `${year}${join}${month}${join}${day} ${hour}:${minute}:${second}`
}

/**
 * @description:格式化日期到天
 * @param {String|Number} date 时间戳或者日期，建议使用时间戳 eg. 1649321280333
 * @param {String} join 年月日连接符 eg. /
 * @return {String} '2022/04/07'
 */
const formatDay = (date, join = '-') => {
  const time = formatBasic(date, join)
  return time.substring(0, 10)
}

/**
 * @description:计算两个时间戳之间的时间差 X天Y小时Z分Q秒
 * @param {Timestamp} start 开始时间戳 eg. 1620206976000
 * @param {Timestamp} end 结束时间戳 eg. 1649495272000
 * @return {String} '338天23小时38分16秒'
 */
const timeCal = (start, end) => {
  if (!start || !end) return 0
  const dateDiff = end - start;//时间差的毫秒数
  const dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数

  const leave1 = dateDiff % (24 * 3600 * 1000)    //计算天数后剩余的毫秒数
  const hours = Math.floor(leave1 / (3600 * 1000))//计算出小时数

  const leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
  const minutes = Math.floor(leave2 / (60 * 1000)) //计算相差分钟数

  const leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
  const seconds = Math.round(leave3 / 1000) //计算相差秒数

  const result = (dayDiff ? dayDiff + '天' : '') + hours + '小时' + minutes + '分' + seconds + '秒'
  return result
}

/**
 * @description:获取几天前日期
 * @param {Number} days 几天前 eg. -7（七天前） 0（当天）
 * @param {String} join 年月日连接符 eg. -
 * @return {String} '2022-04-02'
 */
const daysAgo = (days, join = '-') => {
  let today = new Date()
  const targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * days
  today.setTime(targetday_milliseconds) // 注意，这行是关键代码
  const tYear = today.getFullYear()
  let tMonth = today.getMonth()
  let tDate = today.getDate()
  tMonth = spliceZero(tMonth + 1)
  tDate = spliceZero(tDate)

  return `${tYear}${join}${tMonth}${join}${tDate}`
}

/**
 * @description:总秒数转化为时分秒
 * @param {Number|String} value 总秒数 eg. 4550
 * @return {String} '01时15分50秒'
 */
const formatTimes = (value) => {
  let result = parseInt(value)
  let h = spliceZero(Math.floor(result / 3600))
  let m = spliceZero(Math.floor((result / 60 % 60)))
  let s = spliceZero(Math.floor((result % 60)))
  result = `${h != '00' ? h + '时' : ''}${m != '00' ? m + '分' : ''}${s}秒`
  return result
}

export default {
  timestamp,
  format,
  formatDay,
  timeCal,
  daysAgo,
  formatTimes
}
