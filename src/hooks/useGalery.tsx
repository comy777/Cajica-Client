import { useContext, useEffect, useState } from "react"
import { getFilesGalery } from "../api/request"
import { AppContext } from "../context/AppContext"
import { FileCloudinary } from "../interfaces/Response"

const useGalery = () => {
  const { setShowHeader, showHeader } = useContext(AppContext)
  const [files, setFiles] = useState<FileCloudinary[]>([])
  const [loading, setLoading] = useState(false)

  const getFiles = async () => {
    setLoading(true)
    const resp = await getFilesGalery()
    setLoading(false)
    if (!resp) return
    setFiles(resp)
  }

  useEffect(() => {
    if (showHeader) setShowHeader(false)
  }, [])

  useEffect(() => {
    (async () => await getFiles())()
  }, [])

  return {
    files,
    loading
  }
}

export default useGalery
