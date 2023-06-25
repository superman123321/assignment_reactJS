import { combineReducers, configureStore } from "@reduxjs/toolkit";
import photoReducer from '~/features/photo/photoSlice'
import ThunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
 photoReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: [ThunkMiddleware],
});

export default store;