import React from 'react';
import {Route, Routes} from 'react-router-dom';

import CollectionPage from '../../pages/collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import { firestore, convertCollectionSnapshotToMap  } from '../../firebase/firebase.utils';


class ShopPage extends React.Component {
  
  unsubscribeFromSnapshot = null;

  componentDidMount(){

    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      convertCollectionSnapshotToMap(snapshot);
    })

  }
  compo

  render(){
    
    return(
    <div className='shop-page'>
      <Routes>
          <Route path="/" element={<CollectionsOverview />}/>
          <Route path=":collectionId" element={<CollectionPage />}/>
      </Routes>
    </div>  

    )}
};

export default ShopPage;