import React, { useRef, useState } from 'react'
import { useAuth } from './contexts/AuthContext.js';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import app from './firebase.js';
import './styles/Admin.scss'

export default function Admin() {
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    const [image, setImage] = useState();

    const titleRef = useRef();
    const dateRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const soldRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const bod = `{
            "image": "${image}",
            "title": "${titleRef.current.value}",
            "date": "${dateRef.current.value}",
            "description": "${descriptionRef.current.value}",
            "price": "${parseFloat(priceRef.current.value)}",
            "sold": "${soldRef.current.value === 'true'}"
        }`
        console.log(bod);
        const resp = await fetch('/api/creatework', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: bod
        })
        console.log(resp)
    }

    const uploadPicture = async (e) => {
        try {
            const file = e.target.files[0];
            const storageRef = app.storage().ref();
            const fileRef = storageRef.child(file.name);
            await fileRef.put(file);
            const url = await fileRef.getDownloadURL();
            setImage(url);
            console.log(url)
        } catch (error) {
            console.log('upload failed');
        }
    }

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
                <Form.File type="file" accept="image/*" onChange={(e) => uploadPicture(e)} />
            </Form.Group>
            <div id="display-container"><img src={image} id="display" /></div>
            <Form.Group id="date">
                <Form.Label id="font-color">date (xx.xx.xx)</Form.Label>
                <Form.Control type="text" ref={dateRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="description">
                <Form.Label id="font-color">description</Form.Label>
                <Form.Control type="text" ref={descriptionRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="price">
                <Form.Label id="font-color">price (enter number)</Form.Label>
                <Form.Control type="text" ref={priceRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="sold">
                <Form.Label id="font-color">sold</Form.Label>
                <Form.Control as="select" ref={soldRef} required>
                    <option>false</option>
                    <option>true</option>    
                </Form.Control>
            </Form.Group>
            <Button id="loginbutton" className="w-100 mx-auto" variant="warning" type="submit" onClick={(e) => handleSubmit(e)}>add work</Button>
            </Form>
            <p id="forgot-link" onClick={handleLogout}>logout</p>
        </div>
    )
}
