import React, {useLayoutEffect, useState} from "react";
import BarrageItem from "../BarrageItem";


export type Children = React.ReactNode | React.ReactNode[]

export type UltimateBarrageProps = {
  children: Children,
  direction?: 'ltr' | 'rtl',
} & React.HTMLAttributes<HTMLDivElement>

const UltimateBarrage: React.FC<UltimateBarrageProps> = (props) => {
  const {children, direction, className, ...rawSectionProps} = props
  
  /**
   * @desc 默认配置
   */
  const defaultOption: Partial<UltimateBarrageProps> = {
    direction: 'rtl'
  }

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
    <section className={"ultimate-barrage " + (className ? className : '')} {...rawSectionProps}>
      {localChildren}
    </section>
  )
}

UltimateBarrage.displayName = 'ultimate-barrage'

export default UltimateBarrage
