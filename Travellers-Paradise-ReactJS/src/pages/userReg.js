import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component} from 'react';
import Navbar from "../components/Navbar";
import Footer from  "../components/Footer";
import AuthService from "../Service/auth.service";




    
export default class UserReg extends Component{ 

        constructor(props){ 
            super(props);
            this.onChangefirstName = this.onChangefirstName.bind(this);
            this.onChangelastName = this.onChangelastName.bind(this);
            this.onChangeGender = this.onChangeGender.bind(this);
        
           this.state = {
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              gender: "",
              contact: "",
              cpwd: "",
              firstNameError: "",
              lastNameError: "",
              emailError: "",
              passwordError: "",
              contactError: "",
              cpwdError: "",
              genderError: "",
              message: "",
              
           }
        }

         handleChange = (e) => {
            this.setState({[e.target.name]: e.target.value});
          };

          onChangefirstName(e){
              this.setState({firstName: e.target.value})
          }

          onChangelastName(e){
            this.setState({lastName: e.target.value})
          }

          onChangeGender(e){
              this.setState({gender: e.target.value})
          }
        

     validate = () => {
        let isError = false;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const errors = {
            firstNameError: "",
            lastNameError: "",
            emailError: "",
            contactError: "",
            passwordError: "",
            cpwdError:"",
            genderError: ""
        }
 
        if(!this.state.firstName) {
            isError = true;
            errors.firstNameError = "Field Cannot be Blank"
        }

        if(!this.state.lastName) {
            isError = true;
            errors.lastNameError = "Field Cannot be Blank"
        }

        if (!this.state.email) {
         errors.emailError = "Email is required!";
         isError = true;
       }
       else if(!regex.test(this.state.email)){
           errors.emailError = "Not a Valid Email"
           isError = true;
       }

       if(!this.state.password){
           isError = true;
           errors.passwordError = "Password is required";
       }
       else if(this.state.password.length < 4){
            isError = true;
                errors.passwordError = "Password must be more than 4 characteres";
       }
       else if(this.state.password.length >= 10){
           isError = true;
           errors.passwordError = "Password must be 10 characters"

       }

       if(this.state.contact.length < 10){
           isError = true;
         errors.contactError ="Mobile number must cantain 10 digits";
       }

       if(this.state.password !== this.state.cpwd){
           isError = true;
           errors.cpwdError = "Mismatch Password";
       }

       if(!this.state.gender){
        isError = true;
        errors.genderError = "Field is required";
    }
       this.setState({
           ...this.state,
           ...errors
       });
       return isError;
    }  


    handleSubmit = (e) =>{
        e.preventDefault()
        const err = this.validate()
        if(!err){
             AuthService.register(this.state.email, this.state.password, this.state.firstName, this.state.lastName, this.state.gender, this.state.contact)
             .then(() => {
                    this.setState({
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        contact: "",
                        gender: "",
                        cpwd: "",
                        firstNameError: "",
                        lastNameError: "",
                        emailError:"",
                        passwordError: "",
                        contactError: "",
                        cpwdError: "",
                        genderError:""
                    })
                 
                    this.props.history.push("/redirect")
                },  error => {
                      if(error.response.status === 409){
                          this.setState({
                              message: "Email Already exist"
                          })
                      }

                      else if(error.response.status === 0){
                          this.setState({
                              message: "Bad or no Network"
                          })
                      }

                      else if(error.response.status === 500){
                        this.setState({
                            message: "Internal Server Error"
                        })
                    }
                    
                  }
            )
          
        }
    }


   render(){
       const {firstName, lastName, email, password, cpwd,  contact} = this.state
    return (
        
                <div className="bg-style">

                <Navbar />
                <div style={{paddingTop:"3%"}}>
        
                        </div>
                   
              <div >
              <form onSubmit={this.handleSubmit}>    
              <div className="App container mt-5 " >
                <div className="row justify-content-center pt-5" >
                    <div className="col-sm-6" >
                    
                    <div className="heading"><h2>Create Account</h2></div>
                        <div  className="form-style">
                            
                            <div className="form-group" >
                                <label>First Name</label>
                                <input  type="text" className="form-control" 
                                    onChange={this.onChangefirstName} value={firstName} id="firstname" name="firstname" autoComplete="off" />
                                    <p className="text-danger">{this.state.firstNameError}</p>
                               
                            </div>
        
        
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" className="form-control"  
                                    onChange={this.onChangelastName} value={lastName} id="lastname" name="lastname" autoComplete="off"  />
                                     <p className="text-danger">{this.state.lastNameError}</p>
                            
                            </div>
                           
                            <div className="form-group">
                                <label>Gender</label>&nbsp;&nbsp;&nbsp;
        
                                <input type="radio"
                                    id="Male" name="gender" value="Male" onChange={this.onChangeGender}   /><label>Male</label>&nbsp;&nbsp;&nbsp;
        
                                <input type="radio"
                                    id="Female" name="gender" value="Female" onChange={this.onChangeGender}   /> <label>Female</label>
                                
                                <p className="text-danger">{this.state.genderError}</p>              
                            </div>
                           
        
                            <div className="form-group">
                                <label>Contact Number</label>
                                <input type="number" className="form-control" 
                                       onChange={this.handleChange} value={contact} id="contact" name="contact" autoComplete="off"  />
                                <p className="text-danger">{this.state.contactError}</p>
                                
                            </div>
        
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="example@gmail.com" 
                                    onChange={this.handleChange} value={email} id="email" name="email" autoComplete="off"  />
                                 <p className="text-danger">{this.state.emailError}</p>               
                            </div>
        
        
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input type="password" className="form-control"  
                                   onChange={this.handleChange} value={password}  id="password" name="password" autoComplete="off" />
                                   <p className="text-danger">{this.state.passwordError}</p>  
                            </div>
        
                            <div className="form-group mt-3">
                                <label>Confirm Password</label>
                                <input type="password" className="form-control"
                                    onChange={this.handleChange} value={cpwd}  id="cpwd" name="cpwd" autoComplete="off"  />
                                <p className="text-danger">{this.state.cpwdError}</p>
                            </div>
        
                            <div><br/></div>
                            
                            <button type="submit" className="btn btn-primary">Sign Up</button>
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
                <Footer/>
                </div>
                
            )

        
        

    
}

}