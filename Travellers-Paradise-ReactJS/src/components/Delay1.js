import React, { Component } from 'react';

class Delay1 extends Component {
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

  handleClick = (e) =>{
    e.preventDefault()
    this.props.history.push("/login")
  }

    render() {
        return (
            <div>
            {
                !(this.state.rendering) ?
                <div className='container1'>
                <div className='spinner'>
                  <span>Saving Information....</span>
                  <div className='half-spinner'>
                  </div>
                  </div>
                  </div>
      
                :
                <div className='modal__overlay'>
                <div className='modal__window'>
                    <div className='modal__titlebar'>
                        <span className='modal__title'>Traveller's Paradise</span>
                </div>
                <div className='modal__content'>
                    <h3>Successfully Registered</h3><br/>
                <div style={{paddingLeft:"43%"}}><button type='submit' className="btn btn-primary" onClick={this.handleClick}>OK</button></div>
                </div>
                </div>
                </div>
              }
              </div>
                
            
        );
    }
}

export default Delay1;