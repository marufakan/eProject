import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detail from './Detail';
import Main from './Main';
import Register from './Register';
import Navbar from './components/NavBar'
import Footer from './components/Footer'

const routers =
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Main></Main>} />
      <Route path='/register' element={<Register></Register>} />
      <Route path='/detail' element={<Detail></Detail>} />
    </Routes>
    <Footer />
  </BrowserRouter>


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(routers);