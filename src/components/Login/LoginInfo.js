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
        // console.log(result);
        const {name, email} = result.user;
        const signedInUser = {
            isSignedIn: true,
            name : name,
            email: email,
            success: true
        };
        return signedInUser;
      }).catch(function(error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
}

export const createUserWithEmailAndPass = (name, email, password) => {
          return firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(res => {
              const newUserInfo = res.user;
              newUserInfo.error ='';
              newUserInfo.success = true;
              updateUserName(name);
              return newUserInfo;
          })
          .catch(function(error) {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
          });
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;
            user.updateProfile({
            displayName: name,
            })
            .then(function() {
            // Update successful.
            })
            .catch(function(error) {
            // An error happened.
            });
    }