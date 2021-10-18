import {useEffect, useState} from 'react'
import {signInWithEmailAndPassword,GithubAuthProvider, getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut} from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication()

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const auth = getAuth();


const useFirebase = () => {

   const [user, setUser] = useState({});
   const [error, setError] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");


 //google sign in

   function signInWithGoogle(){
    signInWithPopup(auth, googleProvider)
    .then(result =>{
        setUser(result.user);
    }).catch(error => {
        setError(error.message)
    });
}

//Github sign in

function signInWithGithub(){
  signInWithPopup(auth, githubProvider)
  .then(result =>{
      setUser(result.user);
  }).catch(error => {
      setError(error.message)
  });
}
//Email sign in

function signInWithEmail(){
  signInWithEmailAndPassword(email, password)
  .then(result =>{
      setUser(result.user);
  }).catch(error => {
      setError(error.message)
  });
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

 //getEmail

 function getEmail(e){
   setEmail(e?.target.value)

 }
 //getPassword

 function getPassword(e){
  setPassword(e?.target.value)

}

//Get the currently signed-in user end
    return{
      
      logOut,
      getEmail,
      signInWithEmail,
      getPassword,
      user,
      error,
      setUser,
      setError,
      signInWithGoogle,
      signInWithGithub,
        

    } ;
};

export default useFirebase;