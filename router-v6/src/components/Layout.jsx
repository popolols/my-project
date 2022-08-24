import React from 'react'
import MainMenu from './MainMenu'

export default function Layout(props) {
  console.log(props)
  return (
    <div>
      <MainMenu />
      <hr></hr>
      {props.children}
    </div>
  )
}
