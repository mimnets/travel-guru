import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const loginFrameworkInitialization = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleSignIn = () => {
    const googleSignInprovider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleSignInprovider)
        .then(function (result) {
            const { displayName, email, photoURL } = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            };
            return signedInUser;
        })
        .catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
    });
}

export const handleFBSignIn = () =>{
    const facebookSignInProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(facebookSignInProvider)
    .then(function(result) {
        const {displayName, email} = result.user;
        const signedInUser = {
            isSignedIn: true,
            name : displayName,
            email: email,
            success: true
        };
        return signedInUser;
      }).catch(function(error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
}