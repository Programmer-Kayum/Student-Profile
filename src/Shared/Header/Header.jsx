import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../photos/logo.png"
import logo3 from "../../photos/profile/received_307491064652787.jpeg"
import logo1 from "../../photos/logo2.png"

const Header = () => {
const menuIteam= <>
<li> <Link to="/" className='text-yellow-500 text-xl font-bold hover:bg-yellow-200'>Home</Link> </li>
<li> <Link to="/faculty" className='text-yellow-500 text-xl font-bold hover:bg-yellow-200'>Faculty</Link> </li>
<li> <Link to="/profile" className='text-yellow-500 text-xl font-bold hover:bg-yellow-200'>Profile</Link> </li>
<li> <Link to="/library" className='text-yellow-500 text-xl font-bold hover:bg-yellow-200'>Library</Link> </li>
<li> <Link to="/signin" className='text-yellow-500 text-xl font-bold hover:bg-yellow-200'>Registration</Link> </li>
<li> <Link to="/login" className='text-yellow-500 text-xl font-bold hover:bg-yellow-200'>Log In</Link> </li>
</>

    return (
        <div>
            <div>
                <img className='w-full lg:h-36  ' src={logo1} alt="" />
            </div>
           <div className="navbar bg-cyan-900">
           <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-base-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menuIteam}
                        </ul>
                    </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className='lg:h-10 h-8 w-8 lg:w-10 ' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                            {menuIteam}
                            </ul>
            </div>
            <div className="navbar-end">
             <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src={logo3} />
                    </div>
                </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                            <div className="justify-between">
                               <Link to="/profile"> <h1>Profile</h1></Link>
                                <Link to="/registration"><span   className="badge">New</span></Link>
                            </div>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                 </div>
                </div>
            </div>
        </div>
        );
        };

export default Header;