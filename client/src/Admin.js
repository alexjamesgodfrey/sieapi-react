import React, { useRef } from 'react'
import { useAuth } from './contexts/AuthContext.js';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

export default function Admin() {
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    const titleRef = useRef();
    const dateRef = useRef();
    const priceRef = useRef();

    const handleLogout = async () => {
        try {
            await logout();
            history.push('/');
        } catch (error) {
        }
    }

    return (
        <div style={{margin: '30px'}}>
            <h3>admin -- {currentUser.email}</h3>
            <h4>add a work</h4>
            <Form className="w-50">
            <Form.Group id="title">
                <Form.Label id="font-color">title</Form.Label>
                <Form.Control type="text" ref={titleRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="image">
                <Form.Label id="font-color">upload image</Form.Label>
                <Form.Control type="text" ref={dateRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="date">
                <Form.Label id="font-color">date (xx.xx.xx)</Form.Label>
                <Form.Control type="text" ref={dateRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="price">
                <Form.Label id="font-color">price (enter number)</Form.Label>
                <Form.Control type="text" ref={priceRef} required></Form.Control>
            </Form.Group>
            <Button id="loginbutton" className="w-100 mx-auto" variant="warning" type="submit">add work</Button>
            </Form>
            <p id="forgot-link" onClick={handleLogout}>logout</p>
        </div>
    )
}
