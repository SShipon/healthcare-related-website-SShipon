import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


import './Services.css'



const Services = () => {
   const [services, SetServices] = useState([])
   useEffect(() =>{
       fetch('health.json')
       .then (res => res.json())
       .then (data => SetServices(data))
   },[])
   
    return (
        <div className="container">
            <h2>Your Services</h2>
         <div className="row">
         {
             services.map(service => <Service
              key={service.id}
              service ={service}
             ></Service>)
         }
         </div>
        </div>
    );
};

export default Services;