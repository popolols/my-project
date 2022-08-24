import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  state = {
    mouse: false, //鼠标移入移出
  }
  // 鼠标移入移出事件
  handleMouse = (flag) => {
    return () => {
      // console.log('flah', flag)
      // console.log('chu', this)
      this.setState({
        mouse: flag,
      })
    }
  }
  // 删除todo事件回调
  handleClick = (id) => {
    return () => {
      this.props.deleteTodo(id)
    }
  }
  // checkbox事件回调
  handleCheck = (id) => {
    return (event) => {
      // console.log(id, event.target.checked)
      // console.log('this', this)
      this.props.updateTodo(id, event.target.checked)
    }
  }

  render() {
    // console.log('Item', this.props)
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <div>
        <li
          style={{ backgroundColor: mouse ? '#ddd' : 'white' }}
          onMouseEnter={this.handleMouse(true)}
          onMouseLeave={this.handleMouse(false)}>
          <label>
            <input
              type="checkbox"
              checked={done}
              onChange={this.handleCheck(id)}
            />
            <span>{name}</span>
          </label>
          <button
            className="btn btn-danger"
            onClick={this.handleClick(id)}
            style={{ display: mouse ? 'block' : 'none' }}>
            删除
          </button>
        </li>
      </div>
    )
  }
}
