import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login({ saveUserData }) {
    const navigate = useNavigate()
    const [isLoading, setisLoading] = useState(false)
    const [error, setError] = useState('')
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    function getUserData(e) {
        let myUser = { ...user };
        myUser[e.target.name] = e.target.value
        setUser(myUser);
    }

    async function sendLoginDataToApi() {
        let { data } = await axios.post(`https://movies-api.routemisr.com/signin`, user);
        if (data.message === 'success') {
            localStorage.setItem('userToken', data.token);
            saveUserData();
            navigate('/home')
        }
        else {
            setisLoading(false);
            setError(data.message)
        }
    }

    function submitLoginDataToApi(e) {
        e.preventDefault();
        setisLoading(true)
        sendLoginDataToApi();
    }

    return <>
        <form className='w-sm-100 mx-auto' onSubmit={submitLoginDataToApi}>
            <label htmlFor="email">Email :</label>
            <input onChange={getUserData} type="text" name='email' className='form-control my-2' />
            <label htmlFor="password">Password :</label>
            <input onChange={getUserData} type="password" name='password' className='form-control my-2' />
            <button className='btn btn-info' type='submit' >{isLoading ? <i className='fas fa-spin fa-spinner'></i> : 'Login'}</button>
        </form>
    </>
}
