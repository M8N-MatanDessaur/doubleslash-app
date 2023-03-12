// @ts-nocheck

import React, { useState } from 'react';
import './App.css';
import MainLayout from './components/Layout_Components/MainLayout';
import NoteModal from './components/Notes_Components/NoteModal';

const App = () => {
  //----Modal visibility state-------------------------------------//
  const [modalOpen, setModalOpen] = useState({ display: "none" }); //Initialise Modal state to display None
  const closeModal = () => {setModalOpen({ display: "none" })}     //Close Modal
  const openModal  = () => {setModalOpen({ display: "grid" })}     //Open Modal
  //---------------------------------------------------------------//
  return (
    <div className='App'>
      <MainLayout openModal={openModal}/>
      <NoteModal modalOpen={modalOpen} closeModal={closeModal} />
    </div>
  );
}

export default App;
