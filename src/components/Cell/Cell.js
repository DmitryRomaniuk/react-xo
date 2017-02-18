import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.cell)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        console.log(this.props.cell)
        this.props.isToggleOn(this.props.cell);
        // this.setState(prevState => ({
        //     isToggleOn: !prevState.isToggleOn
        // }));
    }
    render() {
        return (
            <div className="Cell" onClick={this.handleClick}>
                <i className={(this.props.check[this.props.cell]==='x')?"fa fa-check":
                (this.props.check[this.props.cell]==='o')?"fa fa-times":"fa"} aria-hidden="true"></i>
                {/*<i className={(this.props.check)?"fa fa-check":"fa fa-times"} aria-hidden="true"></i>*/}
                {/*<i className="fa fa-times" aria-hidden="true"></i>*/}
            </div>
        );
    }
}

export default Cell;
