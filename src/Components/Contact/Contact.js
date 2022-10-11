import React from 'react'
import ContactContent from './ContactContent/ContactContent'
import ContactImage from './ContactImage/ContactImage';
import './Contact.css';
import ContactForm from './ContactForm/ContactForm';

function Contact() {
    return (
        <React.Fragment>
            <div className="contact">
                <div>
                    <ContactImage />
                </div>
                <div>
                    <ContactContent />
                </div>
            </div>
            <h3 style={{ fontStyle: 'bold', fontSize: 35, textAlign: 'center' }}>
                Thanks for taking the time to reach out. How can I help you today?
            </h3>
            <ContactForm />
        </React.Fragment>
    )
}

export default Contact