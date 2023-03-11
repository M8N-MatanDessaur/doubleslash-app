/* eslint-disable react/jsx-no-comment-textnodes */

import React from "react";
import styled from "styled-components";
import profileDefault from '../../assets/images/default.jpg'

export default function TopBar({title="//DoubleSlash", profileImage=profileDefault}){
    const Header = styled.header`
    height:80px;
    width:inherit;
    padding: 0 35px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    `;

    const ProfilePicture = styled.img`
    height:45px;
    width:45px;
    border-radius:100%;
    border: solid 2px var(--accent-color-lighter);
    `;

    const Title = styled.h1`
    color:var(--accent-color);
    `;

    return(
        <Header>
            <Title>{title}</Title>
            <ProfilePicture src={profileImage} alt="profile" />
        </Header>
    )
}