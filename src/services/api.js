
import axios from "axios"
import { BASE_URL } from "../constants";

const getData = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    return error;
  }
};


const getDataById = async (endpoint, id) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


const deleteDataById = async (endpoint, id) => {
  try {
    const response = await axios.delete(`${BASE_URL}${endpoint}/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const addNewData = async (endpoint, payload) => {
  try {
    const response = await axios.post(`${BASE_URL}${endpoint}`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const editDataById = async (endpoint, id, payload) => {
  try {
    const response = await axios.put(`${BASE_URL}${endpoint}/${id}`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const editDataByIdWitPatch = async (endpoint, id, payload) => {
  try {
    const response = await axios.patch(`${BASE_URL}${endpoint}/${id}`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export {
  getData,
  getDataById,
  deleteDataById,
  addNewData,
  editDataById,
  editDataByIdWitPatch,
};