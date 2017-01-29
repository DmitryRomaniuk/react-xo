import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="Link">
          <a href='#Home'>Home</a>
        </div>
        <div className="Link">
          <a href='#Game'>Game</a>
        </div>
      </div>
    );
  }
}

export default NavBar;