import { useCallback, useState } from "react"
import B from "./component/B"




function App () {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(1)
  const clickHandler = useCallback(() => {
    setCount(preState => preState + num)
    setNum(preState => preState + 1)
  }, [])
  console.log('APP渲染了!')
  return (
    <div>
      <h2>App Component num:{count}</h2>
      <button onClick={clickHandler}>num +1</button>
      <B onAdd={clickHandler} />
      {/* <C /> */}
    </div>
  )
}

export default App
