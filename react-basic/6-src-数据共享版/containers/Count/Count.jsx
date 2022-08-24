import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createIncrementAction } from '../../redux/actions/count'

class Count extends Component {
  handleAdd = () => {
    const { value } = this.selectNum
    this.props.add(value * 1)
  }
  render() {
    return (
      <div>
        <h1>当前求和的数为:{this.props.count}</h1>
        <h2>下面组件的人数为:{this.props.totalPersons}</h2>
        <select ref={(c) => (this.selectNum = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.handleAdd}>+</button>&nbsp;
        <button onClick={this.handleAdd}>-</button>&nbsp;
        <button onClick={this.handleAdd}>-</button>&nbsp;
        <button onClick={this.handleAdd}>-</button>&nbsp;
      </div>
    )
  }
}
// function mapStateToProps(state) {
//   return { count }
// }
const container = connect(
  // 状态映射
  (state) => ({ count: state.count, totalPersons: state.persons.length }),
  // 操作映射
  {
    add: createIncrementAction,
  }
)(Count)
export default container
