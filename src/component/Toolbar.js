import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Profile from '../component/Profile';
import Survey from '../component/Survey';

class Toolbar extends Component {

  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      key : 1
    };
  }  

  handleSelect(key) {
    this.setState({key});
  }

  render() {
    return (
      <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
        <Tab eventKey={1} title="Profile"><Profile /></Tab>
        <Tab eventKey={2} title="Survey"><Survey /></Tab>
      </Tabs>
    );
  }
}

export default Toolbar;
