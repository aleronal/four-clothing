import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {connect} from 'react-redux';


import CollectionPageContainer from '../../pages/collection/collection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

import {fetchCollectionsStart} from '../../redux/shop/shop.actions';


class ShopPage extends React.Component {
  
  componentDidMount(){
   const {fetchCollectionsStart} = this.props;
   fetchCollectionsStart();
    
  } 

  render(){
    
    return(
    <div className='shop-page'>
      <Routes>
          <Route path="/" element={<CollectionsOverviewContainer></CollectionsOverviewContainer>}/>
          <Route path=":collectionId" element={<CollectionPageContainer></CollectionPageContainer>}/>
      </Routes>
    </div>  

    )}
};


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);