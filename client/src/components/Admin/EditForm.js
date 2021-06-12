import React, { useState, useRef } from 'react'
import app from '../../firebase.js';
import { Form, Button, Alert } from 'react-bootstrap';


export default function EditForm(props) {
    const [alert, setAlert] = useState('')
    const [warning, setWarning] = useState('')

    const [image, setImage] = useState(props.work.image);
    const titleRef = useRef()
    const dateRef = useRef()
    const descriptionRef = useRef()
    const priceRef = useRef()
    const soldRef = useRef()

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

    const handleSubmit = async (e) => {
        setAlert('')
        setWarning('')
        if (!(parseFloat(priceRef.current.value))) {
            return setWarning('must enter a number for price')
        }
        try {
            e.preventDefault();
            const bod = `{
                "image": "${image}",
                "title": "${titleRef.current.value}",
                "date": "${dateRef.current.value}",
                "description": "${descriptionRef.current.value}",
                "price": "${parseFloat(priceRef.current.value)}",
                "sold": "${soldRef.current.value === 'true'}"
            }`
            const resp = await fetch(`/api/editwork/${props.work.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: bod
            })
            return setAlert('successfully uploaded')
        } catch (error) {
            return setWarning('failed. please talk to me or try again.')
        }
    }
    
    return (
        <div style={{ width: '800px'}}>
            {alert && <Alert variant="success">{alert}</Alert>}
            {warning && <Alert variant="danger">{warning}</Alert>}
            <Form className="w-50" onSubmit={(e) => handleSubmit(e)}>
            <Form.Group id="title">
                <Form.Label id="font-color">title</Form.Label>
                    <Form.Control defaultValue={props.work.title} type="text" ref={titleRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="image">
                <Form.Label id="font-color">upload image</Form.Label>
                <Form.File type="file" accept="image/*" onChange={(e) => uploadPicture(e)} />
            </Form.Group>
            <div id="display-container"><img src={props.work.image} id="display" /></div>
            <Form.Group id="date">
                <Form.Label id="font-color">date (xx.xx.xx)</Form.Label>
                    <Form.Control defaultValue={props.work.date} type="text" ref={dateRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="description">
                <Form.Label id="font-color">description</Form.Label>
                <Form.Control defaultValue={props.work.description} as="textarea" rows={3} ref={descriptionRef} required></Form.Control>
                </Form.Group>
            <div className="d-flex justify-content-between">
                <Form.Group id="price">
                    <Form.Label id="font-color">price (enter number)</Form.Label>
                    <div className="d-flex">
                        <span style={{ fontSize: '28px', marginRight: '10px', color: '#ffc0cb' }}>$</span>
                        <Form.Control defaultValue={props.work.price} style={{ width: '80px' }} type="text" ref={priceRef} required></Form.Control>
                    </div>
                </Form.Group>
                <Form.Group id="sold" style={{ width: '100px'}}>
                    <Form.Label id="font-color">sold</Form.Label>
                    <Form.Control defaultValue={props.work.sold} as="select" ref={soldRef} required>
                        <option>false</option>
                        <option>true</option>    
                    </Form.Control>
                </Form.Group>
            </div>
            <Button style={{ color: 'white', margin: '0px auto' }} className="w-50" variant="warning" type="submit">submit edits</Button>
            </Form>
        </div>
    )
}
