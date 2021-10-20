import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const HospitalDetails = () => {
    const {id}=useParams()
    const [service, setServices] = useState([])
    useEffect(()=>{
        fetch('/health.json')
        .then(res => res.json())
        .then((data) => {
            const item = data.find(s => s.id == id )
            setServices(item)
        })
       
        
    },[])
    return (
        
        <div>
            {
                service.serviceName
            }
        </div>
    );
};

export default HospitalDetails;