import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";

ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
