import React, {useEffect} from "react";
import styled from "styled-components";
import CodeEditor from '@uiw/react-textarea-code-editor';
import axios from "axios";
import { mutate } from "swr";

export default function NotePreviewCard({ openModal, noteBody, noteTitle, noteExtention, noteId, cardId, user }) {
    const lang = 
    (noteExtention === 'js') ? {borderColor:"#e8d44df0"} : 
    (noteExtention === 'php') ? {borderColor:"#653ae0f0"} : 
    (noteExtention === 'html') ? {borderColor:"#e86228f0"} : 
    (noteExtention === 'jsx') ? {borderColor:"#007accf0"} : 
    (noteExtention === 'xml') ? {borderColor:"#89b942f0"} : 
    (noteExtention === 'py') ? {borderColor:"#366e9df0"} : 
    (noteExtention === 'java') ? {borderColor:"#7c007cf0"} : 
    (noteExtention === 'cs') ? {borderColor:"#329171f0"} : 
    (noteExtention === 'css') ? {borderColor:"#4acffff0"} : 
    {borderColor:"#CCCCCC40"} 

    const get_url =  `http://localhost:4040/notes/notes/${user}`;

    return (
        <NoteCard onClick={openModal} id={cardId} data-note={noteId} style={lang}>
            <h3>{noteTitle}</h3>
            <CodeEditor 
                value={noteBody}
                language={noteExtention}
                name="body"
                contentEditable={false}
                disabled={true}
                style={{
                    height: "70%",
                    overflow: "hidden",
                    whiteSpace:"pre !important",
                    fontSize: "smaller",
                    fontFamily: "var(--code-font)",
                    backgroundColor:"transparent",
                }}
                />
                
            <Extention>{noteExtention}</Extention>
        </NoteCard>
    )
}

const NoteCard = styled.article`
position:relative;
max-height:350px;
height:50vw;
margin: 17.5px;
aspect-ratio:5/7;
padding:17.5px;
border-radius:5px;
border: solid 2px #CCCCCC40;
font-size:0.8rem;
background-color: var(--foreground-color);

&:is(:hover, :focus-visible){
    transform: scale(1.05);
    border: solid 2px var(--accent-color-lighter) !important;
  }

value : ${props => props.noteId}
`;

const Extention = styled.p`
position:absolute;
bottom:10px;
right:10px;
color:var(--comment-color);
`;

// const Text = styled.pre`
// height:85%;
// padding:8.75px;
// overflow: hidden;
// white-space:pre;
// font-size: smaller;
// font-family: var(--code-font);
// `;