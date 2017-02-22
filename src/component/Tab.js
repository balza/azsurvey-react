import React, { Component } from 'react';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
     console.log('Tab handleClick');
     console.log(e); 
     e.preventDefault();
     this.props.handleClick();
  }

  render(props) {
    return (
      <li>
        <a href='#' onClick={this.handleClick}>
          {this.props.label}
        </a>
      </li>
    );
  }
}

export default Tab;
