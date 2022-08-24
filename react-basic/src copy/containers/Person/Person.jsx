import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/action/person'

class Person extends Component {
  handleAdd = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value * 1
    const person = { id: nanoid(), name, age }
    console.log(person)
    this.props.addPerson(person)
  }
  render() {
    const { persons } = this.props
    return (
      <div>
        <h1>this is Person Component</h1>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="请输入名字"
        />
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="请输入年龄"
        />
        <button onClick={this.handleAdd}>添加</button>
        <ul>
          {persons.map((person) => {
            return (
              <li key={person.id}>
                {person.name}------{person.age}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const containers = connect((state) => ({ persons: state.persons }), {
  addPerson,
})(Person)
export default containers
