import React from 'react';
import './SignupComponent.css';
import Button from 'react-bootstrap/Button';
import LoginForm from './LoginForm/LoginForm';
import SignUpForm from './SignUpForm/SignUpForm';


function SignupComponent() {

    const addRightPanelActive = () => {
        const container = document.getElementById('container');
        container.classList.add('right-panel-active');
    }

    const removeRightPanelActive = () => {
        const container = document.getElementById('container');
        container.classList.remove("right-panel-active");
    }

    return (
        <div className='container' id='container'>
            <div className="form-container sign-up-container">
                <SignUpForm />
            </div>
            <div className="form-container login-container">
                <LoginForm />
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome back!</h1>
                        <p>Already have an account? Log In</p>
                        <Button onClick={removeRightPanelActive}>Log In</Button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, There!</h1>
                        <p>Don't have an account? Sign Up Free</p>
                        <Button onClick={addRightPanelActive}>Sign Up</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupComponent