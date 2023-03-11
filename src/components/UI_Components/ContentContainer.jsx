import React from "react";
import styled from "styled-components";

export default function ContentContainer({children}){
    const Container = styled.section`
        position:absolute;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        top:80px;
        left:0;
        height: calc(100svh - 160px);
        width:100vw;
        padding:35px;
        overflow-y:scroll;
        overflow-x:hidden;
    `;

    return(
        <Container>
            {children}
        </Container>
    )
}