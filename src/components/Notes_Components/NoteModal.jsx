import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mutate } from "swr";
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function NoteModal({ modalOpen, closeModal, selectedId, selectedCard, notes }) {

    const [newNote, setNewNote] = useState({
        author: '',
        title: '',
        body: '',
        extention: '',
        dateCreated: '',
        dateModified: '',
    })

    useEffect(() => {
        setNewNote({
            author: notes[selectedCard].author,
            title: notes[selectedCard].title,
            body: notes[selectedCard].body,
            extention: notes[selectedCard].extention,
            dateCreated: notes[selectedCard].dateCreated,
            dateModified: notes[selectedCard].dateModified,
        })
    }, [selectedCard, notes])

    const handleChange = event => {
        setNewNote(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
    }

    const editNote = () => {
        axios.put(`http://localhost:4040/notes/editNote/${selectedId}`, newNote)
            .then((res) => { console.log(res.data) })
            .catch((err) => console.log(err))
        closeModal()
    }
    // *Eric Gendron
    const deleteNote = () => {
        try {
            axios.delete(`http://localhost:4040/notes/deleteNote/${selectedId}`)
            window.location.reload(false);
        } 
        catch (err) {
            console.log(err);
        }
    }

    return (
        <Overlay style={modalOpen} onClick={editNote}>
            <NotePad onClick={event => event.stopPropagation()}>
                <NoteHeader>
                    <ActionButton onClick={editNote}>
                        <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z" />
                        </svg>
                    </ActionButton>
                    <ActionButton onClick={deleteNote}>
                        <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.583 4.569a2.4 2.4 0 0 1 3.393 0l4.655 4.655a2.4 2.4 0 0 1 0 3.393l-6.6 6.6a2.4 2.4 0 0 1-1.697.704h-3.31a2.4 2.4 0 0 1-1.697-.704l-3-3a2.4 2.4 0 0 1 0-3.393l8.255-8.255Zm2.545.848a1.2 1.2 0 0 0-1.697 0l-5.56 5.56 6.352 6.351 5.56-5.56a1.2 1.2 0 0 0 0-1.696l-4.655-4.655Zm-1.753 12.76-6.352-6.352-1.847 1.847a1.2 1.2 0 0 0 0 1.697l3 3a1.2 1.2 0 0 0 .849.352h3.31a1.2 1.2 0 0 0 .849-.352l.192-.192h-.001Z" />
                        </svg>
                    </ActionButton>
                </NoteHeader>
                <NoteBody>
                    <NoteTitle type="text" name="title" value={`${newNote.title}`} onChange={handleChange} />
  
                        <CodeEditor
                            value={newNote.body}
                            language={newNote.extention}
                            onChange={handleChange}
                            name="body"
                            padding={8.75}
                            style={{
                                 height:"100%",
                                 background: "var(--foreground-color)",
                                 fontFamily:"var(--code-font)",
                            }}
                        />

                </NoteBody>
                <NoteExtention type="text" name="extention" value={newNote.extention} onChange={handleChange} />
                <NoteFooter>{`Date Modified ${newNote.dateModified}`.split('T')[0]}</NoteFooter>
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
        background:#CCCCCC20;
        color:var(--text-color);
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
        color: var(--text-color);
        outline:none;
        border-radius:50px;
        border: solid 2px #2b2b2b;
        font-size: 1.2rem;
    `;

const NoteExtention = styled.input`
        position:absolute;
        width: 10ch;
        padding: 0 8.75px;
        bottom: 62.5px;
        right: 17.5px;
        background-color: transparent;
        color: var(--text-color);
        outline:none;
        border-radius:50px;
        border: solid 2px #2b2b2b;
        font-size:1.1rem;
    `;