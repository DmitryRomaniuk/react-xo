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
            // check: [[null, null, null], [null, null, null], [null, null, null]],
            check: [].concat((()=>{return new Array(9)})().fill(null))
        };
        this.isToggle = this.isToggle.bind(this);
    }

    handleClick() {
        console.log('this is:', this);
    }

    isToggle(cell) {
        this.setState(function (prevState) {
            let changeArr = [...prevState.check];
            let game = new Game(changeArr,'o');
            function isFree(cell) {
                return (changeArr[cell] !== 'x' && changeArr[cell] !== 'o')
            }
            // function randomClick() {
            //     let randomArray = [];
            //     for (let i = 0; i < changeArr.length; i++) {
            //         for (let j = 0; j < changeArr[0].length; j++) {
            //             if (isFree(i, j)) {
            //                 randomArray.push({ i: i, j: j });
            //             }
            //         }
            //     }
            //     let randomValue = randomArray[Math.floor(Math.random() * changeArr.length)];
            //     if (randomValue) changeArr[randomValue.i][randomValue.j] = false;
            // }
            let userExecuteStep = false;
            let computerExecuteStep = false;
            console.log(changeArr[cell]);
            if (changeArr[cell] !== 'x' && changeArr[cell] !== 'o') {
            console.log('x');
                changeArr[cell] = 'x';
                userExecuteStep = true;
            }
            console.log(cell);
            // here computer execute step
            if (!userExecuteStep) {
                //first step
                if (!computerExecuteStep && isFree(4)) {
                    changeArr[4] = 'x';
                    computerExecuteStep = true;
                }
                if (!computerExecuteStep && isFree(0)) {
                    changeArr[0] = 'o';
                    computerExecuteStep = true;
                }
                //second step
                if (changeArr[4]) {
                    if (!computerExecuteStep) {
                        let bestSteps = game.getBestAIStep()[0];
                        changeArr[bestSteps] = 'o';
                        computerExecuteStep = true;
                    }
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
                            <Row check={this.state} row="0" isToggle={this.isToggle}>
                            </Row>
                        </div>
                        <div>
                            <Row check={this.state} row="3" isToggle={this.isToggle}>
                            </Row>
                        </div>
                        <div>
                            <Row check={this.state} row="6" isToggle={this.isToggle}>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
