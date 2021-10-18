import {useEffect, useState} from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut} from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication()

const googleProvider = new GoogleAuthProvider();

const auth = getAuth();


const useFirebase = () => {

   const [user, setUser] = useState({})
   const [error, setError] = useState('')

 //google sign in

   function signInWithGoogle(){
    signInWithPopup(auth, googleProvider)
    .then(result =>{
        setUser(result.user);
    }).catch(error => {
        setError(error.message)
    })
}
//Get the currently signed-in user
  useEffect(() =>{
   const unsubscribe = onAuthStateChanged(auth, (signInUser) => {
        if (signInUser) {
          setUser(signInUser);
         
        }
      });
      return () => unsubscribe;
  },[]);

  // logout
  function logOut(){
    signOut(auth)
         .then((result) => {
          setUser({})
         })
        .catch((error) => {
        setError(error.message)
      });

  }

//Get the currently signed-in user end
    return{
        logOut,
        signInWithGoogle,
        user,
        error,
        

    } ;
};

export default useFirebase;