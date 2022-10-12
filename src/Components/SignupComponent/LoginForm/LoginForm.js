import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import SocialContainer from '../SocialContainer/SocialContainer';
import Button from 'react-bootstrap/Button';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../Firebase';

function LoginForm() {
    const [userLoginData, setUserLoginData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const inputChanges = (event) => {
        setUserLoginData({ ...userLoginData, [event.target.name]: event.target.value });
    }
    const navigateToHomePage = (event) => {
        navigate('/home', { replace: true })
    }
    const loginUser = (event) => {
        event.preventDefault();
        console.log(userLoginData)
        signInWithEmailAndPassword(auth, userLoginData.email, userLoginData.password).then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            setUserLoginData({ email: '', password: '', })
            navigateToHomePage();
        }).catch((error) => {
            console.log(error)
            alert(error.message)
        })
    }
    return (
        <Form className='form' onSubmit={loginUser}>
            <h1>Log In</h1>
            <SocialContainer />
            <span>or use your account</span>
            <Form.Group className="mb-3">
                <Form.Control name="email" type="email" value={userLoginData.email} onChange={inputChanges} placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control name="password" type="password" value={userLoginData.password} onChange={inputChanges} placeholder="Password" />
            </Form.Group>
            <a href='#/' className='forgot-password' >Forgot your password?</a>
            <Button className="commonButton" type='submit'>
                Log in
            </Button>
        </Form>
    )
}

export default LoginForm