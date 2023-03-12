// @ts-nocheck

import React from 'react';
import './App.css';
import MainLayout from './components/Layout_Components/MainLayout';
import NoteModal from './components/Notes_Components/NoteModal';

const App = () => {
  return (
    <div className='App'>
      <MainLayout/>
      <NoteModal/>
    </div>
  );
}

export default App;
