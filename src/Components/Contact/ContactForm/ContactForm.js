import React, { useState } from 'react';
import './ContactForm.css';
import Form from 'react-bootstrap/Form';
import { Button, Col, Row } from 'react-bootstrap';
import '../../../App.css';
import { db } from '../../../Firebase';
import { collection, addDoc } from "firebase/firestore";

function ContactForm() {
    const [contactFormData, setContactFormData] = useState({ name: '', email: '', message: '' })

    const inputChanged = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setContactFormData({ ...contactFormData, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addDoc(collection(db, "contactFormData"), contactFormData).then(() => {
            alert("Message submitted Successfully");
            setContactFormData({ name: '', email: '', message: '' })
        }).catch((error) => {
            alert(error.message)
        })
    }

    return (
        <div className="contactForm">
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" value={contactFormData.name} onChange={inputChanged} size='lg' type="text" placeholder="name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>E-mail Address</Form.Label>
                            <Form.Control name="email" value={contactFormData.email} onChange={inputChanged} size='lg' type='email' placeholder="email@example.com" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control name="message" value={contactFormData.message} onChange={inputChanged} as="textarea" rows={3} placeholder="Type Something..." />
                </Form.Group>
                <div style={{ textAlign: 'center' }}>
                    <Button style={{ width: '22%' }} className="commonBtn" type="submit" size='lg'>
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default ContactForm