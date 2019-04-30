import React, { Component } from 'react'
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

interface ParentClassProps extends RouteComponentProps {}

class ParentClass extends Component<ParentClassProps> {
  constructor (props: ParentClassProps) {
    super(props)

    console.log('Parent (C) Constructor')
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
    console.log('Parent (C) getDerivedStateFromProps')
    return null
  }

  getSnapshotBeforeUpdate () {
    console.log('Parent (C) getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate () {
    console.log('Parent (C) didUpdate')
  }

  componentDidMount () {
    console.log('Parent (C) didMount')

    const delay = getDelay()
    setTimeout(() => {
      console.log(`Parent (C) Request on mount (${delay}ms)`)
    }, delay)
  }

  componentWillUnmount () {
    console.log('Parent (C) willUnmount')
  }

  render () {
    console.log('Parent (C) render')

    return (
      <div className='parent'>
        <div>
          <span>Parent (C): </span>
          <button onClick={this.increase}>+</button>
          <span> {this.state.counter} </span>
          <button onClick={this.decrease}>-</button>
        </div>

        <Switch>
          <Route path={`${this.props.match.path}/class-sync`} render={props => <ChildClassSync parentCounter={this.state.counter} />} />
          <Route path={`${this.props.match.path}/class-async`} render={props => <ChildClassAsync parentCounter={this.state.counter} />} />
          <Route path={`${this.props.match.path}/hooks-sync`} render={props => <ChildHooksSync parentCounter={this.state.counter} />} />
          <Route path={`${this.props.match.path}/hooks-async`} render={props => <ChildHooksAsync parentCounter={this.state.counter} />} />
          <Route path={`${this.props.match.path}/`} exact render={props => <Children parentCounter={this.state.counter} />} />
        </Switch>
      </div>
    )
  }
}

export default ParentClass
