import { composeWithDevTools } from "redux-devtools-extension";
import movieReducer from "./redux/movieReducer";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';


const store = createStore(movieReducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

