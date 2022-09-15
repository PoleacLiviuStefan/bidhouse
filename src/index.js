import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Cursor from './Components/Cursor/Cursor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Cursor />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);

