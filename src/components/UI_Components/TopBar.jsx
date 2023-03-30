/* eslint-disable react/jsx-no-comment-textnodes */

import React from "react";
import styled from "styled-components";
import profileDefault from '../../assets/images/default.jpg'
import { useNavigate } from "react-router-dom";
import ButtonDarkLight from "./ButtonDarkLight";

export default function TopBar({ title = "//", profileImage = profileDefault, lightMode, stateMode, profile }) {
    const navigate = useNavigate()
    const Disconnect = () => {
        sessionStorage.clear();
        navigate('/login')
    }
    return (
        <Header>
            <Title>{title}</Title>
            <DropDown>
                <PPContainer ><ProfilePicture src={profile} alt="profile" /></PPContainer>
                <DropDownContent class="dropdown-content">
                    <DropActions href="#">
                        <ButtonDarkLight/>
                    </DropActions>
                    <DropActions href="#" onClick={Disconnect}>
                        <svg width="22" height="22" fill="#6a9955" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2v-4h2v4h14V5H5v4H3V5a2 2 0 0 1 2-2Zm6.5 14-1.41-1.41L12.67 13H3v-2h9.67l-2.58-2.59L11.5 7l5 5-5 5Z" clip-rule="evenodd"></path>
                        </svg>
                    </DropActions>
                </DropDownContent>
            </DropDown>

        </Header>
    )
}

const Header = styled.header`
position:absolute;
top:0;
left:0;
height:80px;
width:100vw;
padding: 0 35px;
display:flex;
justify-content:space-between;
align-items:center;
box-shadow: 0 -40px 22px 50px var(--background-color);
z-index:99;
`;

const ProfilePicture = styled.img`
height:45px;
width:45px;
border-radius:100%;
border: solid 2px var(--accent-color-lighter);
`;

const PPContainer = styled.button`
    background:none;
    border:none;
    outline:none;
`;

const Title = styled.h1`
color:var(--accent-color);
`;

const DropDown = styled.div`
position: relative;
  display: inline-block;
  color:var(--text-color);
`;

const DropDownContent = styled.div`
display: none;
position: absolute;
right: -0.5px;
top: 0px;
background-color: var(--overground-color);
color: var(--text-color);
padding: 25px 12px;
padding-top: 61px;
box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px 0px;
z-index: -1;
border-radius: 50px;

${DropDown}:hover &,
& :hover {
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:15px;
    outline:none;
    border:none
  }
`;

const DropActions = styled.a`
text-decoration: none;
display: block;
color:var(--text-color);
outline:none;
border:none;
height:22px;
`;
