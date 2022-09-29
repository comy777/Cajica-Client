import { apiCajica } from "./config";
import { ApiResponse } from "../interfaces/Response";
import { FormUser } from "../interfaces/Components";

export const sendFormApi = async (form: FormUser) => {
  try {
    const { data } = await apiCajica.post<ApiResponse>("/", form);
    if (data.error) {
      console.log(data.error);
      return;
    }
    return data.msg;
  } catch (error: any) {
    const msg: any = error.response
      ? error.response.data.error
      : "Error del servidor";
    console.log(error);
    return msg;
  }
};
