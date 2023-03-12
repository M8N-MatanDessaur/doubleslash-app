import React from "react";
import styled from "styled-components";

export default function NotePreviewCard({openModal, noteBody, noteTitle, noteExtention, noteId}){
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
    `;

    return(
        <NoteCard onClick={openModal}>
            <h3>{noteTitle}</h3>
            <code><Text id={noteId}>{noteBody}</Text></code>
            <Extention>{noteExtention}</Extention>
        </NoteCard>
    )
}