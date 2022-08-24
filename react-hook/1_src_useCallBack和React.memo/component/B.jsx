import React from 'react'

function B(props) {
  console.log('B渲染了!')
  return (
    <div>
      <h2> B</h2>
      <button onClick={props.onAdd}>App +1</button>
    </div>
  )
}
export default React.memo(B)
