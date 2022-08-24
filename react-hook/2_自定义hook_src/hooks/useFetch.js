import { useState, useCallback } from "react"
export default function useFetch () {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      let res = await fetch('http://localhost:1337/api/students')
      if (res.status === 200) {
        let data = await res.json()
        console.log(data)
        setData(data.data)

      } else {
        throw new Error('数据加载失败!')
      }
    } catch (error) {
      console.log(error.message)
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    loading,
    error,
    data,
    fetchData
  }
}