import React, { Component, Fragment } from 'react'
import { Switch, Route, NavLink} from 'react-router-dom'
import ParentClass from './components/ParentClass'
import ParentHook from './components/ParentHook'

const routes = [
  { to: '/', label: 'Home' },
  { to: '/class', label: 'Parent (Class)', children: [
    { to: '/class-sync', label: 'Child (Class / Sync)' },
    { to: '/class-async', label: 'Child (Class / Async)' },
    { to: '/hook-sync', label: 'Child (Hook / Sync)' },
    { to: '/hook-async', label: 'Child (Hook / Async)' },
  ] },
  { to: '/hook', label: 'Parent (Hook)', children: [
    { to: '/class-sync', label: 'Child (Class / Sync)' },
    { to: '/class-async', label: 'Child (Class / Async)' },
    { to: '/hook-sync', label: 'Child (Hook / Sync)' },
    { to: '/hook-async', label: 'Child (Hook / Async)' }
  ] },
]

class App extends Component {
  render () {
    return (
      <div className='root'>
        <nav>
          <dl>
            { routes.map(n => (
              <Fragment  key={n.to}>
                <dt onClick={() => { console.log('================') }}>
                  <NavLink to={n.to}>{n.label}</NavLink>
                </dt>
                { n.children &&
                  n.children.length > 0 &&
                  n.children.map(m => (
                    <dd key={m.to} onClick={() => { console.log('================') }}>
                      <NavLink to={`${n.to}${m.to}`}>{m.label}</NavLink>
                    </dd>
                  ))
                }
              </Fragment>
            )) }
          </dl>
        </nav>

        <hr />

        <p>Open the Console & See the Result</p>

        <hr />

        <Switch>
          <Route path='/class' component={ParentClass} />
          <Route path='/hook' component={ParentHook} />
        </Switch>
      </div>
    )
  }
}

export default App
