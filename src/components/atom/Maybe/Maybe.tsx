//RENDER COMPONENT BY CONDITIONS

import React from 'react'

interface RenderProps {
  if?: boolean | null
  okay?: React.ReactNode
  else?: React.ReactNode

  test?: boolean | null
  truthy?: React.ReactNode
  falsy?: React.ReactNode

  fallback?: React.ReactNode
  children?: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function hasOwn(obj: Record<string, any>, prop: string): boolean {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}

/**
 * @param props RenderProps
 * @returns React.ReactNode or null
 */
export default function Maybe(props: RenderProps) {
  if (hasOwn(props, 'test') || hasOwn(props, 'if')) {
    if (
      hasOwn(props, 'okay') === false &&
      hasOwn(props, 'else') === false &&
      hasOwn(props, 'truthy') === false &&
      hasOwn(props, 'falsy') === false &&
      hasOwn(props, 'fallback') === false
    ) {
      const condition = (() => (props.if ? props.if : (props.test && props.test) || false))()
      return <>{condition ? props.children : null}</>
    }
  }

  if (hasOwn(props, 'fallback')) {
    const condition = (() => (props.if ? props.if : (props.test && props.test) || false))()
    return <>{condition ? props.children : props.fallback}</>
  }
  if (hasOwn(props, 'test')) {
    if ((props.test && props.truthy) || (props.test === false && props.falsy)) {
      return <>{props.test ? props.truthy : props.falsy}</>
    }
  }
  if (hasOwn(props, 'if')) {
    if ((props.if && props.okay) || (props.if === false && props.else)) {
      return <>{props.if ? props.okay : props.else}</>
    }
  }
  return null
}
