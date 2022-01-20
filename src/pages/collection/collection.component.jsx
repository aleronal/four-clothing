import React from 'react';
import './collection.styles.scss';

import {useParams} from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';

import {connect} from 'react-redux';
import { useSelector } from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors';

const CollectionPage = () => {
   
    let params = useParams();
    const collection = useSelector(selectCollection(params.collectionId))
    
return(
    <div className='collection-page'>
        <h2>{collection.title}</h2>
    </div>
)};





export default CollectionPage;
