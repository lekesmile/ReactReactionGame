import React, { Component } from 'react'

export default class Header extends Component {
    

    render() {
        return (
            <div className="">
                <div className='Jumbotron fluid'>
                    <h1 className="display-4 h1">Reaction Game</h1>
                     <p>Show how <span className="text-danger">smart</span> you are ........</p>
                     <hr className="my-4" />
                </div>
            </div>
        )
    }
}
