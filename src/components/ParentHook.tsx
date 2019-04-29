import React, { useState, useEffect } from 'react'
import Loadable from 'react-loadable'
import { Switch, Route, RouteComponentProps} from 'react-router-dom'
import ChildClassSync from './ChildClassSync'
import ChildHookSync from './ChildHookSync'
import { getDelay } from './utils'

const ChildClassAsync = Loadable({
  loader: () => import('./ChildClassAsync'),
  loading: () => null
})
const ChildHookAsync = Loadable({
  loader: () => import('./ChildHookAsync'),
  loading: () => null
})

interface ParentHookProps extends RouteComponentProps {}

const ParentHook = (props: ParentHookProps) => {
  const { match } = props
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('Parent Effect')

    return () => {
      console.log('Parent Effect Cleanup)')
    }
  }, [counter])

  useEffect(() => {
    console.log('Parent Effect (no-deps)')

    const delay = getDelay()
    setTimeout(() => {
      console.log(`Parent Async Request on mount (${delay}ms)`)
    }, delay)

    return () => {
      console.log('Parent Effect Cleanup (no-deps)')
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

  console.log('Parent render')

  return (
    <div className='parent'>
      <p>Parent: </p>
      <div>
        <button onClick={increase}>+</button>
        <span> {counter} </span>
        <button onClick={decrease}>-</button>
      </div>

      <Switch>
        <Route path={`${match.path}/class-sync`} render={props => <ChildClassSync parentCounter={counter} />} />
        <Route path={`${match.path}/class-async`} render={props => <ChildClassAsync parentCounter={counter} />} />
        <Route path={`${match.path}/hook-sync`} render={props => <ChildHookSync parentCounter={counter} />} />
        <Route path={`${match.path}/hook-async`} render={props => <ChildHookAsync parentCounter={counter} />} />
      </Switch>
    </div>
  )
}

export default ParentHook
