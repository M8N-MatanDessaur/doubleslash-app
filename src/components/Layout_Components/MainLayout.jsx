import React from "react";
import NotePreviewCard from "../Notes_Components/NotePreviewCard";

//Components
import BottomBar from '../UI_Components/BottomBar';
import ContentContainer from '../UI_Components/ContentContainer';
import TopBar from '../UI_Components/TopBar';

export default function MainLayout({openModal}){
    return(
        <>
            <TopBar/>
            <ContentContainer>
                <NotePreviewCard openModal={openModal}/>
                <NotePreviewCard openModal={openModal}/>
                <NotePreviewCard openModal={openModal}/>
                <NotePreviewCard openModal={openModal}/>
                <NotePreviewCard openModal={openModal}/>
                <NotePreviewCard openModal={openModal}/>
                <NotePreviewCard openModal={openModal}/>
                <NotePreviewCard openModal={openModal}/>
                <NotePreviewCard openModal={openModal}/>
                <NotePreviewCard openModal={openModal}/>
                <NotePreviewCard openModal={openModal}/>
                <NotePreviewCard openModal={openModal}/>
                <NotePreviewCard openModal={openModal}/>
                <NotePreviewCard openModal={openModal}/>
                <NotePreviewCard openModal={openModal}/>
                <NotePreviewCard openModal={openModal}/>
                <NotePreviewCard openModal={openModal}/>
                <NotePreviewCard openModal={openModal}/>
                <NotePreviewCard openModal={openModal}/>
                <NotePreviewCard openModal={openModal}/>
            </ContentContainer>
            <BottomBar/>
        </>
    )
}