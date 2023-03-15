import React from "react";
import styled from "styled-components";

//MUI
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function BottomBar({newNote, searchNote}) {
    return (
        <Footer>
            <NoteSearch onChange={searchNote} type="search" name="search-notes" placeholder="Search your notes"/>
            <Fab onClick={newNote} size="medium" color="success" aria-label="add" sx={{minWidth: "48px !important"}}><AddIcon /></Fab>
        </Footer>
    )
}


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
    box-shadow: 0 40px 22px 50px var(--background-color);
    z-index:99;

    @media (max-width: 530px) {
        justify-content:center;
      }
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

