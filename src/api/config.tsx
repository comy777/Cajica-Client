import axios from "axios";

const baseURL = "http://192.168.100.7:5050";

export const apiCajica = axios.create({
  baseURL,
});
