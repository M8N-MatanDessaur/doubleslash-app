import React from 'react';
import './App.css';
import MyNotes from './components/Pages/MyNotes';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ButtonDarkLight from './components/UI_Components/ButtonDarkLight';
import LoginForm from './components/Pages/LoginPage';
import SignupForm from './components/Pages/SignupPage';
import { Toaster } from 'react-hot-toast';

const App =()=> {
  return (
    <Router>
     <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <ButtonDarkLight/>
      <Routes>
        <Route path='/notes' element={<MyNotes />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/' element={<Navigate to="/login"/>} />
      </Routes>
    </Router>
  )
}

export default App;
