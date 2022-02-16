import {createSelector} from 'reselect';
import { memoize } from "lodash";


const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.values(collections) : []
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam] : null
));

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
)