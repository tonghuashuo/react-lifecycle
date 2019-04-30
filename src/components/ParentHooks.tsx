import React, { useState, useEffect, useLayoutEffect } from 'react'
import Loadable from 'react-loadable'
import { Switch, Route, RouteComponentProps} from 'react-router-dom'
import ChildClassSync from './ChildClassSync'
import ChildHooksSync from './ChildHooksSync'
import Children from './Children'
import { getDelay } from './utils'

const ChildClassAsync = Loadable({
  loader: () => import('./ChildClassAsync'),
  loading: () => null
})
const ChildHooksAsync = Loadable({
  loader: () => import('./ChildHooksAsync'),
  loading: () => null
})

interface ParentHooksProps extends RouteComponentProps {}

const ParentHooks = (props: ParentHooksProps) => {
  const { match } = props
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('Parent (H) Effect')

    return () => {
      console.log('Parent (H) Effect Cleanup')
    }
  }, [counter])

  useLayoutEffect(() => {
    console.log('Parent (H) LayoutEffect')

    return () => {
      console.log('Parent (H) LayoutEffect Cleanup')
    }
  }, [counter])

  useEffect(() => {
    console.log('Parent (H) Effect (no-deps)')

    const delay = getDelay()
    setTimeout(() => {
      console.log(`Parent (H) Request on mount (${delay}ms)`)
    }, delay)

    return () => {
      console.log('Parent (H) Effect Cleanup (no-deps)')
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

  console.log('Parent (H) render')

  return (
    <div className='parent'>
      <div>
        <span>Parent (H): </span>
        <button onClick={increase}>+</button>
        <span> {counter} </span>
        <button onClick={decrease}>-</button>
      </div>

      <Switch>
        <Route path={`${match.path}/class-sync`} render={props => <ChildClassSync parentCounter={counter} />} />
        <Route path={`${match.path}/class-async`} render={props => <ChildClassAsync parentCounter={counter} />} />
        <Route path={`${match.path}/hooks-sync`} render={props => <ChildHooksSync parentCounter={counter} />} />
        <Route path={`${match.path}/hooks-async`} render={props => <ChildHooksAsync parentCounter={counter} />} />
        <Route path={`${match.path}/`} exact render={props => <Children parentCounter={counter} />} />
      </Switch>
    </div>
  )
}

export default ParentHooks
