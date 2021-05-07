import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Form, Container, Button, Card, Alert, Spinner } from 'react-bootstrap';
import { useAuth } from './contexts/AuthContext.js';
import './styles/Authentication.scss';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { currentUser, login, logout } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/admin')
        } catch (error) {
            setError('invalid email/password combination');
        }

        setLoading(false)
    }

    const handleLogout = async () => {
        try {
            await logout();
            history.push('/');
        } catch (error) {
        }
    }

    return (
        <div className="signup">
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: '400px'}}>
            <Card>   
                {currentUser ? 
                <p id="forgot-link" onClick={handleLogout}>logout</p>
                :
                <Card.Body>     
                    <h2 id="font-color" className="text-center mb-4">admin</h2>
                    {loading ?
                        <div className="auth-spinner"><Spinner id="auth-spin" variant="warning" animation="border" /></div>
                        :
                        <div>
                            {error && <Alert variant="danger">{error}</Alert>}    
                            <Form onSubmit={handleSubmit} className="d-flex flex-column" >
                                <Form.Group id="email">
                                    <Form.Label id="font-color">email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required></Form.Control>
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label id="font-color">password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required></Form.Control>
                                </Form.Group>
                                <Button disabled={loading} id="loginbutton" className="w-100 mx-auto" variant="warning" type="submit">log in</Button>
                            </Form>
                        </div>
                        }
                </Card.Body>
                }
            </Card>
            </div>
        </Container>
        </div>
    )
}
