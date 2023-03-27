import React from 'react';
import './App.css';
import MyNotes from './components/Pages/MyNotes';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ButtonDarkLight from './components/UI_Components/ButtonDarkLight';

const App =()=> {
  return (
    <Router>
      <ButtonDarkLight/>
      <Routes>
        <Route path='/notes' element={<MyNotes />} />
        <Route path='/' element={<Navigate to="/notes"/>} />
      </Routes>
    </Router>
  )
}

export default App;
