import axios from "axios";

const baseURL = "https://reci-cajica-server.herokuapp.com/";
const localhost = "http://192.168.100.9:5050";

export const apiCajica = axios.create({
  baseURL: localhost,
});
