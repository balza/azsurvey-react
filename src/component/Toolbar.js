import React, { Component } from 'react';
import Tab from '../component/Tab';

const tabs = [
  {label: 'hello', ref: ''},
  {label: 'survey', ref: ''}
];

class Toolbar extends Component {
  render() {
    return (
      <ul className="nav nav-tabs">
        {tabs.map((tab) => 
            <Tab key={tab.label} value={tab.label}/>)}
      </ul>
    );
  }
}

export default Toolbar;
