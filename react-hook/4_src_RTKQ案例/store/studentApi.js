import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// 创建一个API对象
const studentApi = createApi({
  reducerPath: 'studentApi',//api的标识，不能和其他的api或者reducer重复
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:1337/api/'
  }),//指定查询的基础信息，发送请求使用的工具
  //回调函数，当rtkq帮我们创建好API对象以后会调用这个方法，帮我们生成各种查询（增删改查）方法
  endpoints (build) {
    //build是 请求的构建器，通过build来设置请求的相关信息
    return {
      //设置请求的具体信息
      getStudents: build.query({
        query () {
          //用来请求子路径
          return 'students'
        },
      }),
      getStudentById: build.query({
        query (id) {
          return `students/${id}`
        },
        //在浏览器缓存数据之前处理数据
        transformResponse: responseData => responseData.data,
        keepUnusedDataFor: 60,
        providesTags: ['student']
      }),
      //删除学生信息
      delStudent: build.mutation({
        query (id) {
          return {
            url: `students/${id}`,
            method: 'delete'
          }
        }
      }),
      //添加学生信息
      addStudent: build.mutation({
        query (stu) {
          return {
            url: 'students',
            method: 'post',
            body: { data: stu.attributes }
          }
        },
        invalidatesTags: ['student']
      }),
      //修改学生信息
      updateStudent: build.mutation({
        query (stu) {
          return {
            url: `students/${stu.id}`,
            method: 'put',
            body: { data: stu.attributes }
          }
        }
      })

    }
  }
})
//Api对象创建后，对象会根据各种方法自动的生成对应的钩子函数
//通过这些钩子函数，可以向服务器发送请求
//钩子函数的命名规则getStudents--->useGetStudentsQuery
export const { useGetStudentsQuery, useGetStudentByIdQuery, useDelStudentMutation, useAddStudentMutation, useUpdateStudentMutation } = studentApi
export default studentApi