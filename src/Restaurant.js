import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends Component {
  render () {
    const {name, handleSelect,votes ,handleDeselect} = this.props;
    return (
      <article className="Restaurant">
        <h3>{ name }</h3>
        <ul>
          { votes && map(votes, (vote, key) => <li key = {key}>{vote}</li> )}
        </ul>
        <button onClick ={handleSelect}>
          Make a vote
        </button>
        <button className= "destructive" onClick ={handleDeselect}>
          Decline vote
        </button>
      </article>
    );
  }
}

Restaurant.propTypes = {
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};

export default Restaurant;
