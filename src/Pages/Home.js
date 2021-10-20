import React from 'react';
import Services from './Services';
import doctor from './../assets/images/doctors.jpg'



const Home = () => {
    
    return (
          
        <div> 

          <div className="container">
          <div className="row">
           <div className="col-12">
            <h1>this is Home Page shamsul islam shipon</h1>
            <img style={{width:'900px'}} src={ doctor} alt="" />
          </div>
          </div>
           
         </div> 
           <Services/>
        </div>
    );
};

export default Home;