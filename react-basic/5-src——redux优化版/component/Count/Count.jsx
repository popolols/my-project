import React, { Component } from 'react'

export default class h1 extends Component {
  // state = { count: 0 }
  handleAdd = () => {
    // console.log(this.selectNumber.value)
    const { value } = this.selectNumber
    this.props.jia(value * 1)
  }
  handleDecrement = () => {
    const { value } = this.selectNumber
    this.props.jian(value * 1)
  }
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.jia(value * 1)
    }
  }
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.jiaAsync(value * 1, 500)
  }
  render() {
    const { count } = this.props
    return (
      <div>
        <h1>当前求和为:{count}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option vaue="1">1</option>
          <option vaue="2">2</option>
          <option vaue="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.handleAdd}>+</button>&nbsp;
        <button onClick={this.handleDecrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
