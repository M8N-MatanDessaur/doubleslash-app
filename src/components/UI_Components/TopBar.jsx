/* eslint-disable react/jsx-no-comment-textnodes */

import React  from "react";
import styled from "styled-components";
import profileDefault from '../../assets/images/default.jpg'
import { useNavigate } from "react-router-dom";

export default function TopBar({title="//", profileImage=profileDefault, lightMode, stateMode, profile}){
    const navigate = useNavigate()
    const Disconnect = () =>{
        sessionStorage.clear();
        navigate('/login')
    }
    return(
        <Header>
            <Title>{title}</Title>
            <PPContainer onClick={Disconnect}><ProfilePicture src={profile} alt="profile" /></PPContainer>
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

