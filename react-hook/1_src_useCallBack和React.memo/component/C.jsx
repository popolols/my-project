import React from 'react'

function C() {
  console.log('C组件渲染了!')
  return <div>C组件!</div>
}
export default React.memo(C)
