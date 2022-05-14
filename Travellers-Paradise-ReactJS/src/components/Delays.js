import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Delays extends Component {
constructor(props){
    super(props)
    this.state = {
      rendering: false
    }

  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({rendering:true})
    },4000)
  }
 

  render() {

    return (
      <div>
        {
          !(this.state.rendering) ?
          <div className='container1'>
          <div className='spinner'>
            <span>Redirecting To Payment....</span>
            <div className='half-spinner'>
            </div>
            </div>
            </div>

          :
            <Redirect to={"/otp"}></Redirect>
        }
        </div>
    );
  }
}

export default Delays;