import React from 'react';
import { Link } from 'react-router-dom'


export default function Navbar({ userData, logOut }) {
    return <>
        <nav className='p-2 d-flex justify-content-between'>
            <div className="left-nav d-flex align-items-center">
                <h1 className='m-0 pe-3 fw-bolder'>WatchWise</h1>
                {userData ? <ul className='list-unstyled d-flex align-items-center m-0' >
                    <li className='px-2'> <Link to='home'>Home</Link> </li>
                    <li className='px-2'> <Link to='about'>About</Link> </li>
                    <li className='px-2'> <Link to='movies'>Movies</Link> </li>
                    <li className='px-2'> <Link to='tv'>Tv</Link> </li>
                    <li className='px-2'> <Link to='people'>People</Link> </li>
                </ul> : ''}


            </div>
            <div className="right-nav d-flex align-items-center">
                <div className="social-media">
                    <i className='fab fa-facebook mx-2' ></i>
                    <i className='fab fa-youtube mx-2' ></i>
                    <i className='fab fa-twitter mx-2' ></i>
                    <i className='fab fa-instagram mx-2' ></i>
                </div>

                <ul className='list-unstyled d-flex align-items-center m-0' >
                    {userData ? <>
                        <li className='px-2'> <p className='my-auto'>{`${userData.first_name} ${userData.last_name}`} </p> </li>
                        <li className='px-2 cursor-pointer' onClick={logOut}> <span >Logout</span> </li>
                    </> :
                        <>

                            <li className='px-2'> <Link to='/'>Login</Link> </li>
                            <li className='px-2'> <Link to='Register'>Register</Link> </li>
                        </>
                    }
                </ul>
            </div>
        </nav>
    </>
}
