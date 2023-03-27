import React, { useState } from 'react';
import './App.css';
import MainLayout from './components/Layout_Components/MainLayout';
import NoteModal from './components/Notes_Components/NoteModal';
import useSWR, { mutate } from 'swr';
import axios from 'axios';

const App = () => {

  const [selectedCard, setselectedCard] = useState(0);
  const [selectedId, setSelectedId] = useState(0);

  //----Modal visibility state-------------------------------------//
  const [modalOpen, setModalOpen] = useState({ display: "none" }); //> Initialise Modal state to display None
  const closeModal = () => { 
    mutate('http://localhost:4040/notes/notes')
    setModalOpen({ display: "none" }) 
  };                                                              
  const openModal = (e, noteId) => {   
    mutate('http://localhost:4040/notes/notes') //! to test                           
    setModalOpen({ display: "grid" })
    setselectedCard(e.currentTarget.id);                           //> Get the card ID
    setSelectedId(e.currentTarget.getAttribute('data-note'))       //> Get the note ID
  };
  //---------------------------------------------------------------//

  //------------ButtonMode----------------------------------

  const [isLightMode, setIsLightMode] = useState(false);

//window.matchMedia('(prefers-color-scheme: dark)').matches
  const lightMode =()=>{

    if (isLightMode){
      setIsLightMode(!isLightMode);
      document.documentElement.setAttribute('data-color-mode', 'dark');
      //localStorage.setItem('data-color-mode','dark');
      
    }
    else{
      setIsLightMode(!isLightMode);
      document.documentElement.setAttribute('data-color-mode', 'light');
      //localStorage.setItem('data-color-mode','light');
    }
  }
  //-------------------------------------------------

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data: notes, error } = useSWR('http://localhost:4040/notes/notes', fetcher);
  if (error) return <div>Error loading notes</div>;
  if (!notes) return <div>Loading...</div>;

  return (
    <div className='App'>
      <MainLayout openModal={openModal} notes={notes} lightMode={lightMode} stateMode={isLightMode} />
      <NoteModal modalOpen={modalOpen} closeModal={closeModal}  notes={notes} selectedId={selectedId} selectedCard={selectedCard}/>
    </div>
  );
}

export default App;
