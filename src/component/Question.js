import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Question extends Component {

  constructor(props) {
    super(props);
    this.onStarClick = this.onStarClick.bind(this);
    this.state = {
      rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name){
    this.setState({rating: nextValue});
  }


  render(){
    const { rating } = this.state;
    return(
      <div>
        {this.props.text} <StarRatingComponent name={this.props.id} value={rating} onStarClick={this.onStarClick} starCount={10}/> {rating}
      </div>
    );
  }


}

export default Question;

