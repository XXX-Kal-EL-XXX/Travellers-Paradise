import React from 'react'
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function About() {
    return (
        <div>
            <Navbar/>
    <div className="container aboutus">
        <div className="row">
            <div className="col-md-6 col-12 my-auto">
                <img src={require('../images/abtt.jpg')} alt="about us" className="img-fluid" />
            </div>
            <div className="col-md-6 col-12 my-auto">
                <h1 className="display-5 text-center my-5">About Traveller's Paradise </h1>
                <p className="lead text-justify">Welcome to Traveller's Paradise, we provide hotel accommodation and offer booking services. Traveller's Paradise gives travellers one of the widest selections of accommodation by filtering hotels by price to show only those that match your budget, or you can sort by price to display the cheapest hotels first. We Bring affordable and trusted accommodation that guests can book instantly.
</p>
                <div className="text-center col-md-6 col-12 mx-auto">
                    <Link to="/" className="btn btn-outline-dark btn-block btn-lg my-4">Home</Link>
                </div>
            </div>
        </div>
        <div className="about_company">
            <h1 className="display-4">Our Company</h1>
            <div className="pt-4">
                <p className="lead text-justify">Traveller's Paradise provides hotel accommodation and offer best hotel booking services to our customers efficiently.There are a number of ways to find luxurious hotels on Traveller's Paradise. You can filter hotels by price to show only those that match your budget, or you can sort by price to display the cheapest hotels first.
We have a range of different hotel deals and promotions running throughout the year.You can also sign in to your account and do the booking and have an amazing experience.
You can trust Traveller's Paradise hotel reviews because guests can only leave a review once they have stayed at a hotel.
When reminded of an experience they recently had, people feel greater happiness than when remembering a thing. And that amplifies as we get older. 
Traveling gives you the time to stop and slow down. It is important that we truly let ourselves relax and sometimes let go of all of our responsibilities in life. 
</p>
            </div>
        </div>

            <h1 className="display-4">Our Team's Goal</h1>
            <br/>
           
        
        <div className="row mb-5">
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src={require('../images/ab1.jpg')} className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Work Together as a Team</h5>
                        
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src={require('../images/ab2.jpg')} className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Work in Unity</h5>
                        
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src={require('../images/ab3.jpg')} className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Commitment To Serve</h5>
                        
                    </div>
                </div>
            </div> 
        </div>
<br/>
<br/>
<div>
<div className="container">
    <div className='row'>
        <div className="col-md-12 mb-4 text-center">
            <h3 className='display-4'>Mission, Vision and Values</h3>
            <div className='underline mx-auto'></div>
        </div>
        <div className='col-md-4 text-center'>
            <h4>Our Mission</h4>
            <p>
                Our aim is to provide hotel accommodation and offer best hotel booking services to our customers dedicately and efficiently.
            </p>
        </div>
        <div className='col-md-4 text-center'>
            <h4>Our Vision</h4>
            <p>
                Our vision is to provide bus(shuttle) booking services,which is coming soon in future and give our customers best experience possible.
            </p>
        </div>
        <div className='col-md-4 text-center'>
            <h4>Our Core Values</h4>
            <p>
                A commitment to serve our customers passionately and give them the best experience possible.
            </p>
        </div>
        </div>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
    )
}
export default About;