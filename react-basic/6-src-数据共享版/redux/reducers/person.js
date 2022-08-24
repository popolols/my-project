import { ADD_PERSON } from '../constant'
// 初始状态
const inintState = [{ id: '001', name: 'tom', age: 18 }]
function personReducer (preState = inintState, action) {
  // console.log('@@@@@personReducer')
  const { type, data } = action
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState]

    default:
      return preState
  }
}
export default personReducer