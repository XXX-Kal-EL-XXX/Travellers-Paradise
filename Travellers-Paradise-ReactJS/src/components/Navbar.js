import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import jquery from 'jquery';
import AuthService from "../Service/auth.service";

// for changing navbar  color
jquery(window).scroll(function() {
jquery('nav').toggleClass('scrolled', jquery(this).scrollTop() > 0);
})

function Navbar () {

    const [currentUser, setCurrentUser] = useState(undefined);
    

    useEffect(() => {
      const user = AuthService.getCurrentUser();
      
  
      if (user) {
        setCurrentUser(user);

      }
    }, []);

    const logOut = () => {
        AuthService.logout();
       
    }
    return (
    <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark py-2 fixed-top">
            <div className="container-fluid ">
                <span className="navbar-brand font-weight-bolder">Traveller's Paradise</span>
                <a href="void(0)" className="navbar-toggler border-0" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span>
                        <FaAlignRight className="nav-icon" /></span>
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active_class" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active_class" exact to="/rooms">Rooms</NavLink>
                        </li>
                        {
                            currentUser ? (
                                <div className="navbar-nav ms-auto">
                                <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active_class" exact to="/booking">Booking</NavLink>
                            </li>
                            </div>) : 
                            (
                                <div></div>
                            )
                        }
        
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active_class" exact to="/about">About</NavLink>
                        </li>
                        {
                            currentUser ? (
                                <div className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active_class" exact to="/login" onClick={logOut}>Logout</NavLink>
                           </li> 
                           </div>) : (    
                           <div className="navbar-nav ms-auto">  
                         <li className="nav-item">
                         <NavLink className="nav-link" activeClassName="active_class" exact to="/login">Login</NavLink>
                     </li> 
                      </div> )}                       
                    </ul>
                </div>
            </div>
        </nav>
    </>
    );
}
export default Navbar;