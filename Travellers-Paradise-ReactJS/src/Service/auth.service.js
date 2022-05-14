import axios from "axios";

const API_URL = "http://localhost:8019/user";


const login = (email, password) => {
    return axios
      .post(API_URL + "/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.jwtToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });
  };

  const register = (email, password, firstName, lastName, gender, contact) => {
    return axios
      .post(API_URL, {
        email,
        password,
        firstName,
        lastName,
        gender,
        contact
      })
      .then(() => {
         console.log("Added Successfully")
  
      });
  };

  const reset = (email) => {
    return axios
    .post(API_URL + "/forgotpassword", {
      email
    } )
    .then((res) => {
      localStorage.setItem("credentials",JSON.stringify(res.data))
      console.log("Successfully Send to your mail")
    })
  }

  

  const logout = () => {
    return localStorage.removeItem("user");
  }


  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));;
  }

  const uId = () => {
    return JSON.parse(localStorage.getItem('credentials'))
  }


 const authService = {
     login,
     logout,
     getCurrentUser,
     register,
     reset,
     uId,

     
 }



 export default authService;

