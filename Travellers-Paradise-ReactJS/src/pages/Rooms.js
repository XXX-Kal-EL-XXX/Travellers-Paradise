import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from '../components/RoomsContainer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Rooms = () => {
    return (
    <div>
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval="3000">
    <img className="img1" src={require('../images/rm1.jpg')} alt="First slide"/>
    </div>
    <div className="carousel-item" data-interval="3000">
    <img className="img1" src={require('../images/rm2.jpg')} alt="Second slide"/>
    </div>
    <div className="carousel-item" data-interval="3000">
    <img className="img1" src={require('../images/rm3.jpg')} alt="Third slide"/>
    </div>
    <div className="carousel-item" data-interval="3000">
    <img className="img1" src={require('../images/rm6.jpg')} alt="Fourth slide"/>
    </div>
    <div className="carousel-item" data-interval="3000">
    <img className="img1" src={require('../images/rm5.jpg')} alt="Fifth slide"/>
    </div>
  </div>
  <a  href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a  href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        <Navbar/>
        <Hero hero="roomsHero">
        </Hero>
        <Banner title="Available Rooms" subtitle="Best in Class Room">
                <Link to="/" className="btn btn-warning">
                      RETURN HOME
                </Link>
        </Banner>
        <RoomsContainer/>
        <Footer/>
    </div>
    )
}

export default Rooms
