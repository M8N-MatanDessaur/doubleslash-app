import React, { useState } from 'react';
import './App.css';
import MainLayout from './components/Layout_Components/MainLayout';
import NoteModal from './components/Notes_Components/NoteModal';
import useSWR from 'swr';
import axios from 'axios';

const App = () => {

  const [selectedId, setSelectedId] = useState(0);
  //----Modal visibility state-------------------------------------//
  const [modalOpen, setModalOpen] = useState({ display: "none" }); //> Initialise Modal state to display None
  const closeModal = () => { setModalOpen({ display: "none" }) };  //> Close Modal
  const openModal = (e) => {                                       //> Open Modal
    setModalOpen({ display: "grid" })
    setSelectedId(e.currentTarget.id);
  };
  //---------------------------------------------------------------//

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data: notes, error } = useSWR('http://localhost:4040/notes/notes', fetcher);
  if (error) return <div>Error loading notes</div>;
  if (!notes) return <div>Loading...</div>;

  return (
    <div className='App'>
      <MainLayout openModal={openModal} notes={notes} />
      <NoteModal modalOpen={modalOpen} closeModal={closeModal} notes={notes} selectedId={selectedId} />
    </div>
  );
}

export default App;
