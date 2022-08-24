import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPersonAction } from '../../redux/actions/person'
import { nanoid } from 'nanoid'
class Person extends Component {
  handleAdd = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    // console.log(name, '  ', age)
    const personObj = { id: nanoid(), name, age }
    this.props.addPerson(personObj)
    this.nameNode.value = ''
    this.ageNode.value = ''
  }
  render() {
    const { persons } = this.props
    return (
      <div>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="输入名字"
        />
        &nbsp;
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="输入年龄"
        />
        &nbsp;
        <button onClick={this.handleAdd}>添加</button>
        <ul>
          {persons.map((person) => {
            return (
              <li key={person.id}>
                {person.name}-----{person.age}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const containers = connect(
  (state) => ({ persons: state.persons }), //映射状态 mapStateToProps
  { addPerson: createPersonAction } //映射操作方法 写成对象形式 mapdispatchToProps
)(Person)
export default containers
