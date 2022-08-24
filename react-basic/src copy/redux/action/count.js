// 这个文件在创建count组件的Action
import { INCREMENT, DECREMENT } from "../constant"
export const increment = (data) => ({ type: INCREMENT, data })
export const decrement = (data) => ({ type: DECREMENT, data })