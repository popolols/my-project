import { useEffect } from "react"
// import B from "./component/B"
import List from "./component/List"
import useFetch from "./hooks/useFetch"
import StuContext from './store/StuContext'



function App () {
  const { data: persons, loading, error, fetchData } = useFetch()

  useEffect(() => {

    fetchData()
  }, [fetchData])

  const handleFetch = () => {
    fetchData()
  }

  console.log('APP渲染了!')
  return (
    <StuContext.Provider value={{ fetchData }}>
      <div>
        <button onClick={handleFetch}>加载数据</button>
        {!loading && <List persons={persons} />}
        {loading && <p>数据正在加载中...</p>}
        {error && <p>数据加载失败!</p>}
      </div>
    </StuContext.Provider>

  )
}

export default App
