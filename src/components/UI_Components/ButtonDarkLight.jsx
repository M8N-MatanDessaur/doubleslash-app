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

    return(colorMode==='dark')?<ButtonMode onClick={modeChange} ><svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3Zm0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5ZM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1Zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1ZM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1Zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1ZM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .38-.39.39-1.03 0-1.41L5.99 4.58Zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06Zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.41 0l1.06-1.06ZM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.41 0l1.06-1.06Z"></path>
  </svg></ButtonMode>:<ButtonMode onClick={modeChange} ><svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.5 4c.34 0 .68.02 1.01.07A11.995 11.995 0 0 0 12.5 12c0 2.95 1.1 5.77 3.01 7.93-.33.05-.67.07-1.01.07-4.41 0-8-3.59-8-8s3.59-8 8-8Zm0-2c-5.52 0-10 4.48-10 10s4.48 10 10 10c1.82 0 3.53-.5 5-1.35-2.99-1.73-5-4.95-5-8.65s2.01-6.92 5-8.65a9.973 9.973 0 0 0-5-1.35Z"></path>
</svg></ButtonMode>
}
const ButtonMode = styled.button `
position : absolute;
top: 22px;
right: 100px;
height:45px;
width:fit-content;
outline:none;
border:none;
color:var(--accent-color);
background : var(--background-color);
font : var(--text-font);
z-index : 100;
`;