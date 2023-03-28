import React, {useEffect, useState, useCallback}  from "react";
import styled from "styled-components";

export default function ButtonDarkLight() {
    const [colorMode, setColorMode] = useState(localStorage.getItem("data-color-mode"));

    const modeChange=useCallback(()=>{
      if (colorMode!=='dark'){
        document.documentElement.setAttribute('data-color-mode','dark');
        localStorage.setItem("data-color-mode","dark");
        setColorMode(localStorage.getItem("data-color-mode"));
      }
      else{
        document.documentElement.setAttribute('data-color-mode','light');
        localStorage.setItem("data-color-mode","light");
        setColorMode(localStorage.getItem("data-color-mode"));
      }
    })
  
    useEffect(()=>{
      if(colorMode!=='dark'){
      document.documentElement.setAttribute('data-color-mode','light');
        localStorage.setItem("data-color-mode","light");
        setColorMode(localStorage.getItem("data-color-mode"));
      }
    },[colorMode])

    return(colorMode==='dark')?<ButtonMode onClick={modeChange} ><svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 9.5a7.5 7.5 0 1 1 12.718 5.388c-.254.245-.45.5-.567.773l-.952 2.212a.626.626 0 0 1-.574.377.625.625 0 1 1 0 1.25.625.625 0 1 1 0 1.25l-.28.559a1.25 1.25 0 0 1-1.118.691h-3.454a1.25 1.25 0 0 1-1.118-.691l-.28-.559a.625.625 0 0 1 0-1.25.625.625 0 0 1 0-1.25.625.625 0 0 1-.575-.377l-.951-2.213a2.454 2.454 0 0 0-.567-.772A7.48 7.48 0 0 1 4.5 9.5ZM12 3.25a6.25 6.25 0 0 0-4.349 10.74c.329.318.643.705.845 1.176L9.287 17h5.428l.79-1.834c.202-.47.516-.858.845-1.176A6.25 6.25 0 0 0 12 3.25Z"></path>
    </svg></ButtonMode>:<ButtonMode onClick={modeChange} ><svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 9.5a7.5 7.5 0 1 1 12.718 5.388c-.254.245-.45.5-.567.773l-.952 2.212a.626.626 0 0 1-.574.377h-6.25a.625.625 0 0 1-.575-.377l-.951-2.213a2.454 2.454 0 0 0-.567-.772A7.48 7.48 0 0 1 4.5 9.5Zm3.75 10.625a.625.625 0 0 1 .625-.625h6.25a.625.625 0 1 1 0 1.25l-.28.559a1.25 1.25 0 0 1-1.118.691h-3.454a1.25 1.25 0 0 1-1.118-.691l-.28-.559a.625.625 0 0 1-.625-.625Z"></path>
</svg></ButtonMode>
}
const ButtonMode = styled.button `
position : absolute;
top: 28px;
right: 100px;
width:fit-content;
outline:none;
border:none;
color:var(--accent-color);
background : var(--background-color);
font : var(--text-font);
z-index : 100;
`;