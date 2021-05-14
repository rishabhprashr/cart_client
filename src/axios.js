import axios from 'axios';

const token = "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MzgsImV4cCI6MTYyMzUwMzgxOH0.uisr9nNY4EW7qFP5w3KCwr0OUOCgoIyCGUbsB0DAtaYT_7XRjq1jp5T-o-PcvDW5YHucH7BNP2WPLQFt9mlE7Q";
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