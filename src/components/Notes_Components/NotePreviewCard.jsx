import React from "react";
import styled from "styled-components";

export default function NotePreviewCard({openModal}){
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
    return(
        <NoteCard onClick={openModal}>
            <code>const greet = "helloworld"</code>
            <Extention>.txt</Extention>
        </NoteCard>
    )
}