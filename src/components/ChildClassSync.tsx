import React, { Component } from 'react'
import { ParentProps } from './interface'
import { getDelay } from './utils'

class ChildClassSync extends Component<ParentProps> {
  constructor (props: ParentProps) {
    super(props)

    console.log('    Child Constructor')
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
    console.log('    Child getDerivedStateFromProps')
    return null
  }

  getSnapshotBeforeUpdate () {
    console.log('    Child getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate () {
    console.log('    Child didUpdate')
  }

  componentDidMount () {
    console.log('    Child didMount')

    const delay = getDelay()
    setTimeout(() => {
      console.log(`    Child Async Request on mount (${delay}ms)`)
    }, delay)
  }

  componentWillUnmount () {
    console.log('    Child willUnmount')
  }

  render () {
    console.log('    Child render')

    return (
      <div className='child'>
        <p>Child: </p>
        <div>
          <button onClick={this.increase}>+</button>
          <span> {this.props.parentCounter} - {this.state.counter} </span>
          <button onClick={this.decrease}>-</button>
        </div>
      </div>
    )
  }
}

export default ChildClassSync
