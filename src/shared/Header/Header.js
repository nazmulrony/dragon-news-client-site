import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BsPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AuhtContext } from '../../contexts/AuthProvider/AuthProvider';
import Leftnav from '../LeftNav/Leftnav';

const Header = () => {
    const { user, logOut } = useContext(AuhtContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }
    return (
        <div className='mb-3'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Link to="/" className='text-decoration-none fs-3 text-black'>Dragon News</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to="/" as={Link}>Home</Nav.Link>
                            <Nav.Link href="#pricing">All News</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <div className='my-auto'>
                                {
                                    user?.uid ? <>
                                        <span className='my-auto text-secondary'>{user?.displayName}</span>
                                        <Button onClick={handleLogOut} size='sm' variant='light' className="ms-2 py-0">Logout</Button>

                                    </>
                                        :
                                        <div className='d-flex'>
                                            <Nav.Link to="/login" as={Link}>Login</Nav.Link>
                                            <Nav.Link to="/register" as={Link}>Register</Nav.Link>
                                        </div>

                                }
                            </div>


                            <Nav.Link as={Link} to="/profile">
                                {user?.photoURL ?
                                    <>
                                        <img src={user.photoURL} style={{ height: '35px' }} className="rounded-circle m-0" alt="" />

                                    </>
                                    :
                                    < BsPersonFill />
                                }
                            </Nav.Link>
                        </Nav>
                        <div className='d-lg-none'>
                            <Leftnav />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;