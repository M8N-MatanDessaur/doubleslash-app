import React from "react";
import styled from "styled-components";

//MUI
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function BottomBar() {
    const Footer = styled.footer`
    height:80px;
    width:inherit;
    padding:0 35px;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    gap:17.5px
    `;

    const NoteSearch = styled.input`
    height:45px;
    width:270px;
    padding: 0 17.5px;
    border-radius: 50px;
    background-color:var(--background-color);
    border: solid 2px var(--accent-color);
    color:var(--text-color);
    outline:none;
    font-size:1.1rem;
    `;


    return (
        <Footer>
             <NoteSearch type="search" name="search-notes"/>
            <Fab size="medium" color="success" aria-label="add"><AddIcon /></Fab>
        </Footer>
    )
}