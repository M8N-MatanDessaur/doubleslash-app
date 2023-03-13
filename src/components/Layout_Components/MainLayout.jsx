import React from "react";
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
                {notes.map((note, index) => <NotePreviewCard key={index} cardId={index} openModal={openModal} noteBody={note.body} noteTitle={note.title} noteExtention={note.extention} noteId={note.id}/>)}
            </ContentContainer>
            <BottomBar/>
        </>
    )
}