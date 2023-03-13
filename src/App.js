// @ts-nocheck

import React, { useState } from 'react';
import './App.css';
import MainLayout from './components/Layout_Components/MainLayout';
import NoteModal from './components/Notes_Components/NoteModal';

const App = () => {

  const [selectedId, setSelectedId] = useState(0);

  //----Modal visibility state-------------------------------------//
  const [modalOpen, setModalOpen] = useState({ display: "none" }); //> Initialise Modal state to display None
  const closeModal = () => {setModalOpen({ display: "none" })};    //> Close Modal
  const openModal  = (e) => {
    setModalOpen({ display: "grid" })
    setSelectedId(e.parentTarget.id);
  };//> Open Modal
  //---------------------------------------------------------------//

  const notes = [
    {  
      id: 0,
      author : "Matan", 
      title : "Imports", 
      body : `import React, { useState } from 'react';
import './App.css';
import MainLayout from './components/Layout_Components/MainLayout';
import NoteModal from './components/Notes_Components/NoteModal';`, 
      extention : ".txt",
      dateCreated: "12-03-2023" 
    },
    {  
      id: 1,
      author : "Matan", 
      title : "Note Object", 
      body : `{  
  author : "Matan", 
  title : "Test", 
  body : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum culpa amet quibusdam eius eveniet debitis non fuga, aperiam mollitia ratione? Provident tenetur cupiditate illum nostrum rerum ullam ex earum modi.", 
  extention : ".txt",
  dateCreated: "12-03-2023" 
}`, 
      extention : ".txt",
      dateCreated: "12-03-2023" 
    },
    {  
      id: 2,
      author : "Matan", 
      title : "Styled Pre", 
      body : ` const Text = styled.pre'
      height:-webkit-fill-available;
      height:100%;
      padding:8.75px;
      overflow: hidden;
      white-space:pre;
  ;`, 
      extention : ".txt",
      dateCreated: "12-03-2023" 
    },
    {  
      id: 3,
      author : "Matan", 
      title : "MainComponent", 
      body : `import React from "react";
      import NotePreviewCard from "../Notes_Components/NotePreviewCard";
      
      //Components
      import BottomBar from '../UI_Components/BottomBar';
      import ContentContainer from '../UI_Components/ContentContainer';
      import TopBar from '../UI_Components/TopBar';
      
      export default function MainLayout({openModal, notes}){
          return(
              <>
                  <TopBar/>
                  <ContentContainer>
                      {notes.map((note, index) => <NotePreviewCard key={index} openModal={openModal} noteBody={note.body} noteExtention={note.extention}/>)}
                  </ContentContainer>
                  <BottomBar/>
              </>
          )
      }`,
      extention : ".txt",
      dateCreated: "12-03-2023" 
    },
    {  
      id: 4,
      author : "Matan", 
      title : "NoteCard Component", 
      body : `    return(
        <NoteCard onClick={openModal}>
            <h3>{noteTitle}</h3>
            <code><Text>{noteBody}</Text></code>
            <Extention>{noteExtention}</Extention>
        </NoteCard>
    )`,
      extention : ".txt",
      dateCreated: "12-03-2023" 
    },
  ]

  return (
    <div className='App'>
      <MainLayout openModal={openModal} notes={notes}/>
      <NoteModal modalOpen={modalOpen} closeModal={closeModal} notes={notes} selectedId={selectedId}/>
    </div>
  );
}

export default App;
