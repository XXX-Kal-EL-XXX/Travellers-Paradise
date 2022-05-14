import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from  "../components/Footer";
import React, { Component} from 'react';
import AuthService from "../Service/auth.service";


export default class PasswordChange extends Component{

  constructor(props){
    super(props);
    this.state={
      email:"",
      emailError:"",
      message:"",
    }
  }

  handleChange=(e) =>{
    this.setState({[e.target.name]:e.target.value})
  }


  validate = () => {
    let isError = false;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const errors = {
        
        emailError: "",
       
    }

    if (!this.state.email) {
        isError = true
     errors.emailError = "Email is required!";
   
   }else if(!regex.test(this.state.email)){
    errors.emailError="Invalid Email!";
   isError=true
   }
   

   this.setState({
       ...this.state,
       ...errors
   });
   return isError;
}


  handleSubmit = (e) =>{
    e.preventDefault();
    const err = this.validate();
   
   

    if(!err) {
        AuthService.reset(this.state.email)
        .then(()=>{
          this.setState({
            email: "",
            emailError: "" 
        })
          alert("Successfully Sent to your email")
          this.props.history.push("/PasswordChange")
        },
        error => {
          if(error.response.status === 401){
            this.setState({
              message: "Please enter registered emailId"
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
        ) 
           
}

  }

  onClick = (e) =>{
    e.preventDefault();
    this.props.history.push("/PasswordChange")
  }

  render(){

    return (
        <div>
        <div className="bg-style11">

        <Navbar />
        <div style={{paddingTop:"3%"}}>

                </div>
           
      <div >
      <form >    
      <div className="App container mt-5 " >
        <div className="row justify-content-center pt-5" >
            <div className="col-sm-6" >
            
            <div className="heading"><h2>Reset Password</h2></div>
                <div  className="form-style">
                
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control"  
                            onChange={this.handleChange} value={this.state.email} id="email" name="email" autoComplete="off"  />
                         <p class="text-danger">{this.state.emailError}</p>               
                    </div>


                    <p class="text-warning">*You will receive an email</p>
                    

                    <div><br/></div>
                    
                    <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Send</button>&nbsp;&nbsp;&nbsp;
                    <button type="cancel" class="btn btn-primary">Cancel</button>
                    <div style={{paddingTop:"20px"}}>
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
        </div>
        </form>
        </div>
      
        </div>
        <Footer/>
        </div>
    )
  }
}

