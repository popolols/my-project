import React, { Component } from 'react'
import Item from '../Item/Item'
import './List.css'
export default class List extends Component {
  render() {
    // console.log('List', this.props)
    const { todos, updateTodo, deleteTodo } = this.props
    return (
      <ul className="todo-main">
        {todos.map((item) => {
          return (
            <Item
              key={item.id}
              {...item}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
    )
  }
}
