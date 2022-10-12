import React from 'react';
import { Form } from 'react-bootstrap';
import SocialContainer from '../SocialContainer/SocialContainer';
import Button from 'react-bootstrap/Button';
import './SignUpForm.css';

function SignUpForm() {
    return (
        <Form className='form'>
            <h1>Create Account</h1>
            <SocialContainer />
            <span>or use your email for registration</span>
            <Form.Group className="mb-3">
                <Form.Control type="name" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className="signupBtn">
                Sign Up
            </Button>
        </Form>
    )
}

export default SignUpForm