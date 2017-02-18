import React, { Component } from 'react';
import Cell from '../Cell/Cell';
import './Row.css';

class Row extends Component {
    constructor(props) {
        super(props);
        this.isToggleOn = this.isToggleOn.bind(this);
    }

    isToggleOn(cell) {
        this.props.isToggle(cell)
    }

    render() {
        return (
            <div className="Row">
                <Cell check={this.props.check} cell={0 + +this.props.row} isToggleOn={this.isToggleOn}/>
                <Cell check={this.props.check} cell={1 + +this.props.row} isToggleOn={this.isToggleOn}/>
                <Cell check={this.props.check} cell={2 + +this.props.row} isToggleOn={this.isToggleOn}/>
            </div>
        );
    }
}

export default Row;
