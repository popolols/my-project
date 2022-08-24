// reducer 实际上是一个纯函数 操作state中的状态只能通过reducer来解决
// 纯函数的定义就是 传入什么参数就返回什么参数 不能改写参数数据 不能调用date。now等不纯的方法

// 引入常量
import { INCREMENT, DECREMENT } from "../constant"
// 初始化状态
const initCount = 0
export function countReducer (preState = initCount, action) {
  const { type, data } = action
  switch (type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState + data
    default:
      return preState
  }
}
