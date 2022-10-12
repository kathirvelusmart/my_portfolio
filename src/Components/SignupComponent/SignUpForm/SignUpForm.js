import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import SocialContainer from '../SocialContainer/SocialContainer';
import Button from 'react-bootstrap/Button';
import './SignUpForm.css';
import { auth } from '../../../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function SignUpForm() {
    const [createUser, setCreateUser] = useState({ name: '', email: '', password: '' })

    const inputChanges = (event) => {
        setCreateUser({ ...createUser, [event.target.name]: event.target.value })
    }

    const createNewUser = (event) => {
        event.preventDefault();
        console.log(createUser)
        createUserWithEmailAndPassword(auth, createUser.email, createUser.password).then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            alert("User created successfully..Please login with your Credentials.");
            setCreateUser({ name: '', email: '', password: '', })
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <Form className='form' onSubmit={createNewUser}>
            <h1>Create Account</h1>
            <SocialContainer />
            <span>or use your email for registration</span>
            <Form.Group className="mb-3">
                <Form.Control value={createUser.name} name="name" onChange={inputChanges} type="name" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control value={createUser.email} name="email" onChange={inputChanges} type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control value={createUser.password} name="password" onChange={inputChanges} type="password" placeholder="Password" />
            </Form.Group>
            <Button className="commonButton" type='submit'>
                Sign Up
            </Button>
        </Form>
    )
}

export default SignUpForm