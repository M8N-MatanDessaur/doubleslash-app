import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function NoteModal({ modalOpen, closeModal, selectedId, notes }) {

    const [newNote, setNewNote] = useState({
        author: '',
        title: '',
        body: '',
        extention: '',
        dateCreated: '',
        dateModified: '',
    })

    useEffect(()=> {
        setNewNote({
            author: notes[selectedId].author,
            title: notes[selectedId].title,
            body: notes[selectedId].body,
            extention: notes[selectedId].extention,
            dateCreated: notes[selectedId].dateCreated,
            dateModified: '',
        })
    },[selectedId, notes]) 

    const handleChange = event => {

    }

    return (
        <Overlay style={modalOpen} onClick={closeModal}>
            <NotePad onClick={event => event.stopPropagation()}>
                <NoteHeader>
                    <ActionButton onClick={closeModal}>
                        <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z"></path>
                        </svg>
                    </ActionButton>
                    <ActionButton>
                        <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7 0-.24-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92 0-1.61-1.31-2.92-2.92-2.92Z"></path>
                        </svg>
                    </ActionButton>
                </NoteHeader>
                <NoteBody>
                    <NoteTitle type="text" name="title" value={`//${newNote.title}`} onChange={handleChange} />
                    <Note name="body" spellcheck="false" value={newNote.body.toString()} onChange={handleChange}></Note>
                </NoteBody>
                <NoteExtention type="text" name="extention" value={newNote.extention} onChange={handleChange}/>
                <NoteFooter>{`Date Modified ${newNote.dateModified}`}</NoteFooter>
            </NotePad>
        </Overlay>
    )
}

const Overlay = styled.div`
        position:absolute;
        top:0;
        left:0;
        height:100svh;
        width:100vw;
        display:none;
        place-content:center;
        background-color: #000000A0;
        backdrop-filter:blur(2px);
        z-index:100;
    `;

const NotePad = styled.section`
        position:relative;
        height:70svh;
        width:60vw;
        border-radius:5px;
        border: solid 2px #414141A0;
        background-color:var(--foreground-color);

        @media (max-width: 580px){
            height:100svh;
            width:100vw;
        }
    `;

const NoteHeader = styled.div`
        position:absolute;
        top:0;
        left:0;
        height:40px;
        width: -webkit-fill-available;
        padding: 0 17.5px;
        width: -moz-available;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        background:#CCCCCC10;
    `;

const NoteFooter = styled.div`
        position:absolute;
        bottom:0;
        left:0;
        height:40px;
        width: -webkit-fill-available;
        padding: 0 17.5px;
        width: -moz-available;
        display:grid;
        place-content:center;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
        background:#CCCCCC10;
        color:#CCCCCC60;
        font-size:0.8rem;
    `;

//! FIX-FOR-MOZZILA !\\
const NoteBody = styled.div`
        position:absolute;
        top:40px;
        left:0;
        height: calc(70svh - 85px);
        width: -webkit-fill-available;
        padding: 17.5px;
        display:flex;
        flex-direction:column;
        width: -moz-available;
        overflow-y: scroll;
        overflow-x: hidden;

        @media (max-width: 580px){
            height: calc(100svh - 85px);
        }
    `;

const ActionButton = styled.button`
        height: 25px;
        background: none;
        border: none;
        outline: none;
        color: var(--text-color);
        transition: all 100ms ease-in-out;

        &:is(:hover, :focus-visible){
            transform: scale(0.95);
            opacity: 0.6;
        }

        &:active{
            transform: scale(0.8);
            color: var(--accent-color-lighter);
        }
    `;

const NoteTitle = styled.input`
        width:-webkit-fill-available;
        width:-moz-available;
        padding: 8.75px;
        background-color: transparent;
        color: var(--accent-color-lighter);
        outline:none;
        border-radius:50px;
        border: solid 2px #2b2b2b;
        font-size: 1.2rem;
    `;

const Note = styled.textarea`
        outline:none;
        height: -webkit-fill-available;
        height: -moz-available;
        width:-webkit-fill-available;
        width:-moz-available;
        padding: 8.75px;
        display:block;
        white-space: pre-line;
        font-family: var(--code-font);
        background-color: transparent;
        color:var(--text-color);
        border:none;
        resize:none;
        caret-color: var(--accent-color-lighter) 
    `;

const NoteExtention = styled.input`
        position:absolute;
        width: 10ch;
        padding: 0 8.75px;
        bottom: 62.5px;
        right: 17.5px;
        background-color: transparent;
        color: var(--accent-color-lighter);
        outline:none;
        border-radius:50px;
        border: solid 2px #2b2b2b;
        font-size:1.1rem;
    `;