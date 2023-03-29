import axios from "axios";
import React, { useState } from "react";
import { mutate } from "swr";
import NotePreviewCard from "../Notes_Components/NotePreviewCard";

//Components
import BottomBar from '../UI_Components/BottomBar';
import ContentContainer from '../UI_Components/ContentContainer';
import TopBar from '../UI_Components/TopBar';

export default function MainLayout({openModal, notes, lightMode, stateMode, user, profile}){

    const get_url =  `http://localhost:4040/notes/notes/${user}`;

    const emptyNote = {
        author: user,
        title: '//',
        body: '',
        extention: 'txt',
        dateCreated: Date.now,
        dateModified: Date.now,
    }

    const [search, setSearch] = useState("");

    const newNote = () => {
        axios.post('http://127.0.0.1:4040/notes/newNote', emptyNote)
        .then((res)=>{
            const newNotes = [...notes, res.data]; 
            mutate(newNotes, false);
            axios.get(get_url)
            .then((res) => {
                mutate(get_url, res.data);
              })
        })
    }

    const searchNote = (event) => {
        setSearch(event.target.value)
    }

    return(
        <>
            <TopBar lightMode={lightMode} stateMode={stateMode} profile={profile}/>
            <ContentContainer>
                {notes.map((note, index) => (note.title.includes(search)||note.title.includes(search.toLowerCase())||note.title.includes(search.toUpperCase())||note.title.includes(search.charAt(0).toUpperCase() + search.slice(1))) ? <NotePreviewCard key={index} cardId={index} openModal={openModal} noteBody={note.body} noteTitle={note.title} noteExtention={note.extention} noteId={note._id} user={user}/> : <></>)}
            </ContentContainer>
            <BottomBar newNote={newNote} searchNote={searchNote}/>
        </>
    )
}