import React, { Component } from 'react'

export default class Circle extends Component {

    render() {
        return (

            <div onClick={this.props.click} className="circle colors" style={{backgroundColor:this.props.active ? this.props.active : this.props.buttonColor}} >
                <p className="text" >{this.props.name}</p>
                
            </div>

        )
    }
}

// tai jos on class
// import React from 'react'

// export default function Circle(props) {
//     return (
//          <div onClick={props.click} className="circle colors" >
//            <p className="text" >{props.name}</p>
//            </div >
//     )
// }
