import React, {forwardRef, ReactNode, useEffect, useImperativeHandle, useState} from "react";
import BarrageItem from "../BarrageItem";


export type Children = React.ReactNode | React.ReactNode[]
export type ChildrenList = ReactNode[]

export type UltimateBarrageProps = {
  children?: Children,
  direction?: 'ltr' | 'rtl',
} & React.HTMLAttributes<HTMLDivElement>

export type UltimateBarrageMethod = {
  send: (message: ReactNode) => void,
  clear: () => void
}

let UID = 0

const UltimateBarrage = forwardRef<UltimateBarrageMethod, UltimateBarrageProps>((props, ref) => {
  const {children, direction, className, ...rawSectionProps} = props

  /**
   * @desc 默认配置
   */
  const defaultOption: Partial<UltimateBarrageProps> = {
    direction: 'rtl'
  }

  const [localChildren, setLocalChildren] = useState<ChildrenList>([])

  useEffect(() => {
    if (Array.isArray(children)) {
      const __tempTransformChildren = children.map<Children>(
        (childrenItem, index) => <BarrageItem key={++UID}>{childrenItem}</BarrageItem>
      )
      setLocalChildren(__tempTransformChildren)
    } else if (React.isValidElement(children)) {
      setLocalChildren([<BarrageItem key={++UID}>{children}</BarrageItem>])
    }
  }, [])


  useImperativeHandle(ref, () => ({
    send(message: ReactNode) {
      const transformItem = <BarrageItem key={++UID}>{message}</BarrageItem>
      setLocalChildren([
        ...localChildren,
        transformItem
      ])
    },
    clear: () => {
      setLocalChildren([])
    }
  }))


  return (
    <div className={"ultimate-barrage " + (className ? className : '')} {...rawSectionProps}>
      {localChildren}
    </div>
  )
})

UltimateBarrage.displayName = 'ultimate-barrage'

export default UltimateBarrage
