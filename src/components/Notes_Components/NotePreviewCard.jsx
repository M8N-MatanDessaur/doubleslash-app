import React from "react";
import styled from "styled-components";

export default function NotePreviewCard({openModal, noteBody, noteTitle, noteExtention, noteId, cardId}){
    return(
        <NoteCard onClick={openModal} id={cardId} data-note={noteId}>
            <h3>{noteTitle}</h3>
            <code><Text>{noteBody}</Text></code>
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

value : ${props => props.noteId}
`;

const Extention = styled.p`
position:absolute;
bottom:10px;
right:10px;
color:#CCCCCC40;
`;

const Text = styled.pre`
height:-webkit-fill-available;
height:100%;
padding:8.75px;
overflow: hidden;
white-space:pre;
font-size: smaller;
font-family: var(--code-font);
`;