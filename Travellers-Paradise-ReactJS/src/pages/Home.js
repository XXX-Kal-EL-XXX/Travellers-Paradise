import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval="3000">
      <img className="img1" src={require('../images/hm1.jpg')} alt="First slide"/>
    </div>
    <div className="carousel-item" data-interval="3000">
      <img className="img1" src={require('../images/hm2.jpg')} alt="Second slide"/>
    </div>
    <div className="carousel-item" data-interval="3000">
      <img className="img1" src={require('../images/hm3.jpg')} alt="Third slide"/>
    </div>
    <div className="carousel-item" data-interval="3000">
      <img className="img1" src={require('../images/hm4.jpg')} alt="Fourth slide"/>
    </div>
    <div className="carousel-item" data-interval="3000">
      <img className="img1" src={require('../images/hm5.jpg')} alt="Fifth slide"/>
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
        <Hero hero="defaultHero">
        </Hero>
        <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at Rs.1250">
                <Link to="/rooms" className="btn btn-primary">
                      Our Rooms
                </Link>
        </Banner>
        <Services/> 
        <FeaturedRooms/>
        <Footer/>
        </>

    )
}
