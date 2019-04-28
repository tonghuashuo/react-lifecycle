import React, { useState, useEffect } from 'react'
import { ParentProps } from './interface'
// import { showDivider } from './utils'

const AsyncHook = (props: ParentProps) => {
  const { parentCounter } = props
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('AsyncHook Effect')

    return () => {
      console.log('AsyncHook Effect (cleanup)')
    }
  }, [counter, parentCounter])

  useEffect(() => {
    // console.log('================')
    console.log('AsyncHook Effect (mount)')

    return () => {
      console.log('AsyncHook Effect (cleanup / unmount)')
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

  console.log('AsyncHook render')

  return (
    <div className='async-hook'>
      <div>
        <span>AsyncHook: </span>
        <button onClick={increase}>+</button>
        <span>{parentCounter} - {counter}</span>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  )
}

export default AsyncHook
