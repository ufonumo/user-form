import React, { Component } from 'react'
import completed from '../assets/completed.jpg'

export class Confirmation extends Component {
  
  render() {

    return (
      <div>
        <img src={completed} alt=""/>
      </div>
    )
  }
}

export default Confirmation
