import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

import {Route, Routes} from 'react-router';



function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage />}>

        </Route>
      </Routes>
      {/* <HomePage />  */}
    </div>
  );
}

export default App;
