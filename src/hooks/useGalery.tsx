import { useContext, useEffect } from "react"
import { AppContext } from "../context/AppContext"

const useGalery = () => {
  const { setShowHeader, showHeader } = useContext(AppContext)

  useEffect(() => {
    if (showHeader) setShowHeader(false)
  }, [])

  return {}
}

export default useGalery
