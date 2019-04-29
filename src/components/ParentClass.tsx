import React, { Component } from 'react'
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

interface ParentClassProps extends RouteComponentProps {}

class ParentClass extends Component<ParentClassProps> {
  constructor (props: ParentClassProps) {
    super(props)

    console.log('ParentClass Constructor')
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
    console.log('ParentClass getDerivedStateFromProps')
    return null
  }

  getSnapshotBeforeUpdate () {
    console.log('ParentClass getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate () {
    console.log('ParentClass didUpdate')
  }

  componentDidMount () {
    console.log('ParentClass didMount')
  }

  componentWillUnmount () {
    console.log('ParentClass willUnmount')
  }

  render () {
    console.log('ParentClass render')

    return (
      <div className='parent-class'>
        <div>
          <span>Parent Class: </span>
          <button onClick={this.increase}>+</button>
          <span>{this.state.counter}</span>
          <button onClick={this.decrease}>-</button>
        </div>

        <Switch>
          <Route path={`${this.props.match.path}/sync-class`} render={props => <SyncClass parentCounter={this.state.counter} />} />
          <Route path={`${this.props.match.path}/sync-hook`} render={props => <SyncHook parentCounter={this.state.counter} />} />
          <Route path={`${this.props.match.path}/async-class`} render={props => <AsyncClass parentCounter={this.state.counter} />} />
          <Route path={`${this.props.match.path}/async-hook`} render={props => <AsyncHook parentCounter={this.state.counter} />} />
        </Switch>
      </div>
    )
  }
}

export default ParentClass
