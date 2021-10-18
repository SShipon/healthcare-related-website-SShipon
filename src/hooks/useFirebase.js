import {useState} from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication()

const googleProvider = new GoogleAuthProvider();

const auth = getAuth();


const useFirebase = () => {

   const [user, setUser] = useState({})
   const [error, setError] = useState('')

   function signInWithGoogle(){
    signInWithPopup(auth, googleProvider)
    .then(result =>{
        setUser(result.user);
    }).catch(error => {
        setError(error.message)
    })
}
    return{
        signInWithGoogle,
        user,
        error,

    } ;
};

export default useFirebase;