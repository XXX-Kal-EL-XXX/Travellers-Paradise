import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthService from "../Service/auth.service";
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookingError from './BookingError';

class Invoice extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            ids: [],
            bItems:"",
            roomType: "",
            price:""
        }
    }

    printDocument() {

        const doc = new jsPDF();

        //get html
        const pdfTable = document.getElementById('divToPrint');

        //html to pdf format
        var html = htmlToPdfmake(pdfTable.innerHTML);

        const documentDefinition = { content: html };
        pdfMake.vfs = pdfFonts.pdfMake.vfs;
        pdfMake.createPdf(documentDefinition).open();

    }

     componentDidMount()
    { 
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
        })
        .then(res => {
            this.setState({
                items: res.data
                
            })

            this.setState({
                ids: this.state.items.map(item => item.bookingId)
            })

            const bid = this.state.ids[this.state.ids.length-1]
            console.log(bid)
            const url2 = `http://localhost:8019/user/booking/${bid}`;

            axios({
                method: 'GET',
                url: url2,
                withCredentials: false,
                headers: {
                    "Authorization": "Bearer "+token,
                }

            }).then(res1 => {
                this.setState({bItems: res1.data})
                console.log(this.state.items)
                console.log(this.state.bItems)
                this.setState({
                    roomType: this.state.bItems.inventory.roomType,
                    price: this.state.bItems.inventory.price
                })
                
            })          
        })  
    }


    render() {
     return (

            <div>
            {
                !this.state.items.length ? (
                    <BookingError/>
                ) :
                
                (
                    <div className='back'>
                    <Navbar/>
                    <div style={{paddingTop:"3%"}}>
                
                    </div>
                <div className="App container mt-5 " >
                    <div id="divToPrint" className="m-3">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-8 ">
                                <div className="opacity-25">
                                    <div className="card">
                                        <header>
                                            <div style={{paddingTop:"10px"}}>
                                                    <h3 align="center">Thank You For Booking</h3> 
                                            </div>
                                            <div className="d-flex flex-row p-2">
                                                <div className="d-flex flex-column"> <span className="font-weight-bold">Booking Invoice:</span> <small><strong>#{this.state.bItems.invoiceNumber}</strong></small> </div>
                                            </div>
                                        </header>
                                        <hr />
                                        <div className="table-responsive p-2">
                                            
                                            <table className="table table-borderless  mt-10">
                                                <tbody className="mt-10">
                                                    <tr className="add">
                                                        <td><strong>Booking ID: </strong>{this.state.bItems.bookingId}</td>
                                                        <td><strong>Check In: </strong>{this.state.bItems.checkIn}</td>
                                                        <td><strong>Check Out: </strong>{this.state.bItems.checkOut}</td>
                                                    </tr>
                                                    <tr className="content">
                                                        <td></td>
                                                        <td className="font-weight-bold"><strong>Name:</strong> {this.state.bItems.firstName} {this.state.bItems.lastName}<br /><strong>Email ID:</strong> {this.state.bItems.email}<br /><strong>Phone No.:</strong> {this.state.bItems.phoneNumber}</td>
                                                        <td></td>
                                    
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <hr />
                                        <div className="products p-2">
                                            <table className="table table-borderless">
                                                <tbody>
                                                    <tr className="add">
                                                        <td><strong>Room Type</strong></td>
                                                        <td><strong>Price per Day</strong></td>
                                                        <td className="text-center"><strong>Total</strong></td>
                                                    </tr>
                                                    <tr className="content">
                                                        <td>{this.state.roomType}</td>
                                                        <td>{this.state.price}</td>
                                                        
                                                        <td className="text-center">&#8377; {this.state.bItems.totalPrice}</td>
                                                    </tr>
                                               
                                                </tbody>
                                            </table>
                                        </div>
                                        <hr />
                                        <div className="products p-2">
                                            <table className="table table-borderless">
                                                <tbody>
                                                    <tr className="add">
                
                                                        <td><strong>Subtotal</strong></td>
                                        
                                                        <td className="text-center"><strong>Grand Total</strong></td>
                                                    </tr>
                                                    <tr className="content">
                
                                                        <td>&#8377; {this.state.bItems.totalPrice}</td>
                                
                                                        <td className="text-center">&#8377; {this.state.bItems.totalPrice}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <hr />
                                        <div className="address p-2">
                                            <footer className="footer">
                                                <div className="container-fluid">
                                                    <div className="row text-center">
                                                        <div className="col-12">©Traveller's Paradise</div>
                                                    </div>
                                                    <div className="row justify-content-center text-center">
                                                        <div className="col-12 col-md-2">
                                                            <p>T&C Apply.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </footer>
                                         
                                            <div className="text-right">
                                                <button style={{marginRight:"4px"}} className="btn btn-primary" onClick={this.printDocument}><i className="fas fa-print">Print</i></button> 
                                                <Link to={"/list"} className="btn btn-primary"><i className="fas fa-print">List Of Bookings</i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <Footer/>
                </div>
              )}
            </div>
        )
    };
}

export default Invoice;