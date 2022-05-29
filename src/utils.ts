const getRandomTop = (proportion: number): number => {
  if (proportion <= 1 || proportion >= 90) {
    throw new RangeError("占比范围不合法，请选择【1-90】以内的屏幕占比")
  }

  return parseInt(`${Math.random() * 50}`)
}


const getRandomDelay = (): number => {
  return Math.random() * 10
}

export {
  getRandomTop,
  getRandomDelay
}
