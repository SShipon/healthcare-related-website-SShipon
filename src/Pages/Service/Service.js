
import React from 'react';
import './Service.css'

const Service = ({service}) => {
 const { imgUrl,discription,serviceName} = service
    return (
      
        <div className="col-lg-4 col-sm-6 col-12 ">
           <div className="service">
           <img className="image-size" src={imgUrl} alt="" />
            <h5>{serviceName}</h5>
            <p>{discription}</p>
            <button type="button" class="btn btn-info">Apply Now</button>
           </div>

        </div>
      
    
    );
};

export default Service;