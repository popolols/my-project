import { configureStore } from '@reduxjs/toolkit'
import authApi from "./api/authApi"
import studentApi from './api/studentApi'
import authSlice from './reducer/authSlice'
const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [studentApi.reducerPath]: studentApi.reducer,
    auth: authSlice.reducer

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware).concat(studentApi.middleware)
})

// setupListeners(store.dispatch)//监听变化
export default store