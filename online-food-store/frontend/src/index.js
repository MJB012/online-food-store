import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
// import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
