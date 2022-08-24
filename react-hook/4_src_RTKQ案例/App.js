import React, { useCallback, useState } from 'react'
import { useGetStudentsQuery, useGetStudentByIdQuery, useDelStudentMutation } from './store/studentApi'

export default function App () {
  // 调用Api查询数据
  //钩子函数会返回一个对象作为返回值，
  const { data, isSuccess, isLoading } = useGetStudentsQuery()
  /*startregion
  // const result=useGetStudentsQuery(null,{
  //   selectFromResult:result=>{
  //     if(result.data){
  //       result.data=result.data.filter(item=>item.attributes.age<18)
  //     }
  //     return result //用来指定useQuery返回的结果
  //   },
  //   pollingInterval:0,//设置轮询的时间 单位为毫秒 如果为0则表示不轮询
  //   skip:false,//设置是否跳过当前请求，默认是false
  //   refetchOnMountOrArgChange:false,//设置是否每次都重新加载数据 false正常使用缓存 true每次都重新加载数据 数字，表示数据缓存的时间
  //   refetchOnFocus:false,//是否在重新获取焦点时重载数据 页面切换时可能失焦
  //   refetchOnReconnect:true,//是否在重新连接网络后加载数据
  // })
  // console.log(data)
endregion
  */
  const [isEdit, setIsEdit] = useState(false)

  const [delStudent, result] = useDelStudentMutation()

  const editHandler = useCallback((id) => {
    console.log(id)
    // setIsEdit(true)
    // const obj = useGetStudentByIdQuery(id)
    // console.log(obj)
  })
  return (
    <div>
      {isLoading && <p>数据正在加载中。。。</p>}
      {
        isSuccess && data.data.map(item => {
          return <div key={item.id}>
            <span>
              {isEdit ? <input type='text' /> : item.attributes.name}--
            </span>
            {item.attributes.age}--
            {item.attributes.gender}--
            {item.attributes.address}
            <button onClick={() => { editHandler(item.id) }}>修改</button>
          </div>
        })
      }

    </div>
  )
}
