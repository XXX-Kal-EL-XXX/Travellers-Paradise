import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import About from './pages/About';
import userReg from './pages/userReg';
import Booknow from './pages/Booknow';
import { Booking } from './pages/Booking';
import { OTP } from './components/Otp';
import Delays from './components/Delays';
import Under from './pages/Under';
import Preloading from './components/Preloading';
import Login from './pages/Login';
import ListOfBooking from './pages/ListOfBookings';
import ResetPassword from './pages/ResetPassword'
import PasswordChange from './pages/PasswordChange';
import Delay1 from './components/Delay1';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/rooms/" component={Rooms}/>
          <Route exact path="/booking/" component={Booking}/>
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route exact path="/booknow/:slug" component={Booknow} />
          <Route exact path="/otp" component={OTP} />
          <Route exact path="/redirecting" component={Delays} />
          <Route exact path="/under" component={Under} />
          <Route exact path="/preload" component={Preloading} />
          <Route exact path="/userReg" component={userReg} />
          <Route exact path="/list" component={ListOfBooking} />
          <Route exact path="/ResetPassword" component={ResetPassword} />
          <Route exact path="/PasswordChange" component={PasswordChange} />
          <Route exact path="/redirect" component={Delay1} />
          
          
          <Route component={Error}/>
          
        </Switch>
        
      </BrowserRouter>
    
    </div>
  );
}


export default App;
