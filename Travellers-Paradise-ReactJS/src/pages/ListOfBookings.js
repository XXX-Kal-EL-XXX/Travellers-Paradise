



import axios from 'axios';
import React, { Component } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AuthService from "../Service/auth.service";


class ListOfBookings extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[]
        }

        
    }

    componentDidMount(){
        let user = JSON.parse(localStorage.getItem('user'))
        let token = user.jwtToken
        const id = AuthService.getCurrentUser().userId;
        const url1 = `http://localhost:8019/user/${id}`;
        axios({
            method: 'GET',
            url: url1,
            withCredentials: false,
            headers: {
                "Authorization": "Bearer "+token,
            }
        }).then(res=>{
            this.setState({list: res.data})
            console.log(this.state.list)
        })
        
    }
    render() {
        let tb_data = this.state.list.map((item)=>{
            return(
                <tr key={item.bookingId}>
                    <td>{item.bookingId}</td>
                    <td>{item.firstName} {item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.inventory.roomType}</td>
                    <td>{item.checkIn}</td>
                    <td>{item.checkOut}</td>
                    <td>{item.invoiceNumber}</td>
                    <td>{item.totalPrice}</td>
                </tr>
            )
            
        })
        return (
            <div >
                <Navbar/>
            <div className="container" style={{paddingTop:"6%"}}>
                
                <h1>Booking History</h1>
                <br/>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Booking ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Room Type</th>
                            <th>Check In</th>
                            <th>Check Out</th>
                            <th>Invoice Number</th>
                            <th>Total Price(<span>&#x20B9;</span>)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tb_data}
                    </tbody>
                </table>
                
            </div>
            <div style={{paddingTop:"30%"}}>
            <Footer/>
            </div>
            </div>
            
        );
    }
}

export default ListOfBookings;
