import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';




export default function Layout({ userData, setUserData }) {
    let navigate = useNavigate();
    function logOut() {
        localStorage.removeItem('userToken');
        setUserData(null);
        navigate('/')
    }

    return <>
        <Navbar userData={userData} logOut={logOut} />
        <div className="container">

            <Outlet></Outlet>
        </div>
        <Footer />
    </>
}
