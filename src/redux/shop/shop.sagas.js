import { takeEvery, call, put } from 'redux-saga/effects'; 
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync(){
    yield console.log('I am fired');

    try{
    const collectionRef = firestore.collection('collections');

    // *Yield is like await, but also pause the execution of the function.
    // This says: Wait for collection Ref.get() to complete, store it in the snapshot variable and pause the function until .next() is called.

    const snapshot = yield collectionRef.get();

    //Because it could potentially take a while before this method is Completed we use the call function.
    // This takes a function as the first parameter, and the functions Own paramaters and subsequent paramaters .
    // Because we use call it's possible to use yield on the function and therefore use it in the saga.
    const collectionsMap = yield call(convertCollectionSnapshotToMap,snapshot); 
        
    // This is like the redux dispatch function, only because this uses sagas it has it own keyword called put.
    // Put dispatches an action and a payload to the reducer.
    yield put(fetchCollectionsSuccess(collectionsMap)); 
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {

    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);

}