import React from 'react';
import {Navbar} from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" variant="dark" bg="dark">
                <Navbar.Brand href="#" className="mx-auto">Google Sheets REST API using React</Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default NavBar;
