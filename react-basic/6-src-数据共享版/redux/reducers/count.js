import { INCREMENT, DECREMENT } from "../constant"
// 初始状态
const initState = 0
function countReducer (preState = initState, action) {
  const { type, data } = action
  // console.log(preState)
  // console.log('@@@@@countReducer')
  switch (type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data

    default:
      return preState
  }
}

export default countReducer