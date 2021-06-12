import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import Add from './Admin/Add'
import EditForm from './Admin/EditForm'

export default function SmallWork(props) {
    const [warning, setWarning] = useState(false)
    const [add, setAdd] = useState(false)
    const [edit, setEdit] = useState(false)

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

    if (props.mode === 'add') {
        return (
            <div>
                {add ?
                    <div>
                        <Add />
                        <Button style={{ width: '100px', margin: '5px auto 5px auto', color: 'white' }} variant="danger" onClick={() => setAdd(false)}>cancel</Button>
                    </div>
                    :
                    <div className="d-flex flex-column">
                        <img type="svg" alt="work" style={{ width: '150px', margin: '30px 20px 5px 20px' }} src={props.work.image} />
                        <Button style={{ width: '100px', margin: '0px auto 5px auto', color: 'white' }} variant="success" onClick={() => setAdd(true)}>add</Button>
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
                }
            </div>
            
        )
    }

    return (
        <div className="d-flex flex-column">
            <img alt="work" style={{ width: '150px', margin: '30px 20px 5px 20px' }} src={props.work.image} />
            <Button style={{ width: '100px', margin: '0px auto 5px auto' }} variant="info" onClick={() => setEdit(true)}>edit</Button>
            <Button style={{ width: '100px', margin: '0px auto' }} variant="danger" onClick={() => setWarning(true)}>delete</Button>
            <Modal show={edit} onHide={() => setEdit(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit {props.work.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body><EditForm work={props.work} /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setEdit(false)}>Cancel</Button>
                </Modal.Footer>
            </Modal>
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
