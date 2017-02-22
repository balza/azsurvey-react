import React, { Component } from 'react';
import Tab from '../component/Tab';

const tabs = [
  {id: 1, label: 'hello', url: '/hello'},
  {id: 2, label: 'survey', url: '/survey'}
];

class Toolbar extends Component {

  handleClick(tab){
    console.log('Toolbar handleClick');
    console.log(tab);
    this.props.changeTab(tab);
  }

  render() {
    return (
        <ul className="nav nav-tabs">
          {
            tabs.map((tab) => 
              <Tab
                handleClick={this.handleClick.bind(this, tab)} 
                key={tab.id} 
                label={tab.label}
                url={tab.url}
                isCurrent={(this.currentTab === tab.id)}
              />
            )
          }
        </ul>
    );
  }
}

export default Toolbar;
