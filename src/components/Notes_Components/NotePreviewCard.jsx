import React from "react";
import styled from "styled-components";
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function NotePreviewCard({ openModal, noteBody, noteTitle, noteExtention, noteId, cardId }) {
    const lang = 
    (noteExtention === 'js') ? {borderColor:"#e8d44d60"} : 
    (noteExtention === 'php') ? {borderColor:"#53509080"} : 
    (noteExtention === 'html') ? {borderColor:"#e8622860"} : 
    (noteExtention === 'jsx') ? {borderColor:"#5ed4f360"} : 
    (noteExtention === 'xml') ? {borderColor:"#89b94260"} : 
    (noteExtention === 'py') ? {borderColor:"#366e9d60"} : 
    (noteExtention === 'java') ? {borderColor:"#7c007c80"} : 
    {borderColor:"#CCCCCC40"} 
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
color:#CCCCCC40;
`;

// const Text = styled.pre`
// height:85%;
// padding:8.75px;
// overflow: hidden;
// white-space:pre;
// font-size: smaller;
// font-family: var(--code-font);
// `;