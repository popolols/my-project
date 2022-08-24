import React from 'react'
import { useRef } from 'react'

export default function Count() {
  const selectNum = useRef(null)
  return (
    <div>
      <h2>当前求和的数为:？？？？</h2>
      <select ref={selectNum}>
        <option value="1">1</option>
        <option value="1">1</option>
        <option value="1">1</option>
      </select>
    </div>
  )
}
