import { FormUser } from "../interfaces/Components";
import { showAlert } from "./alerts";

export const validateFormData = (form: FormUser) => {
  const {email, msg} = form
  if(!email) {
    showAlert({title: "Error", text: "El correo electronico es obligatorio", icon: "warning"})
    return
  }
  if(!msg) {
    showAlert({title: "Error", text: "La idea es obligatoria", icon: "warning"})
    return
  }
  return true
}