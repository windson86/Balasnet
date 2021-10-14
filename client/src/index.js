import React from "react";
import ReactDOM from "react-dom";
import "./style/site.css";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { createStore, applyMiddleware, combineReducers } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
//import registerServiceWorker from './registerServiceWorker'
const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk, createLogger)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

//registerServiceWorker()
