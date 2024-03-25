import { configureStore } from "@reduxjs/toolkit";
import loadReducer from "./reducers/loadReducer";

const store = configureStore({
  reducer: {
    load: loadReducer,
  },
});

export default store;
