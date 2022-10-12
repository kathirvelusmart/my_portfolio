import React from 'react';
import { Form } from 'react-bootstrap';
import SocialContainer from '../SocialContainer/SocialContainer';
import Button from 'react-bootstrap/Button';
import './LoginForm.css';

function LoginForm() {
    return (
        <Form className='form'>
            <h1>Log In</h1>
            <SocialContainer />
            <span>or use your account</span>
            <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <a href='#/' className='forgot-password' >Forgot your password?</a>
            <Button className="signupBtn">
                Log in
            </Button>
        </Form>
    )
}

export default LoginForm