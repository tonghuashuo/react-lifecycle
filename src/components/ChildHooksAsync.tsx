import React, { useState, useEffect } from 'react'
import { ParentProps } from './interface'
import { getDelay } from './utils'

const ChildHooksAsync = (props: ParentProps) => {
  const { parentCounter } = props
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('    Child Effect')

    return () => {
      console.log('    Child Effect Cleanup')
    }
  }, [counter, parentCounter])

  useEffect(() => {
    console.log('    Child Effect (no-deps)')

    const delay = getDelay()
    setTimeout(() => {
      console.log(`    Child Async Request on mount (${delay}ms)`)
    }, delay)

    return () => {
      console.log('    Child Effect Cleanup (no-deps)')
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

  console.log('    Child render')

  return (
    <div className='child'>
      <p>Child: </p>
      <div>
        <button onClick={increase}>+</button>
        <span> {parentCounter} - {counter} </span>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  )
}

export default ChildHooksAsync
