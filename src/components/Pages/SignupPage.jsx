import React, { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fontFamily } from "@mui/system";
import axios from "axios";
import ButtonDarkLight from "../UI_Components/ButtonDarkLight";

const LoginForm = () => {

    const [signupInfo, setSignupInfo] = useState({avatar: '', firstName: '', lastName: '', email: '', password: '' })
    const navigate = useNavigate()
    const handleChange = (e) => {
        setSignupInfo(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const findUser = await fetch(`http://127.0.0.1:4040/users/getUserByEmail/${signupInfo.email}`)
            const foundUser = await findUser.json();

            // check if user exists in DataBase
            if (foundUser.length !== 0) {
                toast.error(`User exists, Login instead`)
            }
            else {
                axios
                .post('http://127.0.0.1:4040/users/newUser', signupInfo)
                .then((res) => {
                  toast.success(`Welcome`)
                  navigate("/login")
                })
                .catch((err) => console.log(err)) //Catch if any errors
            }
        }
        catch {
            toast.error('An error has occured, try again');
        }
    }
    return (
        <Section>
             <Absolute><ButtonDarkLight/></Absolute>
            <Logo>//</Logo>
            <Form>
                <Comment>//Signup form</Comment>
                <FormGroup>
                    <Num>1.&nbsp; </Num>
                    <Label htmlFor="email"><Const>const</Const> email = </Label>
                    <Input type="email" name="email" id="" onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                    <Num>2.&nbsp; </Num>
                    <Label htmlFor="pass"><Const>const</Const> password = </Label>
                    <Input type="password" name="password" id="" onChange={handleChange}/>
                </FormGroup>

                <FormGroup>
                    <Num>3.&nbsp; </Num>
                    <Label htmlFor="firstName"><Const>const</Const> firstName = </Label>
                    <Input type="text" name="firstName" id="" onChange={handleChange}/>
                </FormGroup>

                <FormGroup>
                    <Num>4.&nbsp; </Num>
                    <Label htmlFor="lastName"><Const>const</Const> lastName = </Label>
                    <Input type="text" name="lasName" id="" onChange={handleChange}/>
                </FormGroup>

                <FormGroup>
                    <Num>5.&nbsp; </Num>
                    <Label htmlFor="avatar"><Const>const</Const> avatar = <SpanButton>[click here]</SpanButton></Label>
                    <Input style={{display:"none"}} type="file" name="avatar" id="avatar" onChange={handleChange}/>
                </FormGroup>

                <FormGroup>
                    <Button type="submit" title="run"  onClick={handleSubmit}>
                        <svg width="29" height="29" fill="var(--text-color)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m16.315 13.316-7.635 4.43c-.648.376-1.48-.079-1.48-.836V8.05c0-.757.83-1.213 1.48-.836l7.635 4.43a.963.963 0 0 1 0 1.672Z"></path>
                        </svg>
                    </Button>
                </FormGroup>
                <br />
                <Link style={{color:"var(--comment-color)", fontSize:"0.8rem", textDecoration:"none"}} to={'/login'}>Login instead</Link>
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

const SpanButton = styled.span`
    color:#5db0d7;
    :hover{
        opacity:0.5;
        cursor:pointer;
    }
`;

const Absolute = styled.div`
    position:absolute;
    top:17.5px;
    right:35px;
`;


export default LoginForm