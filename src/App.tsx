import React, { Component, Fragment } from 'react'
import { Switch, Route, NavLink} from 'react-router-dom'
import ParentClass from './components/ParentClass'
import ParentHooks from './components/ParentHooks'

const routes = [
  { to: '/', label: 'Home' },
  { to: '/class', label: 'Parent (C)', children: [
    { to: '/class-sync', label: 'Child (C/S)' },
    { to: '/class-async', label: 'Child (C/C)' },
    { to: '/hooks-sync', label: 'Child (H/S)' },
    { to: '/hooks-async', label: 'Child (H/C)' },
  ] },
  { to: '/hooks', label: 'Parent (H)', children: [
    { to: '/class-sync', label: 'Child (C/S)' },
    { to: '/class-async', label: 'Child (C/C)' },
    { to: '/hooks-sync', label: 'Child (H/S)' },
    { to: '/hooks-async', label: 'Child (H/C)' }
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

        <p>1) 打开控制台以查看结果</p>
        <p>2) 括号里的缩写：C (Class), H (Hooks), S (Sync), A (Async)</p>

        <hr />

        <Switch>
          <Route path='/class' component={ParentClass} />
          <Route path='/hooks' component={ParentHooks} />
        </Switch>
      </div>
    )
  }
}

export default App
