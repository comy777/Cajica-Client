import axios from "axios";

const baseURL = "https://reci-cajica-server.herokuapp.com/";
const localhost = "http://192.168.100.7:5050";

export const apiCajica = axios.create({
  baseURL,
});
