import React from "react";
import styled from "styled-components";
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function NotePreviewCard({ openModal, noteBody, noteTitle, noteExtention, noteId, cardId }) {
    const lang = 
    (noteExtention === 'js') ? {borderColor:"#e8d44d40"} : 
    (noteExtention === 'php') ? {borderColor:"#4380b040"} : 
    (noteExtention === 'html') ? {borderColor:"#e8622840"} : 
    (noteExtention === 'jsx') ? {borderColor:"#5ed4f340"} : 
    (noteExtention === 'xml') ? {borderColor:"#89b94240"} : 
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
    border: solid 2px var(--accent-color-lighter);
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