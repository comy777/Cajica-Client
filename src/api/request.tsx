import { apiCajica } from "./config";
import { ApiResponse, Form, GetDataAppResponse, GetDataCardsResponse, GetDataMaterialsResponse, GetFormsResponse } from "../interfaces/Response";
import { FormUser } from "../interfaces/Components";

export const sendFormApi = async (form: FormUser) : Promise<ApiResponse | undefined> => {
  try {
    const { data } = await apiCajica.post<ApiResponse>("/", form);
    if (data.error) {
      console.log(data.error);
      return;
    }
    return {msg: data.msg, id: data.id};
  } catch (error: any) {
    const msg: any = error.response
      ? error.response.data.error
      : "Error del servidor";
    console.log(error);
    return msg;
  }
};

export const sendFileApi = async (file: FormData, id: string) => {
  try {
    const resp = await apiCajica.put(`/${id}`, file);
    console.log(resp.data);
  } catch (error) {
    console.log(error);
  }
}

export const getDataApp = apiCajica.get<GetDataAppResponse>(`/app`)
export const getDataCard = apiCajica.get<GetDataCardsResponse>(`/card`)
export const getDataMaterials = apiCajica.get<GetDataMaterialsResponse>(`/materials`)

export const getDataForms = async () : Promise<Form[] | undefined> => {
  try {
    const { data } = await apiCajica.get<GetFormsResponse>("/forms/data")
    return data.forms
  } catch (error) {
    console.log(error)
  }
}