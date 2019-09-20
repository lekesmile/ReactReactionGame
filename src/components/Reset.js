import React, { Component } from 'react'

export default class Reset extends Component {
  
    render() {
        return (
            
                <button onClick={this.props.click} className="btn btn-danger btn-lg px-5 mx-2">Stop</button>
            
        )
    }
}
