import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/Home';
import Contacts from './views/Contacts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Contacts' element={<Contacts/>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
