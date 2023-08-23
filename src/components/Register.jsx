import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Joi from 'joi';



export default function Register() {
    const [isLoading, setisLoading] = useState(false)
    const [error, setError] = useState('')
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        age: 0,
        password: ''
    })
    const [errorList, setErrorList] = useState([])
    const navigate = useNavigate();

    function getUserData(e) {
        let myUser = { ...user };
        myUser[e.target.name] = e.target.value;
        setUser(myUser)
    }

    async function sendRegisterDataToApi() {
        let { data } = await axios.post(`https://movies-api.routemisr.com/signup`, user)
        if (data.message === 'success') {
            setisLoading(false);
            navigate('/login');
        }
        else {
            setisLoading(false);
            setError(data.message)
        }
    }

    function submitRegisterDataToApi(e) {
        e.preventDefault();
        setisLoading(true);
        const validation = validateRegisterForm();
        console.log(validation);
        if (validation.error) {
            setErrorList(validation.error.details)
            setisLoading(false)
        }
        else {
            sendRegisterDataToApi();
        }
    }

    function validateRegisterForm() {
        const schema = Joi.object({
            first_name: Joi.string().min(3).max(10).required(),
            last_name: Joi.string().min(3).max(10).required(),
            age: Joi.number().required().min(18),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string().required()
        })
        return schema.validate(user, { abortEarly: false })
    }


    return <>
        <form onSubmit={submitRegisterDataToApi}>
            <label htmlFor="firt_name">First Name:</label>
            <input onChange={getUserData} type="text" name='first_name' className='form-control my-2' />
            {/* {errorList.map((err ,index)=><div className="alert alert-danger my-2" key={index}>{err.context.label.replace("_", " ")}{err.message.replace(`"${err.context.label}"`,"")} </div>) } */}
            <p className='text-danger'>
                {errorList.filter((err) => err.context.label == "first_name")[0]?.message.replace(`"first_name"`, "First name")}
            </p>
            <label htmlFor="last_name">Last Name:</label>
            <input onChange={getUserData} type="text" name='last_name' className='form-control my-2' />
            <p className='text-danger'>
                {errorList.filter((err) => err.context.label == "last_name")[0]?.message.replace(`"last_name"`, "Last name")}
            </p>
            <label htmlFor="emial">Email:</label>
            <input onChange={getUserData} type="text" name='email' className='form-control my-2' />
            <p className='text-danger'>
                {errorList.filter((err) => err.context.label == "email")[0]?.message.replace(`"email"`, "Email")}
            </p>
            <label htmlFor="age">Age:</label>
            <input onChange={getUserData} type="number" name='age' className='form-control my-2' />
            <p className='text-danger'>
                {errorList.filter((err) => err.context.label == "age")[0]?.message.replace(`"age"`, "Age")}
            </p>
            <label htmlFor="password">Password:</label>
            <input onChange={getUserData} type="password" name='password' className='form-control my-2' />
            <p className='text-danger'>
                {errorList.filter((err) => err.context.label == "password")[0]?.message.replace(`"password"`, "Password")}
            </p>
            <button className='btn btn-info my-2' type='submit'>{isLoading === true ? <i className='fas fa-spin fa-spiner'></i> : 'Register'} </button>
            <p className='b'></p>
        </form>
    </>
}
