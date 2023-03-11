import React from "react";
import styled from "styled-components";

//MUI
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function BottomBar() {
    const Footer = styled.footer`
    position:absolute;
    bottom:0;
    left:0;
    height:80px;
    width:100vw;
    padding:0 35px;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    gap:17.5px;
    box-shadow: 0 20px 20px 40px var(--background-color);
    z-index:99;
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
             <NoteSearch type="search" name="search-notes" placeholder="Search your notes"/>
            <Fab size="medium" color="success" aria-label="add"><AddIcon /></Fab>
        </Footer>
    )
}