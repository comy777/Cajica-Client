import { ChangeEvent, useState, useContext } from "react";
import { sendFileApi, sendFormApi } from "../api/request";
import { AppContext } from "../context/AppContext";
import { SubmitForm } from "../interfaces/Components";
import { showAlert } from "../utils/alerts";
import { validateFormData } from "../utils/validate";

const useForm = <T extends Object>(initialState: T) => {
  const {file, setFile} = useContext(AppContext)
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const reset = () => setState(initialState);
  
  const resetFormValues = (form: T) => setState(form);

  const handleSubmitFile = async (id: string) => {
    if(!file) return
    const formData = new FormData();
    formData.append("file", file);
    await sendFileApi(formData, id);
  };
  
  const handleSubmit = async ({ e, form }: SubmitForm) => {
    e.preventDefault();
    const validate = validateFormData(form)
    if(!validate) return
    setLoading(true);
    const resp = await sendFormApi(form);
    if(!resp) {
      setLoading(false)
      return
    }
    if (resp.msg !== "Su peticion ha sido recibida con exito") {
      showAlert({
        title: "Error Solicitud",
        text: resp.msg,
        icon: "error",
      });
      return;
    }
    if(file){
      await handleSubmitFile(resp.id)
      setFile(undefined)
    }
    setLoading(false);
    showAlert({ title: "Solicitud", text: resp.msg, icon: "success" });
    reset();
  };

  return {
    ...state,
    handleChange,
    reset,
    resetFormValues,
    handleSubmit,
    loading,
  };
};

export default useForm;
