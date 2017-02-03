import React, {Component} from 'react';
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
            let userExecuteStep = false;
            let computerExecuteStep = false;
            if (changeArr[row - 1][col - 1] !== true && changeArr[row - 1][col - 1] !== false) {
                changeArr[row - 1][col - 1] = !changeArr[row - 1][col - 1];
                userExecuteStep = true;
            }
            // here computer execute step
            if (userExecuteStep && changeArr[1][1] && changeArr[1][1] !== false && changeArr[0][0] !== true &&  changeArr[0][0] !== false) {
                changeArr[0][0] = false;
                computerExecuteStep = true;
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
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to XO</h2>
                </div>
                {/*<button onClick={(e) => this.handleClick(e)}>*/}
                {/*Click me*/}
                {/*</button>*/}
                <div className="App-intro">
                    <div>
                        <div>
                            <Row check={this.state.check[0]} row="1" isToggle={this.isToggle}>
                            </Row>
                        </div>
                        <div>
                            <Row check={this.state.check[1]} row="2" isToggle={this.isToggle}>
                            </Row>
                        </div>
                        <div>
                            <Row check={this.state.check[2]} row="3" isToggle={this.isToggle}>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
