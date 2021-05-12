import axios from 'axios';

const token = "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MiwiZXhwIjoxNjIzMzA2OTA2fQ.Cjho9n7NXLM5OX1JfFqNQMQlC0PvTxDYsojYBk5hT_b6ZV0Lx7_gnCENP22mHdiEnn12vHCR51IruuG-1Sn2PA";
const BASE_URL = `http://localhost:3000/api`;

const getEndpoint = (url) => {
  return BASE_URL + url;
}

const getHeaders = () => {
  return {headers : {Authorization: `Token token=${token}`}};
}

const responseData = (res) => res.data;

export const get = (url) => {
  const endpoint = getEndpoint(url);
  const header = getHeaders();
  return axios.get(endpoint, header).then(responseData);
}

export const put = (url, data) => {
  const endpoint = getEndpoint(url);
  const header = getHeaders();
  return axios.put(endpoint,data, header).then(responseData);
}

export const post = (url, data) => {
  const endpoint = getEndpoint(url);
  const header = getHeaders();
  return axios.post(endpoint, data, header).then(responseData);
}

export const destroy = (url, data) => {
  const endpoint = getEndpoint(url);
  const header = getHeaders();
  return axios.delete(endpoint,data, header).then(responseData);
}