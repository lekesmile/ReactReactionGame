
import React, { Component } from 'react'
import './App.css';
import Header from './components/Header';
import Circle from './components/Circle';
import Start from './components/Start'
import Reset from './components/Reset'
import GameOver from './components/GameOver';


const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
class App extends Component {
  state = {
    score: 0,
    current: 0,
    showGameOver : false
  }

  pace = 1500
  timer = undefined


  next = () => {
    // console.log('next')
    let nextActive = undefined;
    do {
      nextActive = getRandom(1, 4)
    }
    while (nextActive === this.state.current)

    this.setState({
      current: nextActive
    })

    this.pace *= 0.95
    this.timer = setTimeout(this.next.bind(this), this.pace)

  }

  // This function handle the click event and the div or cirlce click
  clickHandler = (btnId) => {
    console.log('wow ' + btnId)
    if(this.state.current !== btnId){
      this.endGame();
      return
    }
    this.setState({
      score: this.state.score + 1
    })
  }

  // This functiom reset the counter and stip the game

  endGame = () => {
    clearTimeout(this.timer)
    this.setState({
      showGameOver: true
    })
  }

  // this function start the game
  startGame = () => {
    console.log('start')
    this.next()
  }



  render() {
    return (
      <div>
        <Header />
        <div className="container">

          <h3 className="center">Score : {this.state.score}</h3>
          <div className="row">
            <div className="contflex">
              <Circle buttonColor='green' active={this.state.current ===1} click={() => this.clickHandler(1)} name="" />
              <Circle buttonColor='yellow' active={this.state.current === 2} click={() => this.clickHandler(2)} name="" />
              <Circle buttonColor='brown' active={this.state.current === 3} click={() => this.clickHandler(3)} name="" />
              <Circle buttonColor='gold' active={this.state.current === 4} click={() => this.clickHandler(4)} name="" />
            </div>
          </div>
          <div className="row center">
            <Start click={this.startGame} />
            <Reset click={this.endGame} />
          </div>
          {this.state.showGameOver && <GameOver  score={this.state.score}/>}
        </div>
      </div>
    )
  }
}



export default App;
