import React, { useState, useEffect, useLayoutEffect } from 'react'
import { ParentProps } from './interface'
import { getDelay } from './utils'

const ChildHooksSync = (props: ParentProps) => {
  const { parentCounter } = props
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('    Child (H/S) Effect')

    return () => {
      console.log('    Child (H/S) Effect Cleanup')
    }
  }, [counter, parentCounter])

  useLayoutEffect(() => {
    console.log('    Child (H/S) LayoutEffect')

    return () => {
      console.log('    Child (H/S) LayoutEffect Cleanup')
    }
  }, [counter, parentCounter])

  useEffect(() => {
    console.log('    Child (H/S) Effect (no-deps)')

    const delay = getDelay()
    setTimeout(() => {
      console.log(`    Child (H/S) Request on mount (${delay}ms)`)
    }, delay)

    return () => {
      console.log('    Child (H/S) Effect Cleanup (no-deps)')
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

  console.log('    Child (H/S) render')

  return (
    <div className='child'>
      <div>
        <span>Child (H/S): </span>
        <button onClick={increase}>+</button>
        <span> {parentCounter} - {counter} </span>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  )
}

export default ChildHooksSync
