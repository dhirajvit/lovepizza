import React from "react";
import ReactDOM from "react-dom";
import MainApp from "./components/main-app";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles/main.css";

ReactDOM.render(
  <Provider store={store}>
    <MainApp />
  </Provider>,
  document.getElementById("root")
);
