import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { AuhtContext } from '../../contexts/AuthProvider/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
const RightNav = () => {
    const { signInWithGoogle } = useContext(AuhtContext)
    const handleGoogleSign = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <ButtonGroup vertical className='gap-2'>
                <Button onClick={handleGoogleSign} variant="outline-success" className='rounded'><FaGoogle /> Sign in with Google</Button>
                <Button variant="outline-dark" className='rounded'><FaGithub /> Sing with Github</Button>
            </ButtonGroup>
            <h5 className='mt-4 mb-2'>Find us on</h5>
            <ListGroup>
                <ListGroup.Item className=' boreder'><FaFacebook /> Facebook</ListGroup.Item>
                <ListGroup.Item className=' boreder'><FaTelegram /> Telegram</ListGroup.Item>
                <ListGroup.Item className=' boreder-top'><FaTwitter /> Tweeter</ListGroup.Item>
                <ListGroup.Item className=' boreder'><FaTwitch /> Twitch</ListGroup.Item>
                <ListGroup.Item className='mb-2 boreder'><FaWhatsapp /> WhatsApp</ListGroup.Item>
            </ListGroup>
            <BrandCarousel />
        </div>
    );
};

export default RightNav;