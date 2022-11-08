import { useContext, useEffect, useState } from "react"
import { getDataForms } from "../api/request"
import { AppContext } from "../context/AppContext"
import { Form } from "../interfaces/Response"

const useIdeas = () => {
  const { setShowHeader, showHeader } = useContext(AppContext)
  const [state, setState] = useState<Form[]>([])

  const getDataFormsApi = async () => {
    const resp = await getDataForms()
    if (!resp) return
    setState(resp)
  }

  useEffect(() => {
    if (showHeader) setShowHeader(false)
  }, [])

  useEffect(() => {
    (async () => await getDataFormsApi())()
  }, [])

  return {
    state
  }
}

export default useIdeas