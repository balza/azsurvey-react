import React, { Component } from 'react';

class Content extends Component{
    render() {
        return(
            <div className="content">
                {this.props.currentTab === 1 ?
                <div className="mike">
                    <img src="http://s.mlkshk.com/r/104TN" alt="mike"/>
                </div>
                :null}

                {this.props.currentTab === 2 ?
                <div className="donnie">
                    <img src="http://s.mlkshk.com/r/103AG" alt="donnie"/>
                </div>
                :null}

                {this.props.currentTab === 3 ?
                <div className="raph">
                    <img src="http://s.mlkshk.com/r/JAUD" alt="raph"/>
                </div>
                :null}
            
                {this.props.currentTab === 4 ?
                <div className="leo">
                    <img src="http://s.mlkshk.com/r/ZJPL" alt="leo"/>
                </div>
                :null}
            </div>
        );
    }
}

export default Content;
