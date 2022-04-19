import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { createRoot } from "react-dom/client";
import "./Styles/css/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultTemplate } from "./pages/_templates/Default";

import { Register } from "./pages/Register";
import {Home} from "./pages/Home";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <DefaultTemplate>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registrar" element={<Register />} />
      </Routes>
    </DefaultTemplate>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
