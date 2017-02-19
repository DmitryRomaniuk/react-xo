import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import Row from './components/Row/Row';
import Game from './Game';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: [].concat((() => { return new Array(9) })().fill(null))
        };
        this.isToggle = this.isToggle.bind(this);
    }

    handleClick() {
        console.log('this is:', this);
    }

    isToggle(cell) {
        this.setState(function (prevState) {
            let changeArr = [...prevState.check];
            let userExecuteStep = false;
            let computerExecuteStep = false;
            if (changeArr[cell] !== 'x' && changeArr[cell] !== 'o') {
                changeArr[cell] = 'x';
                userExecuteStep = true;
            }
            // here computer execute step
            if (userExecuteStep) {
                if (!computerExecuteStep) {
                    let game = new Game(changeArr, 'o');
                    let bestSteps = game.getBestAIStep()[0];
                    console.log(game.getBestAIStep());
                    if (bestSteps !== undefined) {changeArr[bestSteps] = 'o'
                    console.log(bestSteps);
                    console.log(changeArr);}
                    computerExecuteStep = true;
                }
            }
            return {
                check: changeArr
            };
        });
    }

    render() {
        return (
            <div className="App">
                <header>
                    <NavBar />
                </header>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to XO</h2>
                </div>
                {/*<button onClick={(e) => this.handleClick(e)}>*/}
                {/*Click me*/}
                {/*</button>*/}
                <div className="App-intro">
                    <div>
                        <div>
                            <Row check={this.state.check} row="0" isToggle={this.isToggle}>
                            </Row>
                        </div>
                        <div>
                            <Row check={this.state.check} row="3" isToggle={this.isToggle}>
                            </Row>
                        </div>
                        <div>
                            <Row check={this.state.check} row="6" isToggle={this.isToggle}>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
