import React from 'react';
import '../App.css';

import {Link} from 'react-router-dom';
import {Form} from 'react-bootstrap';

const SuccessMessage = () => {
    return (
        <div className="success">
            <h4>Thanks  for Submitting Your Details.</h4>
            <Form>
                <Link to="/">Fill another Entry</Link>
            </Form>
        </div>
    )
}

export default SuccessMessage;
