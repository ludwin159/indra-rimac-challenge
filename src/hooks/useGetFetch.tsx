import { useEffect, useState } from "react"


const useGetFetch = (path: string) => {
  const [data, setData] = useState<any | any[]>()
  const [lodading, setLodading] = useState(true)

  const getData = async (url: string) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_PATH_URL_JPH}${url}`);
      const info = await response.json();
      if (info) setData(info)
      setLodading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData(path)
  }, [path])

  return [ data, lodading ]
}

export default useGetFetch