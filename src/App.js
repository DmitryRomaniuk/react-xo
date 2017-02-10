import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import Row from './components/Row/Row';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: [[null, null, null], [null, null, null], [null, null, null]]
        };
        this.isToggle = this.isToggle.bind(this);
    }

    handleClick() {
        console.log('this is:', this);
    }

    isToggle(row, col) {
        this.setState(function (prevState) {
            let changeArr = [...prevState.check];
            function isFree(row, col) {
                return (changeArr[row][col] !== true && changeArr[row][col] !== false)
            }
            function randomClick() {
                let randomArray = [];
                for (let i = 0; i < changeArr.length; i++) {
                    for (let j = 0; j < changeArr[0].length; j++) {
                        if (isFree(i, j)) {
                            randomArray.push({ i: i, j: j });
                        }
                    }
                }
                let randomValue = randomArray[Math.floor(Math.random() * changeArr.length)];
                if (randomValue) changeArr[randomValue.i][randomValue.j] = false;
            }
            function findBestStep() {
                changeArr.forEach(row => {
                    if ()
                })
            }
            let userExecuteStep = false;
            let computerExecuteStep = false;
            if (changeArr[row][col] !== true && changeArr[row][col] !== false) {
                changeArr[row][col] = !changeArr[row][col];
                userExecuteStep = true;
            }
            console.log(row, col);
            // here computer execute step
            if (userExecuteStep) {
                //first step
                if (!computerExecuteStep && isFree(1, 1)) {
                    changeArr[1][1] = false;
                    computerExecuteStep = true;
                }
                if (!computerExecuteStep && isFree(0, 0)) {
                    changeArr[0][0] = false;
                    computerExecuteStep = true;
                }
                //second step
                if (changeArr[1][1]) {
                    if (!computerExecuteStep) {
                        bestSteps = [];

                        randomClick();
                        computerExecuteStep = true;
                    }
                    // if (!computerExecuteStep && row === 0 && col === 1) {
                    //     if (isFree(2, 1)) {
                    //         changeArr[2][1] = false;
                    //         computerExecuteStep = true;
                    //     } else {
                    //         randomClick();
                    //         computerExecuteStep = true;
                    //     }
                    // }
                    // if (!computerExecuteStep && changeArr[1][1] && changeArr[1][1] !== false
                    //     && isFree(0, 0)) {
                    //     changeArr[0][0] = false;
                    //     computerExecuteStep = true;
                    // }
                }
                if (changeArr[1][1] === false) {
                }
            }
            return {
                check: changeArr
            };
        });
    }

    // componentWillUnmount() {
    //     this.setState({
    //         check: [[true,false,false],[false,false,false],[false,false,true]]
    //     });
    // }
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
                            <Row check={this.state.check[0]} row="0" isToggle={this.isToggle}>
                            </Row>
                        </div>
                        <div>
                            <Row check={this.state.check[1]} row="1" isToggle={this.isToggle}>
                            </Row>
                        </div>
                        <div>
                            <Row check={this.state.check[2]} row="2" isToggle={this.isToggle}>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
