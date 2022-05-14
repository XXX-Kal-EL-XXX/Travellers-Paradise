import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from  "../components/Footer";
import React, { Component} from 'react';
import AuthService from "../Service/auth.service";


export default class PasswordChange extends Component{

  constructor(props){
    super(props);
    this.state={
      // userId:"",
      password:"",
      cpwd:"",
      
      // userIdError:"",
     passwordError:"",
      cpwdError:"",
     
      message:"",
    }
  }

  handleChange=(e) =>{
    this.setState({[e.target.name]:e.target.value})
  }


  validate = () => {
    let isError = false;

    const errors = {
      // userIdError:"",
      passwordError:"",
       cpwdError:"",
    }

    // if(!this.state.userId) {
    //     isError = true;
    //     errors.userIdError = "Field Cannot be Blank"
    // }
  
   if(!this.state.password){
     errors.passwordError="password is required!";
     isError=true;
   }else if(this.state.password.length < 4 ){
     errors.passwordError="password length must be greater than 4 characters!!";
     isError=true;
   }else if(this.state.password.length  >= 10 ){
    errors.passwordError="password length should not exceed 10 characters!!";
    isError=true;
  }




  if(this.state.password !== this.state.cpwd){
    isError=true;
    errors.cpwdError="Mismatch Password!!!";
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
        this.setState({
          //  userId:"",
          //  userIdError:"",
            password:"",
            passwordError:"",
            cpwd:"",
            cpwdError:"",
        }
        )
        // const uid = this.state.userId
        const uid = AuthService.uId()
        const password = {password: this.state.password}
        console.log(password)

        const requestOptions = {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(password)
        }

        fetch(`http://localhost:8019/user/resetpass/${uid}`, requestOptions)
        .then(() =>{
          localStorage.removeItem('credentials')
          alert("Password Successfully Changed")
          this.props.history.push("/login")
        },
          error =>{
               if(error.response.status === 0){
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
}}

  render(){

    return (
        <div className="bg-style12">

        <Navbar />
        <div style={{paddingTop:"3%"}}>

                </div>
           
      <div >
      <form onSubmit={this.handleSubmit}>    
      <div className="App container mt-5 " >
        <div className="row justify-content-center pt-5" >
            <div className="col-sm-6" >
            
            <div className="heading"><h2>Reset Password</h2></div>
                <div  className="form-style">
                
                    {/* <div className="form-group">
                        <label>UserId</label>
                        <input type="userId" className="form-control"  
                            onChange={this.handleChange} value={this.state.userId} id="userId" name="userId" autoComplete="off"  />
                         <p class="text-danger">{this.state.userIdError}</p>               
                    </div> */}


                    <div className="form-group mt-3">
                        <label>New Password</label>
                        <input type="password" className="form-control"  
                           onChange={this.handleChange} value={this.state.password} id="password" name="password" autoComplete="off" />
                        <p class="text-danger">{this.state.passwordError}</p>      
                    </div>

                    <div className="form-group mt-3">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control"
                            onChange={this.handleChange} value={this.state.cpwd} id="cpwd" name="cpwd" autoComplete="off"  />
                        <p class="text-danger">{this.state.cpwdError}</p>
                    </div>

                    <div><br/></div>
                    
                    <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Reset</button>
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
        <div style={{paddingTop:"8%"}}>
        <Footer/>
        </div>
        </div>
    )
  }
}

