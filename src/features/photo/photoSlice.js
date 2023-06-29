import { createSlice } from "@reduxjs/toolkit";
import { deletePhoto, getListPhoto } from "./photoThunk";

const photoSlice = createSlice({
  name: "photos",
  initialState: {
    photos: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getListPhoto.fulfilled, (state, action) => {
        state.photos = action.payload;
        state.isLoading = false;
      })
      .addCase(getListPhoto.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getListPhoto.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deletePhoto.fulfilled, (state, action) => {
        const removeId = action.payload;
        state.photos = state.photos.filter((photo) => photo.id !== removeId);
      });
  },
});
const { actions, reducer } = photoSlice;
console.log(actions)
export const {} = actions;
export default reducer;