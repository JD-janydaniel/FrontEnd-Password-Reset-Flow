import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [token,setToken] = useState('')
  return (
    <div>
      <BrowserRouter>
      <div>
         <ToastContainer />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin setToken={setToken} />} />
        <Route path='/landingpage' element={<LandingPage token={token} />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/resetpassword/:id/:token' element={<ResetPassword />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;