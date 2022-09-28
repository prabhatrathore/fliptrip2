import axios from "axios";
import { url } from "./url.service";
let serverUrl = `${url}/tour`;
// import { TOURAdd, get } from "../../../../redux/features/tour/tourSlice";
export const AddTour = (obj) => {
  console.log(obj, "obj axios");
  // console.log(serverUrl, "serverUrl");
  return axios.post(`${serverUrl}/add`, obj);
};

export const get = (query) => {
  return axios.get(`${serverUrl}/?${query}`)
};
 console.log(get,"get");
export const deleteTour = (id) => {
  return axios.delete(`${serverUrl}/deleteById/${id}`);
};

export const update = (formData, id) => {
  return axios.patch(`${serverUrl}/updateById/${id}`, formData);
};
