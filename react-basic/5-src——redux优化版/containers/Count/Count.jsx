// 引入count的UI组件
import CountUI from '../../component/Count/Count'
// 引入connect用于连接UI组件和redux
import { connect } from 'react-redux'
// 引入action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from '../../redux/create_action'

//映射状态

function mapStateToProps(state) {
  return { count: state }
}

function mapDispatchToProps(dispatch) {
  return {
    jia: (num) => dispatch(createIncrementAction(num)),
    jian: (num) => dispatch(createDecrementAction(num)),
    jiaAsync: (num, time) => dispatch(createIncrementAsyncAction(num, time)),
  }
}

// 使用connect（）（）创建并暴露一个Count的容器组件  注意：这里的容器组件不能自己创建 必须用第三方库封装好的方法来创建容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
