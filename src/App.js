import React from 'react';
import {Route, Routes} from 'react-router';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import SigninSignOut from './pages/signin-signout/signin-signout.component';

// firebase
import {auth, createUserProfileDocument} from './firebase/firebase.utils';





class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser : null,
    }

  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          
          });

          console.log(this.state);
        });
       

      }

      else{
        this.setState({currentUser: userAuth});
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
        <Header currentUser={this.state.currentUser}></Header>
        <Routes>
          <Route exact path='/' element= {<HomePage/>} />
          <Route path='/shop' element= {<ShopPage/>} />
          <Route path='/signin' element= {<SigninSignOut/>} />
        </Routes>  
      </div>
    );
    }
}

export default App;
