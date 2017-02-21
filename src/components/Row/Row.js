import React, {Component, PropTypes} from 'react';
import Cell from '../Cell/Cell';
import './Row.css';

class Row extends Component {
    constructor(props) {
        super(props);
        this.isToggleOn = this.isToggleOn.bind(this);
    }

    static propTypes = {
        isToggle: React.PropTypes.func.isRequired,
        check: React.PropTypes.array.isRequired,
        row: PropTypes.number.isRequired
    };

    isToggleOn(cell) {
        this.props.isToggle(cell)
    }

    render() {
        return (
            <div className="Row">
                {[0, 1, 2].map(item => {
                    return <Cell check={this.props.check} cell={+this.props.row + item} key={+this.props.row + item + 10}
                                 isToggleOn={this.isToggleOn}/>
                })}
            </div>
        );
    }
}

// Row.propTypes = {
//     isToggle: React.PropTypes.func.isRequired,
//     check: React.PropTypes.array.isRequired,
//     row: PropTypes.number.isRequired
// };

export default Row;
