"use client";
import ReduxExamples from "./ReduxExamples";
import store from "./store";
import { Provider } from "react-redux";
export default function Lab4() {
  return (
    <Provider store={store}>
      <div>
        <h2>Lab 4</h2>
        <ReduxExamples />
      </div>
    </Provider>
  );
}
