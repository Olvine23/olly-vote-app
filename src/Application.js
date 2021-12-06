import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewRestaurant from './NewRestaurant';
import mathe from './images/mathe.jpg';
import Restaurants from './Restaurants';
import './Application.css';
 
class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      restaurants: null
    };
    this.restaurantRef = database.ref('/restaurants');
  }

  componentDidMount(){
    auth.onAuthStateChanged((currentUser) => {
      console.log('auth changed', currentUser);
      this.setState({currentUser});

      this.restaurantRef.on('value', (snapshot) => {
        console.log(snapshot.val());
        this.setState({restaurants: snapshot.val()});
      }); 
    });
  }

  render() {
    const {currentUser, restaurants} = this.state;
    return (
      <div className="Application">
        <header className="Application--header">
          <h1>OLLY RESTAURANT VOTE </h1>
          <img className="mathe" src={ mathe } alt="mathe" />
          <h4> <i> kwa mathe </i> </h4>
        </header>
        <div>
          {!currentUser && <SignIn />}
          
          {
          currentUser && 
          <div>
            <NewRestaurant />
          <Restaurants restaurants={restaurants} user={currentUser} />
          <CurrentUser user={currentUser} />
          </div>
  }
          </div>
      </div>

    );
  }
}

export default Application;
