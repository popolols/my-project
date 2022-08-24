import { createSlice } from '@reduxjs/toolkit'
const stuSlice = createSlice({
  name: 'stu',//用于生成action中的type
  initialState: {
    name: '孙悟空',
    age: 18,
    gender: '男',
    address: "花果山"
  },
  reducers: {
    setName (state, action) {
      state.name += action.payload
    },
    setAge (state) {
      state.age += 1
    }
  }
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { setName, setAge } = stuSlice.actions
export default stuSlice.reducer