import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { mutate } from "swr";
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function NoteModal({ modalOpen, closeModal, selectedId, selectedCard, notes, user }) {
    const modalRef = useRef();
    const API_BASE_URL = "http://127.0.0.1:4040";
    const get_url = `${API_BASE_URL}/notes/notes/${user}`;

    useEffect(() => {

        if (notes.length !== 0) {
            setNewNote({
                author: notes[selectedCard].author,
                title: notes[selectedCard].title,
                body: notes[selectedCard].body,
                extention: notes[selectedCard].extention,
                dateCreated: notes[selectedCard].dateCreated,
                dateModified: notes[selectedCard].dateModified,
            })
        }

        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [modalRef, closeModal, notes, selectedCard])


    const [newNote, setNewNote] = useState({
        author: '',
        title: '',
        body: '',
        extention: '',
        dateCreated: '',
        dateModified: '',
    })

    const handleChange = event => {
        setNewNote(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
        console.log(newNote)
    }

    const editNote = () => {
        return new Promise((resolve, reject) => {
            axios.put(`http://localhost:4040/notes/editNote/${selectedId}`, newNote)
                .then((res) => {
                    console.log("Edit note success:", res.data);
                    resolve();
                })
                .catch((err) => {
                    console.log("Edit note error:", err);
                    reject(err);
                })
        });
    };

    const saveNote = () => {
        console.log("Editing note...");
        editNote()
            .then(() => {
                console.log("Note edited");
            })
            .catch((error) => {
                console.error("Error while editing note:", error);
            });
    };

    const deleteNote = async () => {
        await axios.delete(`http://localhost:4040/notes/deleteNote/${selectedId}`);
        const newNotes = notes.filter((note) => note._id !== selectedId);
        mutate(get_url, newNotes, false);

        window.location.reload();
    };



    return (
        <Overlay isOpen={modalOpen} onClick={closeModal}>
            <NotePad onClick={event => event.stopPropagation()}>
                <NoteHeader>
                    <SDButtons>
                        <ActionButton onClick={saveNote}>
                            <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7l-4-4Zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3ZM5 9h10V5H5v4Z" clipRule="evenodd"></path>
                            </svg>
                        </ActionButton>
                        <ActionButton onClick={deleteNote}>
                            <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M15.5 4H19v2H5V4h3.5l1-1h5l1 1ZM8 21c-1.1 0-2-.9-2-2V7h12v12c0 1.1-.9 2-2 2H8Z" clipRule="evenodd"></path>
                            </svg>
                        </ActionButton>
                    </SDButtons>
                    <ActionButton onClick={closeModal}>
                        <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"></path>
                        </svg>
                    </ActionButton>
                </NoteHeader>
                <NoteBody>
                    <NoteTitle type="text" name="title" value={`${newNote.title}`} onChange={handleChange} />

                    <CodeEditor
                        value={newNote.body}
                        language={newNote.extention}
                        onBlur={(e) => handleChange({ target: { name: "body", value: e.target.value } })}
                        name="body"
                        padding={8.75}
                        style={{
                            height: "100%",
                            background: "var(--foreground-color)",
                            fontFamily: "var(--code-font)",
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
        display: ${({ isOpen }) => (isOpen ? 'grid' : 'none')};
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

const SDButtons = styled.div`
display:flex;
gap:10px
`

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