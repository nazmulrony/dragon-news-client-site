import React, { useContext, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuhtContext } from '../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuhtContext);
    const [name, setName] = useState(user?.displayName)
    const photoURlRef = useRef(user?.photoURL);
    const handleSubmit = event => {
        event.preventDefault();
        if (user?.displayName) {
            console.log(name, user?.displayName);
        }
        console.log(photoURlRef.current.value);
    }
    const handleNameChange = event => {
        setName(event.target.value);
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" defaultValue={user?.email} readOnly placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your name</Form.Label>
                <Form.Control onChange={handleNameChange} type="text" placeholder="name" defaultValue={name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>photoURL</Form.Label>
                <Form.Control ref={photoURlRef} type="text" placeholder="Password" defaultValue={user?.photoURL} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Profile;