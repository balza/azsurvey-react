import React, { Component } from 'react';

class Tab extends Component {
  render(props) {
    return (<li><a href="#">{this.props.value}</a></li>);
  }
}

export default Tab;
