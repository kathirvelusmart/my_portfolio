import React from 'react';
import SocialMediaComponent from '../../../SocialMediaComponent/SocialMediaComponent';
import './ContactContent.css';

function ContactContent() {
    return (
        <div className="contactContent">
            <h2 className="contentTitle" style={{ marginBottom: 31 }}>Contact Me</h2>
            <h4>
                I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you Angular ,React Website Development.
            </h4>
            <div style={{ marginTop: 20 }}>
                <SocialMediaComponent />
            </div>
        </div >
    )
}

export default ContactContent