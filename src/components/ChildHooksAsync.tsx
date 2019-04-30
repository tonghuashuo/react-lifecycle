import React, { useState, useEffect, useLayoutEffect } from 'react'
import { ParentProps } from './interface'
import { getDelay } from './utils'

const ChildHooksAsync = (props: ParentProps) => {
  const { parentCounter } = props
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('    Child (H/A) Effect')

    return () => {
      console.log('    Child (H/A) Effect Cleanup')
    }
  }, [counter, parentCounter])

  useLayoutEffect(() => {
    console.log('    Child (H/A) LayoutEffect')

    return () => {
      console.log('    Child (H/A) LayoutEffect Cleanup')
    }
  }, [counter, parentCounter])

  useEffect(() => {
    console.log('    Child (H/A) Effect (no-deps)')

    const delay = getDelay()
    setTimeout(() => {
      console.log(`    Child (H/A) Request on mount (${delay}ms)`)
    }, delay)

    return () => {
      console.log('    Child (H/A) Effect Cleanup (no-deps)')
    }
  }, [])

  function increase () {
    console.log('================')
    setCounter(c => c + 1)
  }

  function decrease () {
    console.log('================')
    setCounter(c => c - 1)
  }

  console.log('    Child (H/A) render')

  return (
    <div className='child'>
      <div>
        <span>Child (H/A): </span>
        <button onClick={increase}>+</button>
        <span> {parentCounter} - {counter} </span>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  )
}

export default ChildHooksAsync
