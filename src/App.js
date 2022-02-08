import React, {useEffect} from 'react';
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
 
const App = ({checkUserSession, currentUser}) => {
 
  useEffect(() => {

    checkUserSession();

    // Second argument passed in the useEffect() function it's to check wether the value has change. if so the use effect function will run! otherwise it won't! if you leave an empty array will run like componentdidmount(). 
  },[checkUserSession]);

 

        // this was the function that we used to add the collections in the database and not do it manually with the new function that we created on firebase utils called (addCollectionAndDocuments); commented it out just so i won't run everytime the component mounts. the collectionsArray came from the selectCollectionsForPreview selector ->
        // addCollectionAndDocuments('collections', collectionsArray.map( ({ title, items}) => ({title, items}))); 

  //   });
  // }

  
    return (
      <div>
        <Header></Header>
        <ScrollToTop>
          <Routes>
            <Route exact path='/' element= {<HomePage/>} />
            <Route path='/shop/*' element= {<ShopPage/>} />
            <Route path='/signin' 
            element= {currentUser ? (<Navigate to='/' />) : (<SigninSignOut />)} 
            />
            <Route path='/checkout' element= {<CheckoutPage/>} />
          </Routes>  
        </ScrollToTop>
      </div>
    );
  }


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
