import { INCREMENT, DECREMENT } from "./constant"
// εε§ηΆζ
const initState = 0
function countReducer (preState = initState, action) {
  const { type, data } = action
  // console.log(preState)
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