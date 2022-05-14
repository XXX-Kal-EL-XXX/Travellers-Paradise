import React from 'react'
import ErrorPage from './ErrorPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Link } from 'react-router-dom';

export default function BookingError() {

   
    return (
       

<div className='div-tag'>
    <body className='body-style' >
        <table style={{width:'70%'}}>
            <td>
  <aside className='aside-tagg'><img src={require('../images/mirror.png')} alt="404 Image" style={{width:'550px', margin:'60px'}}/>
  </aside>
  </td>
  <td>  
  <main className='main-frame'>
    <h1>Sorry! No Booking's Found</h1>
    <p>
      Please do the booking  <em>. . . .</em>
    </p>
    <div style={{paddingLeft:"20%"}}>
    <Link to="/Rooms"><button type="button">View Rooms</button></Link>
    </div>
  </main>
  </td>
  </table>
  </body>
</div>
)
}