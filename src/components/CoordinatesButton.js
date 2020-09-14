import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  clickHandler = (event) => {
    let x = event.clientX
    let y = event.clientY
    this.props.onReceiveCoordinates([x, y])
  }

  render(){
    return(
      <button onClick={this.clickHandler}>Coordinates Button</button>
    )
  }


}