import React, { useState, useEffect } from 'react'
import Loadable from 'react-loadable'
import { Switch, Route, RouteComponentProps} from 'react-router-dom'
import SyncClass from './SyncClass'
import SyncHook from './SyncHook'

const AsyncClass = Loadable({
  loader: () => import('./AsyncClass'),
  loading: () => null
})
const AsyncHook = Loadable({
  loader: () => import('./AsyncHook'),
  loading: () => null
})

interface ParentHookProps extends RouteComponentProps {}

const ParentHook = (props: ParentHookProps) => {
  const { match } = props
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('ClassHook Effect')

    return () => {
      console.log('ClassHook Effect (cleanup)')
    }
  }, [counter])

  useEffect(() => {
    console.log('ClassHook Effect (mount)')

    return () => {
      console.log('ClassHook Effect (cleanup / unmount)')
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

  console.log('ParentHook render')

  return (
    <div className='parent-hook'>
      <div>
        <span>Class Hook: </span>
        <button onClick={increase}>+</button>
        <span>{counter}</span>
        <button onClick={decrease}>-</button>
      </div>

      <Switch>
        <Route path={`${match.path}/sync-class`} render={props => <SyncClass parentCounter={counter} />} />
        <Route path={`${match.path}/sync-hook`} render={props => <SyncHook parentCounter={counter} />} />
        <Route path={`${match.path}/async-class`} render={props => <AsyncClass parentCounter={counter} />} />
        <Route path={`${match.path}/async-hook`} render={props => <AsyncHook parentCounter={counter} />} />
      </Switch>
    </div>
  )
}

export default ParentHook
