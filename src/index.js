import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/Home';
import Contacts from './views/Contacts';
import News from './views/News';
import Services from './views/Services';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import LongArticleNews from './Components/LongArticleNews';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Contacts' element={<Contacts/>} />
        <Route path='/News' element={<News/>} />
        <Route path='/Services' element={<Services/>} />
        <Route path='/article/:id' element={<Services />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
