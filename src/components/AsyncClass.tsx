import React, { Component } from 'react'
import { ParentProps } from './interface'
// import { showDivider } from './utils'

class AsyncClass extends Component<ParentProps> {
  constructor (props: ParentProps) {
    super(props)

    // console.log('================')
    console.log('AsyncClass Constructor')
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
    console.log('AsyncClass getDerivedStateFromProps')
    return null
  }

  getSnapshotBeforeUpdate () {
    console.log('AsyncClass getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate () {
    console.log('AsyncClass didUpdate')
  }

  componentDidMount () {
    console.log('AsyncClass didMount')
  }

  componentWillUnmount () {
    console.log('AsyncClass willUnmount')
  }

  render () {
    console.log('AsyncClass render')

    return (
      <div className='async-class'>
        <div>
          <span>AsyncClass: </span>
          <button onClick={this.increase}>+</button>
          <span>{this.props.parentCounter} - {this.state.counter}</span>
          <button onClick={this.decrease}>-</button>
        </div>
      </div>
    )
  }
}

export default AsyncClass
