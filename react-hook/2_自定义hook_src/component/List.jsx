import React, { useCallback, useContext } from 'react'
import StuContext from '../store/StuContext'
import StuForm from './StuForm'

function List(props) {
  console.log('List组件渲染了!')
  const ctx = useContext(StuContext)
  const remove = useCallback(async (id) => {
    try {
      console.log(id)
      const res = await fetch(`http://localhost:1337/api/students/${id}`, {
        method: 'delete',
      })

      // 判断是否成功
      if (res.status !== 200) {
        throw new Error('删除失败!')
      }
      console.log(res)
      // ctx.fetchData()
    } catch (error) {
      console.log(error.message)
    }
  }, [])
  const removeHadler = (id) => {
    remove(id)
    ctx.fetchData()
  }
  return (
    <div>
      <StuForm />
      <ul>
        {props.persons.map((person) => {
          return (
            <li key={person.id}>
              {person.attributes.name}----{person.attributes.age}----
              {person.attributes.address}----
              {person.attributes.gender} &nbsp;
              <button onClick={() => removeHadler(person.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default React.memo(List)
