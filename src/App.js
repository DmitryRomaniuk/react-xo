import React, {Component} from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import Row from './components/Row/Row';
import Game from './Game';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: [].concat((() => {
                return new Array(9)
            })().fill(null)),
            gameIsOver: false
        };
        this.isToggle = this.isToggle.bind(this);
    }

    isToggle(cell) {
        let game = new Game(this.state.check, 'o');
        if (this.state.gameIsOver || game.gameIsOver().endGame) {
            this.setState(function () {
                return {
                    gameIsOver: true
                };
            })
        }
        if (!this.state.gameIsOver) {
            this.setState(function (prevState) {
                let changeArr = [...prevState.check];
                let userExecuteStep = false;
                if (changeArr[cell] === null) {
                    changeArr[cell] = 'x';
                    userExecuteStep = true;
                }
                if (userExecuteStep) {
                    let game = new Game(changeArr, 'o');
                    let bestSteps = game.getBestAIStep()[0];
                    if (bestSteps !== undefined && changeArr[bestSteps] === null) {
                        changeArr[bestSteps] = 'o';
                    }
                }
                return {
                    check: changeArr
                };
            });
        }
    }

    render() {
        return (
            <div className="App">
                <header>
                    <NavBar />
                </header>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to XO</h2>
                </div>
                <div className="App-intro">
                    <div>
                        {[0, 1, 2].map(item => {
                            return <div key={item+100}><Row check={this.state.check} row={item * 3}
                                             isToggle={this.isToggle}/></div>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
