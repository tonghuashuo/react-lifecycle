import React, { Component } from 'react'
import { ParentProps } from './interface'
import { getDelay } from './utils'

class ChildClassAsync extends Component<ParentProps> {
  constructor (props: ParentProps) {
    super(props)

    console.log('    Child (C/A) Constructor')
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
    console.log('    Child (C/A) getDerivedStateFromProps')
    return null
  }

  getSnapshotBeforeUpdate () {
    console.log('    Child (C/A) getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate () {
    console.log('    Child (C/A) didUpdate')
  }

  componentDidMount () {
    console.log('    Child (C/A) didMount')

    const delay = getDelay()
    setTimeout(() => {
      console.log(`    Child (C/A) Request on mount (${delay}ms)`)
    }, delay)
  }

  componentWillUnmount () {
    console.log('    Child (C/A) willUnmount')
  }

  render () {
    console.log('    Child (C/A) render')

    return (
      <div className='child'>
        <div>
          <span>Child (C/A): </span>
          <button onClick={this.increase}>+</button>
          <span> {this.props.parentCounter} - {this.state.counter} </span>
          <button onClick={this.decrease}>-</button>
        </div>
      </div>
    )
  }
}

export default ChildClassAsync
