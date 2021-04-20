import React,{useState} from 'react';
import '../App.css';
import {Container, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


const initialState = {
    id:'',
    email:'',
    name:'',
    college:'',
    branch:'',
    project:'',
}
const UserForm = () => {

    const [data, setData] = useState(initialState);
    const history = useHistory();

    const handleChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            [e.target.name]:e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);

        axios.post('https://sheet.best/api/sheets/c1b53c25-5a7f-473a-8ac9-b159c67a69c1',data)
            .then((data)=>{
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            })
        history.push("/submitted-successfully");
    }

    return (
        <>
            <Container style={{ width: '30rem', padding:'20px' }} className="container">

                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicId">
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" value={data.id} onChange={handleChange} name="id" placeholder="Enter ID(min 6 digit)" required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={data.email} onChange={handleChange} name="email" placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={data.name} onChange={handleChange} name="name" placeholder="Enter Name" required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCollegeName">
                        <Form.Label>College Name</Form.Label>
                        <Form.Control type="text" value={data.college} onChange={handleChange} name="college" placeholder="Enter College Name" required/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select Branch</Form.Label>
                        <Form.Control as="select" name="branch" value={data.branch} onChange={handleChange} required>
                            <option value="" defaultValue>Select Branch</option>
                            <option value="cse">CSE</option>
                            <option value="ece">ECE</option>
                            <option value="eee">EEE</option>
                            <option value="it">IT</option>
                            <option value="mech">MECH</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicProjectTitle">
                        <Form.Label>Project Title</Form.Label>
                        <Form.Control type="text" value={data.project} onChange={handleChange} name="project" placeholder="Enter Project Title" required/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                
            </Container>
        </>
    )
}

export default UserForm;
