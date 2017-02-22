import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './component/Toolbar'
import Content from './component/Content'


class App extends Component {

  constructor(props) {
    super(props);
    this.changeTab = this.changeTab.bind(this);
    this.state = {currentTab: 1};
  }

  changeTab(tab) {
    console.log("App");
    console.log("---");
    console.log(tab);
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
          <Toolbar
            currentTab={this.state.currentTab}
            changeTab={this.changeTab}/>
          <Content
            currentTab={this.state.currentTab}/>
        </div>  
      </div>
    );
  }
}

export default App;
