import React, { useState, useEffect } from 'react'
export default function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1)
    }, 1000)
    return () => clearInterval(id)
  }, [])
  return <h1>当前求和的数为:{count}</h1>
}
