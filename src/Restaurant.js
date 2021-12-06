import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends Component {
  render () {
    const {name,user, handleSelect,votes ,handleDeselect} = this.props;
    const userHasSelected=votes && Object.keys(votes).includes(user.uid, user.photoURL);
    return (
      <article className="Restaurant">
        <h1 >{ name }</h1>
         
        <ul>
          { votes && map(votes, (vote, key) => <h3 key={key}>{vote}</h3>  )}
        </ul>
        {
          userHasSelected 
          ? <button className="destructive" onClick={handleDeselect}>
            Decline vote
           </button>
           :<button onClick={handleSelect}>
           Make a vote
           </button>


        }
        
        
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
