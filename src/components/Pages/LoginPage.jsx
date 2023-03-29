import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fontFamily } from "@mui/system";

const LoginForm = () => {
    const navigate = useNavigate()

    const [loginInfo, setLoginInfo] = useState({email: '', password: '' })
    const handleChange = (e) => {
        setLoginInfo(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    useEffect(()=>{
        if (sessionStorage.length !== 0) {
            navigate('/notes');
        }
    })
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const findUser = await fetch(`http://127.0.0.1:4040/users/getUserByEmail/${loginInfo.email}`)
            const foundUser = await findUser.json();

            // check if user exists in DataBase
            if (foundUser.length === 0) {
                toast.error(`User does not exists, Sign Up`)
            }
            else {
                if (loginInfo.password === foundUser[0].password) {
                    toast.success(`Connection`)
                    sessionStorage.setItem("connectedUser", foundUser[0].email);
                    sessionStorage.setItem("profile", foundUser[0].avatar);
                    sessionStorage.setItem("firstName", foundUser[0].firstName);
                    sessionStorage.setItem("lastName", foundUser[0].lastName);
                    navigate('/notes')
                }
                else {
                    console.log(foundUser[0].password)
                    toast.error('Email or Password Inccorect');
                }
            }
        }
        catch {
            toast.error('Email or Password Inccorect');
        }
    }
    return (
        <Section>
            <Logo>//</Logo>
            <Form>
                <Comment>//Login form</Comment>
                <FormGroup>
                    <Num>1.&nbsp; </Num>
                    <Label htmlFor="email"><Const>const</Const> email = </Label>
                    <Input type="email" name="email" id="" onChange={handleChange}/>
                </FormGroup>

                <FormGroup>
                    <Num>2.&nbsp; </Num>
                    <Label htmlFor="password"><Const>const</Const> password = </Label>
                    <Input type="password" name="password" id="" onChange={handleChange}/>
                </FormGroup>

                <FormGroup>
                    <Button type="submit" title="run" onClick={handleSubmit}>
                        <svg width="29" height="29" fill="var(--text-color)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m16.315 13.316-7.635 4.43c-.648.376-1.48-.079-1.48-.836V8.05c0-.757.83-1.213 1.48-.836l7.635 4.43a.963.963 0 0 1 0 1.672Z"></path>
                        </svg>
                    </Button>
                </FormGroup>
                <br />
                <Link style={{color:"var(--comment-color)", fontSize:"0.8rem", textDecoration:"none"}} to={'/signup'}>Signup instead</Link>
            </Form>
        </Section>
    )
}

const Section = styled.section`
    height: 100svh;
    width: 100vw;
    display: grid;
    place-content: center;
    font-family: var(--code-font)`;

const Form = styled.form`
    border: solid 1px var(--accent-color);
    border-radius:15px;
    padding: 35px;
    background:var(--foreground-color);

    position:relative;
`;

const FormGroup = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
`;

const Comment = styled.p`
 color:#6a9955;
`;

const Const = styled.span`
    color: #DA70D6;
`;

const Label = styled.label`
    color:var(--text-color);
`;

const Num = styled.p`
    color:gray;
`;


const Button = styled.button`
    background:none;
    color-var(--text-color);
    border:none;
    outline:none;

    position:absolute;
    top:5px;
    right:5px;

    transition: all 100ms;

    :hover{
        opacity:0.5;
        transform: scale(1.2);
    }
`;

const Input = styled.input`
    border:none;
    outline:none;
    background:none;
    padding 0 10px;
    color: var(--text-color);
`;

const Logo = styled.h1`
    position:absolute;
    top:15px;
    left:35px;
    color:var(--accent-color)
`;


export default LoginForm