import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment } from '../../redux/action/count'
class Count extends Component {
  handleAdd = () => {
    const { value } = this.selectNum
    // console.log(value)
    this.props.store.dispatch(increment(value * 1))
  }
  // componentDidMount() {
  //   this.props.store.subscribe(() => {
  //     // this.render()
  //     this.setState({})
  //   })
  // }
  render() {
    return (
      <div>
        <h1>当前求和数为:{this.props.count}</h1>
        <h2>下面组件的人数为:{this.props.length}</h2>
        <select
          ref={(c) => {
            this.selectNum = c
          }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.handleAdd}>+</button>&nbsp;
        <button>-</button>&nbsp;
        <button>奇数+</button>&nbsp;
        <button>异步+</button>&nbsp;
      </div>
    )
  }
}

const containers = connect((state) => ({
  count: state.count,
  length: state.persons.length,
}))(Count)

export default containers
