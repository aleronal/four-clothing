import React from 'react';
import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

import { Link } from 'react-router-dom';

const CollectionPreview = ({title, routeName, items}) => (
    <div className='collection-preview'>
        <Link className='title' to={routeName}>{title.toUpperCase()}</Link>
        <div className='preview'>
            {
                items
                .filter((item , idx) => idx < 4)
                .map(item =>(
                    <CollectionItem key={item.id} item={item}></CollectionItem>
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;