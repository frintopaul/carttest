import React, { Component } from 'react';
class Counter extends Component {

	constructor(props){
		super(props);
		this.state = {
			couterVal:this.props.baseVal,
		}
	}

	


	incrementCount = () => {
		let updatedCount = this.state.couterVal;
		updatedCount = updatedCount + 1;
		this.setState({
			couterVal:updatedCount
		})
	}

	decrementCount = () => {
		let updatedCount = this.state.couterVal;
		if(updatedCount > 1){
			updatedCount = updatedCount - 1;
			this.setState({
				couterVal:updatedCount
			})

		}
		
	}


  render(){
    return(

    <div className="couterBox">
      <span className="coutCtrBtn" onClick={this.incrementCount}>+</span>
      <input type="text" className="coutinput" value={this.state.couterVal} />
      <span className="coutCtrBtn" onClick={this.decrementCount}>-</span>
    </div>


      )
  }
}

export default Counter;

