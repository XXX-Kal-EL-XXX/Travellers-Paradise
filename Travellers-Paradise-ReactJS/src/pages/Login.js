import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import Footer from  "../components/Footer";
import {  Link } from 'react-router-dom';
import Form from "react-validation/build/form"
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../Service/auth.service";




const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };



    export default class Contact extends Component {
        constructor(props) {
            super(props);
            this.handleLogin = this.handleLogin.bind(this);
            this.onChangeEmail = this.onChangeEmail.bind(this);
            this.onChangePassword = this.onChangePassword.bind(this);
        
            this.state = {
              email: "",
              password: "",
              message: ""
            };
          }

          onChangeEmail(e) {
            this.setState({
              email: e.target.value
            });
          }
        
          onChangePassword(e) {
            this.setState({
              password: e.target.value
            });
          }
        
          handleLogin(e) {
            e.preventDefault();
        
            this.setState({
              message: "",
              loading: true
            });
        
            this.form.validateAll();
        
            if (this.checkBtn.context._errors.length === 0) {
                AuthService.login(this.state.email, this.state.password).then(
                  () => {
                    this.props.history.push("/");
                    window.location.reload();
                  },
                  error => {
                   if(error.response.status === 401){
                    this.setState({
                      message: "Invalid Email or Password"
                    });
                   }

                   else if(error.response.status === 0){
                    this.setState({
                      message: "Bad or no Network"
                    });
                   }

                   else if(error.response.status === 500){
                    this.setState({
                      message: "Internal Server Error"
                    });
                   }      
                  }
                );
              } 
            }
        
        
  
   render(){
    return (
        <div>
          <Navbar />  
        <div className="bg-style1">
        <Form onSubmit={this.handleLogin} ref={c =>{ this.form = c}}>
        <div className="App container mt-5 " >   
        <div className="row justify-content-center pt-5 mt-5">
            <div className="col-sm-6" style={{paddingTop:"9%"}}>
            <div className="heading"><h2>Login</h2></div>
                <div  className="form-style">
                    <div className="form-group">
                        <label>Email</label>
                        <Input type="email" className="form-control" placeholder="example@gmail.com" 
                            onChange={this.onChangeEmail} value={this.state.email} validations={[required]}/>
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <Input type="password" className="form-control"
                            onChange={this.onChangePassword} value={this.state.password} validations={[required]}/>
                    </div>
                    <div>
                    <Link to="/ResetPassword" class="text-white">Forgot Password?</Link>
                    </div>
                    <br/>
                    <div >
                        <CheckButton  ref = {c => {this.checkBtn = c}} class="btn btn-primary">Sign In</CheckButton>&nbsp;&nbsp;&nbsp;
                        <Link to="/userReg"><button type="button" class="btn btn-primary">Sign Up</button>
                        </Link>
                    </div>
                  
                    <br/>
                    {this.state.message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {this.state.message}
                  </div>
                </div>
              )}

                </div>


            </div>
        </div>
        </div>
        </Form>
        </div>
        <Footer />
        </div>
    )
}
    }

