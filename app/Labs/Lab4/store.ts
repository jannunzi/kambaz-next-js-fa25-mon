import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./ReduxExamples/CounterRedux/counterReducer";
const store = configureStore({
  reducer: {
    counterReducer,
  },
});
export default store;
