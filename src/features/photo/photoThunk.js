import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { photoApiUrl } from "~/config/apiConfig";

export const getListPhoto = createAsyncThunk(
  "getListPhoto",
  async (data, { getState, dispatch }) => {
    try {
      const res = await axios.get(photoApiUrl);
      return res.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
);

export const postPhoto = createAsyncThunk(
  "postPhoto",
  async (data, { getState, dispatch }) => {
    try {
      const res = await axios.post(photoApiUrl, data);
      if (res.status === 201) {
        dispatch(getListPhoto);
      }
    } catch (err) {
      throw new Error(err.message);
    }
  }
);

export const editPhoto = createAsyncThunk(
  "editPhoto",
  async (data, { dispatch }) => {
    try {
      const res = await axios.put(`${photoApiUrl}${data.id}`, data);
      if (res.status === 200) {
        dispatch(getListPhoto);
      }
    } catch (err) {
      throw new Error(err.message);
    }
  }
);

export const deletePhoto = createAsyncThunk(
  "deletePhoto",
  async (id, { dispatch }) => {
    try {
      const res = await axios.delete(`${photoApiUrl}${id}`);
      return res.data.id;
    } catch (err) {
      throw new Error(err.message);
    }
  }
);
