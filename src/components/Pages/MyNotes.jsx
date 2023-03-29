import React, { useState } from 'react';
import MainLayout from '../Layout_Components/MainLayout';
import NoteModal from '../Notes_Components/NoteModal';
import useSWR, { mutate } from 'swr';
import axios from 'axios';


export default function MyNotes() {

    const [selectedCard, setselectedCard] = useState(0);
    const [selectedId, setSelectedId] = useState(0);
    const connectedUser = sessionStorage.getItem("connectedUser");
    const profilePicture = sessionStorage.getItem("profile");
    const get_url =  `http://localhost:4040/notes/notes/${connectedUser}`;
  
    //----Modal visibility state-------------------------------------//
    const [modalOpen, setModalOpen] = useState({ display: "none" }); //> Initialise Modal state to display None

    const closeModal = () => { 
      axios.get(get_url)
      .then((res) => {
        mutate(get_url, res.data);
        setModalOpen({ display: "none" });
      })
    };                                                              
    
    const openModal = (e, noteId) => {   
      axios.get(get_url)
      .then((res) => {
        mutate(get_url, res.data); 
      })
      setModalOpen({ display: "grid" });
      setselectedCard(e.currentTarget.id); //> Get the card ID
      setSelectedId(e.currentTarget.getAttribute('data-note')) //> Get the note ID
    };
    //---------------------------------------------------------------//
  
    const fetcher = (url) => axios.get(url).then((res) => res.data);
    const { data: notes, error } = useSWR(get_url, fetcher);
    if (error) return <div>Error loading notes</div>;
    if (!notes) return <div>Loading...</div>;
    return (
      <div className='App'>
        <MainLayout openModal={openModal} notes={notes} user={connectedUser} profile={profilePicture}/>
        <NoteModal modalOpen={modalOpen} closeModal={closeModal} notes={notes} selectedId={selectedId} selectedCard={selectedCard}/>
      </div>
    );
  }