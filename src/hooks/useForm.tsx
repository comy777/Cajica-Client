import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import { sendFormApi } from "../api/request";
import { FormUser, SubmitForm } from "../interfaces/Components";
import { showAlert } from "../utils/alerts";

const useForm = <T extends Object>(initialState: T) => {
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
  const handleSubmit = async ({ e, form }: SubmitForm) => {
    e.preventDefault();
    setLoading(true);
    const resp = await sendFormApi(form);
    setLoading(false);
    if (resp !== "Su peticion ha sido recibida con exito") {
      showAlert({
        title: "Error Solicitud",
        text: resp,
        icon: "error",
      });
      return;
    }
    showAlert({ title: "Solicitud", text: resp, icon: "success" });
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
