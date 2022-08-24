import React, { Component } from 'react'
import store from '../../redux/store'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from '../../redux/create_action'
export default class h1 extends Component {
  // state = { count: 0 }
  handleAdd = () => {
    // console.log(this.selectNumber.value)
    const { value } = this.selectNumber
    store.dispatch(createIncrementAction(value * 1))
    // let newCount = this.state.count
    // newCount += Number(this.selectNumber.value)
    // this.setState({ count: newCount })
  }
  handleDecrement = () => {
    const { value } = this.selectNumber
    store.dispatch(createDecrementAction(value * 1))
  }
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    // const { count } = this.state
    if (store.getState() % 2 !== 0) {
      store.dispatch(createIncrementAction(value * 1))
    }
  }
  incrementAsync = () => {
    const { value } = this.selectNumber
    // setTimeout(() => {

    store.dispatch(createIncrementAsyncAction(value * 1, 500))
    // }, 500)
  }
  render() {
    // const { count } = this.state
    return (
      <div>
        <h1>当前求和为:{store.getState()}</h1>
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

  componentDidMount() {
    // 检测redux状态变化 只要变化就调用render
    // subscribe回调函数作为参数
    // this.setState()调用，不管状态state发不发生变化，都会重新调用一次render（）
    store.subscribe(() => {
      this.setState({})
    })
  }
}
