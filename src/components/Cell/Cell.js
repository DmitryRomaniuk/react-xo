import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
    constructor(props) {
        super(props);
        // this.setState(prevState => ({
        //     isToggleOn: this.props.check
        // }));
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.isToggleOn(this.props.column);
        // this.setState(prevState => ({
        //     isToggleOn: !prevState.isToggleOn
        // }));
    }
    render() {
        return (
            <div className="Cell" onClick={this.handleClick}>
                <i className={this.props.check?"fa fa-check":(this.props.check===false)?"fa fa-times":"fa"} aria-hidden="true"></i>
                {/*<i className={(this.props.check)?"fa fa-check":"fa fa-times"} aria-hidden="true"></i>*/}
                {/*<i className="fa fa-times" aria-hidden="true"></i>*/}
            </div>
        );
    }
}

export default Cell;
