import React, { Component } from 'react'
import Count from './containers/Count/Count'
import Person from './containers/Person/Person'
import store from './redux/store'
export default class App extends Component {
  render () {
    return (
      <div>
        <Count store={store} />
        <hr />
        <Person store={store} />
      </div>
    )
  }
}
