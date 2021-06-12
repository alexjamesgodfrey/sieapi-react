import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext.js';
import { useHistory } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import app from './firebase.js';
import SmallWork from './components/SmallWork'
import Add from './components/Admin/Add'
import Edit from './components/Admin/Edit'
import './styles/Admin.scss'

export default function Admin() {
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    const [works, setWorks] = useState([])

    const getWorks = async () => {
        const arr = await fetch('/api/works');
        const arrJson = await arr.json();
        setWorks(arrJson);
        console.log(works)
    }

    const handleLogout = async () => {
        try {
            await logout();
            history.push('/');
        } catch (error) {
        }
    }

    useEffect(() => {
        getWorks()
    }, [])

    return (
            <div style={{ margin: '20px auto', width: '800px'}}>
            <div className="d-flex justify-content-between" style={{ width: '800px' }}>
                <h3>admin -- {currentUser.email}</h3>
                <Link to="/"><h3 style={{ textDecoration: 'none' }}>go home</h3></Link>
                <a><h3 onClick={handleLogout} style={{cursor: 'pointer' }}>logout</h3></a>
            </div>
            <Edit works={works}/>
            
            </div>
    )
}
