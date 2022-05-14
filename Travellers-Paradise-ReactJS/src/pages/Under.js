import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import Footer from '../components/Footer';
class Under extends Component {
    render() {
        return (
            <div>
            
            <div className="full_width">
            <div className="inner_content">
                <div className="content_middel">
                    <h1>Coming Soon</h1>
                    <h3>Stay Tuned</h3>
                    <div style={{paddingTop:"10px"}}>
                    <Link to="/" className="btn btn-warning">
                      RETURN HOME
                </Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>

        
            
        );
    }
}

export default Under;