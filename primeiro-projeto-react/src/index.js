import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { createRoot } from "react-dom/client";
import "./Styles/css/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultTemplate } from "./pages/_templates/Default";
import ProdutoProvider from './contexts/Produtos';

import { Register } from "./pages/Register";
import App from "./pages/App";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ProdutoProvider>
      <DefaultTemplate>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/registrar" element={<Register />} />
        </Routes>
      </DefaultTemplate>
    </ProdutoProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
