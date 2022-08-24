import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAge, setName } from './store/StuSlice'
import { setAddress, setName as setSclName } from './store/SchoolSlice'
export default function App () {
  const { school, student } = useSelector(state => state)
  const dispatch = useDispatch()

  const setNameHandler = () => {
    dispatch(setName('hjwqn'))
  }
  const setAgeHandler = () => {
    dispatch(setAge())
  }
  const setSclNameHandler = () => {
    dispatch(setSclName('高老庄第一校'))
  }
  const setSclAddressHandler = () => {
    dispatch(setAddress('天庭蟠桃园第16号'))
  }
  return (
    <div>
      <div>{student.name}--{student.age}--{student.gender}--{student.address}</div>
      <button onClick={setNameHandler}>修改name</button>
      <button onClick={setAgeHandler}>修改age</button>
      <hr />
      <div>{school.name}--{school.address}</div>
      <button onClick={setSclNameHandler}>修改schoolname</button>
      <button onClick={setSclAddressHandler}>修改school地址</button>
    </div>
  )
}
