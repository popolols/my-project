import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  handleCheck = (e) => {
    // console.log(e.target.checked)
    this.props.checkAllTodo(e.target.checked)
  }
  handleClick = () => {
    // alert(111)
    this.props.clearAllTodo()
  }
  render() {
    const { todos } = this.props
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    //总数
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheck}
            checked={doneCount === total && total !== 0 ? true : false}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClick}>
          清除已完成任务
        </button>
      </div>
    )
  }
}
