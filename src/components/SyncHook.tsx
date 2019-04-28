import React, { useState, useEffect } from 'react'
import { ParentProps } from './interface'
// import { showDivider } from './utils'

const SyncHook = (props: ParentProps) => {
  const { parentCounter } = props
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('SyncHook Effect (with-deps)')

    return () => {
      console.log('SyncHook Effect (with-deps / cleanup)')
    }
  }, [counter, parentCounter])

  useEffect(() => {
    // console.log('================')
    console.log('SyncHook Effect (no-deps)')

    return () => {
      console.log('SyncHook Effect (no-deps / cleanup)')
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

  console.log('SyncHook render')

  return (
    <div className='sync-hook'>
      <div>
        <span>SyncHook: </span>
        <button onClick={increase}>+</button>
        <span>{parentCounter} - {counter}</span>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  )
}

export default SyncHook
