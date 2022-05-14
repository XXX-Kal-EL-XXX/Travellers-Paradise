import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer id="sticky-footer" className="bg-light text-dark-50">
            <div className="container py-1">
                <div className="row">
                    <div className="col-md-6 col-12 my-auto">
                        <small>Copyright &copy; Traveller's Paradise</small>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="d-flex float-right">
                            
                                <FaFacebookSquare className="connect text-dark" />
                                <FaLinkedin className="connect text-dark" />
                                <AiFillInstagram className="connect text-dark" />                 
                                <IoLogoYoutube className="connect text-dark" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer