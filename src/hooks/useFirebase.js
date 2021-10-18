import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication()

const googleProvider = new GoogleAuthProvider();

const auth = getAuth();

const useFirebase = () => {
   function signInWithGoogle(){
    signInWithPopup(auth, googleProvider)
    .then(result =>{
        console.log(result.user);
    })
   }
     
    return{
        signInWithGoogle
    } ;
};

export default useFirebase;