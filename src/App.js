import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tab, Tabs } from 'react-bootstrap';
import Profile from './component/Profile';
import Survey from './component/Survey';
import Administration from './administration/Administration';

class App extends Component {

  constructor(props) {
    super(props);
    this.changeTab = this.changeTab.bind(this);
    this.state = {currentTab: 1};
  }

  changeTab(tab) {
    this.setState({ currentTab: tab.id });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Tabs activeKey={this.state.key} onSelect={this.changeTab} id="controlled-tab-example">
            <Tab eventKey={1} title="Profile"><Profile /></Tab>
            <Tab eventKey={2} title="Survey"><Survey /></Tab>
            <Tab eventKey={3} title="Administration"><Administration /></Tab>
          </Tabs>
        </div>  
      </div>
    );
  }
}

export default App;
