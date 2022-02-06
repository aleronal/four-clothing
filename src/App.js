import React from 'react';
import {Route, Routes, Navigate} from 'react-router';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import SigninSignOut from './pages/signin-signout/signin-signout.component';

import ScrollToTop from './components/scrollToTop/scrollToTop.component';

// redux
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

import {selectCurrentUser} from './redux/user/user.selector';
import {checkUserSession} from './redux/user/user.actions';
 
class App extends React.Component {
 
   unsubscribeFromAuth = null;

  componentDidMount(){
  
  const {checkUserSession} = this.props;
  checkUserSession();


        // this was the function that we used to add the collections in the database and not do it manually with the new function that we created on firebase utils called (addCollectionAndDocuments); commented it out just so i won't run everytime the component mounts. the collectionsArray came from the selectCollectionsForPreview selector ->
        // addCollectionAndDocuments('collections', collectionsArray.map( ({ title, items}) => ({title, items}))); 

      }
      
  //   });

  // }

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header></Header>
        <ScrollToTop>
          <Routes>
            <Route exact path='/' element= {<HomePage/>} />
            <Route path='/shop/*' element= {<ShopPage/>} />
            <Route path='/signin' 
            element= {this.props.currentUser ? (<Navigate to='/' />) : (<SigninSignOut />)} 
            />
            <Route path='/checkout' element= {<CheckoutPage/>} />
          </Routes>  
        </ScrollToTop>
      </div>
    );
    }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
