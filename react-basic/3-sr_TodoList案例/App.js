import React, { Component } from 'react'
import './App.css'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import List from './component/List/List'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { id: '001', name: "吃饭", done: true },
        { id: '002', name: "睡觉", done: true },
        { id: '003', name: "打游戏", done: false },
        { id: '004', name: "打代码", done: false },
      ]
    }
  }
  addTodo = (todoObj) => {
    // 获取原todo
    const { todos } = this.state

    // 追加一个todo
    const newTodos = [todoObj, ...todos]
    // 更新状态
    this.setState({
      todos: newTodos
    })
  }
  // 更新todo的done状态
  updateTodo = (id, done) => {
    // 找出来是哪一个done状态发生了变化
    const { todos } = this.state
    const newTodos = todos.map(todo => {
      if (todo.id === id) return { ...todo, done }
      else return todo
    })
    // 更新
    this.setState({ todos: newTodos })
  }
  // 删除一个todo
  deleteTodo = (id) => {
    const { todos } = this.state
    // 删除指定id的todo对象
    const newTodos = todos.filter(item => item.id !== id)
    // 更新状态
    this.setState({
      todos: newTodos
    })
  }
  // checkAllTodo用于全选
  checkAllTodo = (done) => {
    const { todos } = this.state
    const newTodos = todos.map(todo => {
      return { ...todo, done }
    })
    // 更新
    this.setState({ todos: newTodos })
  }

  // clearAllTodo清除已完成任务
  clearAllTodo = () => {
    const { todos } = this.state
    const newTodos = todos.filter(todo => !todo.done)
    // 更新
    this.setState({ todos: newTodos })
  }
  render () {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearAllTodo={this.clearAllTodo} />
        </div>
      </div>
    )
  }
}

export default App
