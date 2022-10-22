import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuhtContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const navigate = useNavigate();
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuhtContext);
    //show error
    const [error, setError] = useState('');
    //set accepted
    const [accept, setAccept] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                handleUserProfile(name, photoURL);
                handleVerifyEmail();
                console.log(user);
                form.reset();
                setError('');
                navigate('/');
                toast.success('Please verify your email before login.p')
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }
    const handleAccept = (event) => {
        setAccept(event.target.checked)

    }
    const handleUserProfile = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL };
        updateUserProfile(profile);
    }
    const handleVerifyEmail = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your photoURL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Enter photoURL" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Text className="text-danger d-block">
                {error}
            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    onClick={handleAccept}
                    label={
                        <>Accept <Link to='/terms-conditions'>Terms and Conditions</Link></>
                    }
                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accept}>
                Register
            </Button>
        </Form>
    );
};

export default Register;