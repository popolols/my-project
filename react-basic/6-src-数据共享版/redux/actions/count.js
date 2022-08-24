/*
该文件专门为count组件生成action对象
*/
import { INCREMENT, DECREMENT } from "../constant"

export const createIncrementAction = (data) => {
  return { type: INCREMENT, data }
}

export const createDecrementAction = data => ({ type: DECREMENT, data })

export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, time)
  }
}