import React, { Component } from 'react';
import Cell from '../Cell/Cell';
import './Row.css';

class Row extends Component {
    constructor(props) {
        super(props);
        this.isToggleOn = this.isToggleOn.bind(this);
    }

    isToggleOn(column) {
        let row = this.props.row;
        this.props.isToggle(row,column)
    }

    render() {
        return (
            <div className="Row">
                <Cell check={this.props.check[0]} column="1" isToggleOn={this.isToggleOn}/>
                <Cell check={this.props.check[1]} column="2" isToggleOn={this.isToggleOn}/>
                <Cell check={this.props.check[2]} column="3" isToggleOn={this.isToggleOn}/>
            </div>
        );
    }
}

export default Row;
