/**
 * @desc 获取距离顶部位置高度百分比
 * @param proportion 占比容器范围
 * @return number 随机高度
 */
const getRandomTop = (proportion: number): number => {
  if (proportion <= 1 || proportion >= 90) {
    throw new RangeError("占比范围不合法，请选择【1-90】以内的屏幕占比")
  }

  return parseInt(`${Math.random() * proportion}`)
}

/**
 * @desc 获取随机延时时间
 * @return number 延时时间
 */
const getRandomDelay = (): number => {
  return Math.random() * 10 + 8
}

export {
  getRandomTop,
  getRandomDelay
}
