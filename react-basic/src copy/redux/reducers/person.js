import { ADD_PERSON } from '../constant'
// 初始化状态
const initState = [{ id: '001', name: 'tom', age: 18 }]
export function personReducer (preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState]

    default:
      return preState
  }
}