import React, {Fragment, useLayoutEffect, useState} from "react";
import BarrageItem from "../BarrageItem";


export type Children = React.ReactNode | React.ReactNode[]

export type UltimateBarrageProps = {
  children: Children
}

const ultimateBarrageStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  background: 'rgba(227,168,168,0.25)',
  overflow: 'hidden'
}

const UltimateBarrage: React.FC<UltimateBarrageProps> = (props) => {
  const {children} = props

  const [localChildren, setLocalChildren] = useState<Children>(children)

  /**
   * 将 children 包装成移动块
   */
  useLayoutEffect(() => {
    if (Array.isArray(children)) {
      const __tempTransformChildren = children.map<Children>(
        (childrenItem, index) => <BarrageItem key={index}>{childrenItem}</BarrageItem>
      )
      setLocalChildren(__tempTransformChildren)
    } else {
      setLocalChildren(<BarrageItem>{children}</BarrageItem>)
    }
  }, [children])


  return (
    <section style={ultimateBarrageStyle}>
      {localChildren}
    </section>
  )
}

UltimateBarrage.displayName = 'ultimate-barrage'

export default UltimateBarrage
