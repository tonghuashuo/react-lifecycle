import React, { Component } from 'react'
import Loadable from 'react-loadable'
import { Switch, Route, NavLink} from 'react-router-dom'
import './App.scss'
import SyncClass from './components/SyncClass'
import SyncHook from './components/SyncHook'
// import { showDivider } from './components/utils'

const AsyncClass = Loadable({
  loader: () => import('./components/AsyncClass'),
  loading: () => null
})
const AsyncHook = Loadable({
  loader: () => import('./components/AsyncHook'),
  loading: () => null
})

const routes = [
  { to: '/', label: 'Home' },
  { to: '/sync-class', label: 'Sync Class' },
  { to: '/sync-hook', label: 'Sync Hook' },
  { to: '/async-class', label: 'Async Class' },
  { to: '/async-hook', label: 'Async Hook' }
]

class App extends Component {
  constructor (props: any) {
    super(props)

    // console.log('================')
    console.log('Parent Constructor')
  }

  state = {
    counter: 0
  }

  increase = () => {
    console.log('================')
    this.setState({ counter: this.state.counter + 1})
  }

  decrease = () => {
    console.log('================')
    this.setState({ counter: this.state.counter - 1})
  }

  static getDerivedStateFromProps () {
    // console.log('================')
    console.log('Parent getDerivedStateFromProps')
    return null
  }

  getSnapshotBeforeUpdate () {
    console.log('Parent getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate () {
    console.log('Parent didUpdate')
  }

  componentDidMount () {
    console.log('Parent didMount')

    // document.addEventListener('click', showDivider)
  }

  componentWillUnmount () {
    console.log('Parent willUnmount')

    // document.removeEventListener('click', showDivider)
  }

  render () {
    console.log('Parent render')

    return (
      <div className='App'>
        <nav>
          <ul>
            { routes.map(n => (
              <li key={n.to} onClick={() => { console.log('================') }}>
                <NavLink to={n.to}>{n.label}</NavLink>
              </li>
            )) }
          </ul>
        </nav>

        <div>
          <span>Parent: </span>
          <button onClick={this.increase}>+</button>
          <span>{this.state.counter}</span>
          <button onClick={this.decrease}>-</button>
        </div>

        {/* <SyncClass /> */}
        {/* <SyncHook /> */}

        <hr />

        <Switch>
          <Route path='/sync-class' render={props => <SyncClass parentCounter={this.state.counter} />} />
          <Route path='/sync-hook' render={props => <SyncHook parentCounter={this.state.counter} />} />
          <Route path='/async-class' render={props => <AsyncClass parentCounter={this.state.counter} />} />
          <Route path='/async-hook' render={props => <AsyncHook parentCounter={this.state.counter} />} />
        </Switch>
      </div>
    )
  }
}

export default App
