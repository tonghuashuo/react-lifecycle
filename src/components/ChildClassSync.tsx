import React, { Component } from 'react'
import { ParentProps } from './interface'
import { getDelay } from './utils'

class ChildClassSync extends Component<ParentProps> {
  constructor (props: ParentProps) {
    super(props)

    console.log('    Child (C/S) Constructor')
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
    console.log('    Child (C/S) getDerivedStateFromProps')
    return null
  }

  getSnapshotBeforeUpdate () {
    console.log('    Child (C/S) getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate () {
    console.log('    Child (C/S) didUpdate')
  }

  componentDidMount () {
    console.log('    Child (C/S) didMount')

    const delay = getDelay()
    setTimeout(() => {
      console.log(`    Child (C/S) Request on mount (${delay}ms)`)
    }, delay)
  }

  componentWillUnmount () {
    console.log('    Child (C/S) willUnmount')
  }

  render () {
    console.log('    Child (C/S) render')

    return (
      <div className='child'>
        <div>
          <span>Child (C/S): </span>
          <button onClick={this.increase}>+</button>
          <span> {this.props.parentCounter} - {this.state.counter} </span>
          <button onClick={this.decrease}>-</button>
        </div>
      </div>
    )
  }
}

export default ChildClassSync
