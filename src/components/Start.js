import React, { Component } from 'react'

export default class Start extends Component {

   
    render() {
        return (
            <div>
                <button onClick={this.props.click} className="btn btn-primary btn-lg px-5 mx-2">Start</button>
            </div>
        )
    }
}
