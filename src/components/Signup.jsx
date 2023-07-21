import React, { useState } from 'react'
import {
    MDBContainer,
    MDBBtn,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://127.0.0.1:8000/signup', {
            'name': name,
            'username': username,
            'email': email,
            'password': password
        })
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <form method='post'>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                <h1 className='text-center my-5'>Signup Page</h1>
                <MDBInput wrapperClass='mb-4' label='Name' id='form1' onChange={(e) => {setName(e.target.value)}} type='text' />
                <MDBInput wrapperClass='mb-4' label='Username' id='form1' onChange={(e) => {setUsername(e.target.value)}} type='text' />
                <MDBInput wrapperClass='mb-4' label='Email' id='form1' onChange={(e) => {setEmail(e.target.value)}} type='email' />
                <MDBInput wrapperClass='mb-4' label='Password' id='form1' onChange={(e) => {setPassword(e.target.value)}} type='password' />

                <div className='d-flex justify-content-center mb-4'>
                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
                </div>

                <MDBBtn className="mb-4 w-100" onClick={handleSubmit}>Sign up</MDBBtn>

                <div className="text-center">
                    <p>Alreay a member? <Link to="/">Login</Link></p>
                </div>
            </MDBContainer>
        </form>
    )
}
