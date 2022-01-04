import React from 'react';
import {Route, Routes} from 'react-router';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';





function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route exact path='/' element= {<HomePage/>} />
        <Route path='/shop' element= {<ShopPage/>} />
      </Routes>  
    </div>
  );
}

export default App;
