import React, { Component } from "react";

class Overview extends Component{
  constructor(props){
    super(props)
  }


  render(){
    const {inputField, onButtonClicked} = this.props;

    return(
      <div>
        <input type="text" placeholder = "To do..." id = 'input'/>
        <button onClick={onButtonClicked}>{this.props.content}</button>
        <ul id = 'tasklist'>
        </ul>
      </div>
    ); 
  }
}

export default Overview;