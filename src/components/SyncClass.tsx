import React, { Component } from 'react'
import { ParentProps } from './interface'
// import { showDivider } from './utils'

class SyncClass extends Component<ParentProps> {
  constructor (props: ParentProps) {
    super(props)

    // console.log('================')
    console.log('SyncClass Constructor')
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
    console.log('SyncClass getDerivedStateFromProps')
    return null
  }

  getSnapshotBeforeUpdate () {
    console.log('SyncClass getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate () {
    console.log('SyncClass didUpdate')
  }

  componentDidMount () {
    console.log('SyncClass didMount')
  }

  componentWillUnmount () {
    console.log('SyncClass willUnmount')
  }

  render () {
    console.log('SyncClass render')

    return (
      <div className='sync-class'>
        <div>
          <span>SyncClass: </span>
          <button onClick={this.increase}>+</button>
          <span>{this.props.parentCounter} - {this.state.counter}</span>
          <button onClick={this.decrease}>-</button>
        </div>
      </div>
    )
  }
}

export default SyncClass
