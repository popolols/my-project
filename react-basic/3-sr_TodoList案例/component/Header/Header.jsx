import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './Header.css'
export default class Header extends Component {
  // 键盘事件的回调
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }
  handleKeyup = (e) => {
    // console.log(e.target.value)
    const { keyCode, target } = e
    if (keyCode !== 13) return

    if (target.value.trim() === '') {
      alert('输入不能为空!')
      return
    }
    //准备好一个todo对象
    const todoObj = { id: nanoid(), name: target.value, done: false }
    //将todoObj传递给App
    this.props.addTodo(todoObj)
    //清空输入
    target.value = ''
  }
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          onKeyUp={this.handleKeyup}
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    )
  }
}
