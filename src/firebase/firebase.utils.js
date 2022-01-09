import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDwWjQicQ6jC13xujHyK9JCE2h7KtSzv7I",
  authDomain: "four-clothing.firebaseapp.com",
  projectId: "four-clothing",
  storageBucket: "four-clothing.appspot.com",
  messagingSenderId: "143904298848",
  appId: "1:143904298848:web:d5a2ae2d0e4aa0eefb3005",
  measurementId: "G-MSZVF8CVB4"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {

  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get(); 
  
  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

