import React from "react";
import {Children} from "../UltimateBarrage";

export type BarrageItemProps = {
  children: Children
}

const barrageItemStyle: React.CSSProperties = {
  display: 'inline-block',
  border: '1px solid red',
  borderRadius: '5px'
}

const BarrageItem: React.FC<BarrageItemProps> = (props) => {

  const {children} = props

  return <section style={barrageItemStyle}>{children}</section>
}


BarrageItem.displayName = "barrage-item"

export default BarrageItem
