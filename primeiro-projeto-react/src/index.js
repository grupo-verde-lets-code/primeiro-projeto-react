import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProdutoProvider from './contexts/Produtos';

import { Register } from './pages/Register';

const root = createRoot(document.getElementById('root'))

root.render(  
  <BrowserRouter>
    <ProdutoProvider>
      <Routes>

        <Route path="/registrar" element={<Register/>}/>

      </Routes>
    </ProdutoProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals