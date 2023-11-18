import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/Home';
import Contacts from './views/Contacts';
import News from './views/News';
import Services from './views/LongNews';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import LongNews from './views/LongNews';
import NotFound from './views/NotFound';
import { ArticleProvider } from './Components/ArticleContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ArticleProvider>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Contacts' element={<Contacts/>} />
        <Route path='/News' element={<News/>} />
        <Route path='/Services' element={<NotFound/>} />
        <Route path='/article/:id' element={<LongNews />} />
      </Routes>
    </ArticleProvider>  
    </BrowserRouter>
  </React.StrictMode>
);
