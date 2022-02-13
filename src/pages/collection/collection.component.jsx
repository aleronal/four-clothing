import React from 'react';
import './collection.styles.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors';

const CollectionPage = () => {

    let params = useParams();
    
    const collection = useSelector(selectCollection(params.collectionId))
    const {title, items} = collection;
    
return(
    console.log(params),
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {
                items.map(item => <CollectionItem key={item.id} item={item}></CollectionItem> )
            }

        </div>
    </div>
)};


export default CollectionPage;
