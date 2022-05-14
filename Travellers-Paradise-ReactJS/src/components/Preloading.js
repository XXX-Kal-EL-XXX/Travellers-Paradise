import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Preloading extends Component {

    constructor(props){
        super(props) 
            this.state = {
                rendering:false
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
  
    
    <div className="preloader">
        <div class="spinner_wrap">
          <div class="spinner" />
        </div>
        <h3 className='fonts_styles' align="center" style={{paddingTop:"32%",paddingLeft:"15px", color:"#894f54"}}>Hold ON....</h3>
      </div>
      :
        <Redirect to={"/under"}></Redirect>

    }
     </div>
        );
    }
}


export default Preloading;