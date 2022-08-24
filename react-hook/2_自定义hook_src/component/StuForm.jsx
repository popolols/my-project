import React, { useCallback, useContext, useState } from 'react'
import classes from './StuForm.module.css'
import StuContext from '../store/StuContext'
export default function StuForm() {
  const ctx = useContext(StuContext)
  const [inputData, setInputData] = useState({
    name: '',
    age: '',
    address: '',
    gender: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  // 创建一个添加学生的方法
  const addStudent = useCallback(
    async (newStu) => {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch('http://localhost:1337/api/students', {
          method: 'post',
          body: JSON.stringify({ data: newStu }),
          headers: {
            'Content-type': 'application/json',
          },
        })
        if (res.status !== 200) {
          throw new Error('添加失败')
        }
        // 添加成功 刷新列表
        ctx.fetchData()
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    },
    [ctx]
  )
  const nameChangeHandler = (e) => {
    setInputData((preState) => ({ ...preState, name: e.target.value }))
  }
  const ageChangeHandler = (e) => {
    setInputData((preState) => ({ ...preState, age: e.target.value * 1 }))
  }
  const addressChangeHandler = (e) => {
    setInputData((preState) => ({ ...preState, address: e.target.value }))
  }
  const genderChangeHandler = (e) => {
    setInputData((preState) => ({ ...preState, gender: e.target.value }))
  }
  const onAdd = () => {
    addStudent(inputData)
  }
  return (
    <div>
      <>
        <input
          type="text"
          className={classes.Input}
          placeholder="姓名"
          value={inputData.name}
          onChange={nameChangeHandler}
        />
        <input
          type="text"
          className={classes.Input}
          placeholder="年龄"
          value={inputData.age}
          onChange={ageChangeHandler}
        />
        <input
          type="text"
          className={classes.Input}
          placeholder="地址"
          value={inputData.address}
          onChange={addressChangeHandler}
        />
        <input
          type="text"
          className={classes.Input}
          placeholder="性别"
          value={inputData.gender}
          onChange={genderChangeHandler}
        />
        <button onClick={onAdd}>添加</button>
      </>
      <>
        {loading && <p>添加中。。。。。。</p>}
        {error && <p>添加失败。。。。</p>}
      </>
    </div>
  )
}
