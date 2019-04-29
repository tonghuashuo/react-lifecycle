import React, { Component, Fragment } from 'react'
import { Switch, Route, NavLink} from 'react-router-dom'
import ParentClass from './components/ParentClass'
import ParentHook from './components/ParentHook'

const routes = [
  { to: '/', label: 'Home' },
  { to: '/parent-class', label: 'Parent Class', children: [
    { to: '/sync-class', label: 'Sync Class' },
    { to: '/sync-hook', label: 'Sync Hook' },
    { to: '/async-class', label: 'Async Class' },
    { to: '/async-hook', label: 'Async Hook' },
  ] },
  { to: '/parent-hook', label: 'Parent Hook', children: [
    { to: '/sync-class', label: 'Sync Class' },
    { to: '/sync-hook', label: 'Sync Hook' },
    { to: '/async-class', label: 'Async Class' },
    { to: '/async-hook', label: 'Async Hook' }
  ] },
]

class App extends Component {
  render () {
    return (
      <div className='App'>
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

        <Switch>
          <Route path='/parent-class' component={ParentClass} />
          <Route path='/parent-hook' component={ParentHook} />
        </Switch>
      </div>
    )
  }
}

export default App
