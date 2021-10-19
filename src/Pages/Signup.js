import React from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
    return (
        <div className="login-form">
            <div>
            <h2>Please create account</h2>
            <form onSubmit="">
               <input className="mb-2" type="email" name="" id="" placeholder="Your Email"/>
               <br/>
               <input className="mb-2" type="password" name="" id="" placeholder="Your password"/>
               <br/> 
               <input className="mb-2" type="password" name="" id="" placeholder="Re-enter password"/>
               <br/>
               <input className="mb-2" type="submit" value="Submit" />
               </form>
                 </div>
               <p>Already have an account?<Link
               to="/login">Login</Link></p>
            </div>
    );
};

export default Signup;