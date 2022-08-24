import { configureStore } from '@reduxjs/toolkit'
import stuReducer from './StuSlice'
import schoolReducer from './SchoolSlice'

// 创建store
const store = configureStore({
  reducer: {
    student: stuReducer,
    school: schoolReducer
  }
})
export default store