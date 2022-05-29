import React from "react";
import {Children} from "../UltimateBarrage";
import {getRandomDelay, getRandomTop} from "../utils";

export type BarrageItemProps = {
  children: Children
}


const BarrageItem: React.FC<BarrageItemProps> = (props) => {

  const {children} = props

  const barrageItemStyle: React.CSSProperties = {
    top: `${getRandomTop(60)}%`,
    animationDelay: `${getRandomDelay()}s`
  }


  return <section className="barrage-item" style={barrageItemStyle}>{children}</section>
}


BarrageItem.displayName = "barrage-item"

export default BarrageItem
