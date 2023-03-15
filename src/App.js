import React, { useState } from 'react';
import './App.css';
import MyNotes from './components/Pages/MyNotes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/notes' element={<MyNotes />} />
      </Routes>
    </Router>
  )
}

export default App;
