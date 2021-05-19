import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

export default function SmallWork(props) {
    const [warning, setWarning] = useState(false)

    const del = async () => {
        try {
            await fetch(`/api/deletework/${props.work.id}`, {
                method: "DELETE"
            })
            setWarning(false)
            props.reload()
        } catch (error) {
            console.log('did not delete work')
        }
    
    }

    return (
        <div className="d-flex flex-column">
            <img alt="work" style={{ width: '150px', margin: '20px' }} src={props.work.image} />
            <Button style={{ width: '100px', margin: '0px auto' }} variant="danger" onClick={() => setWarning(true)}>delete</Button>
            <Modal show={warning} onHide={() => setWarning(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>This action is irreversible . Please ensure that you want to delete <strong>{props.work.title}</strong></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setWarning(false)}>Cancel</Button>
                    <Button variant="danger" onClick={() => del()}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
