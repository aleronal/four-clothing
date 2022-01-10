import React from 'react';
import {Route, Routes} from 'react-router';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import SigninSignOut from './pages/signin-signout/signin-signout.component';

// firebase
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

// redux
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import userReducer from './redux/user/user.reducer';





class App extends React.Component {
 

  unsubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            });
          
          });
   
      }

      else{
        setCurrentUser(userAuth);
      }
      
    });

  }

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header></Header>
        <Routes>
          <Route exact path='/' element= {<HomePage/>} />
          <Route path='/shop' element= {<ShopPage/>} />
          <Route path='/signin' element= {<SigninSignOut/>} />
        </Routes>  
      </div>
    );
    }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
