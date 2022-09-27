import React from 'react';
import './HomeContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab)

export default function HomeContent() {
    return (
        <div className="greeting-text">
            <div>
                <h1>Kathirvelu  P</h1>
                <h2 style={{ marginTop: 0, marginBottom: 30 }}>
                    Designer, Frontend Developer
                </h2>
                <h5 style={{ marginTop: 0, marginBottom: 30 }}>
                    I design and code beautifully simple things, and I love what I do.
                </h5>
                <h6 style={{ marginTop: 0, marginBottom: 40 }}>
                    A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact
                </h6>
                <span style={{ marginRight: 16 }}>
                    <a href="https://github.com/kathirvelusmart">
                        <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                </span>
                <span style={{ marginRight: 16 }}>
                    <a href="https://www.linkedin.com/in/kathirvelu-p-8080a9174/">
                        <FontAwesomeIcon icon="fab fa-linkedin-in" />
                    </a>
                </span>
                <span style={{ marginRight: 16 }}>
                    <a href="https://www.facebook.com/">
                        <FontAwesomeIcon icon="fab fa-facebook" />
                    </a>
                </span>
                <span style={{ marginRight: 16 }}>
                    <a href="https://twitter.com/" >
                        <FontAwesomeIcon icon="fab fa-twitter" />
                    </a>
                </span>
                <span style={{ marginRight: 16 }}>
                    <a href="https://www.instagram.com/accounts/emailsignup/">
                        <FontAwesomeIcon icon="fab fa-instagram" />
                    </a>
                </span>
                <span style={{ marginRight: 16 }}>
                    <a href="https://www.google.com/" >
                        <FontAwesomeIcon icon="fab fa-google" />
                    </a>
                </span>
            </div>
        </div>
    )
}
