import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SharedService from './SharedService/SharedService';


const Home = () => {
    const [service, setService]= useState([]);
    useEffect(()=>{
        fetch('./FakeData.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])

    return (
       <div>
           <h1>Our Services </h1>
            <div>
            
            <Row xs={1} md={2} lg={3} className="g-4 m-3 ">
           {
               service.map(signleService=> <SharedService
               key={signleService.id}
               myService={signleService}
               ></SharedService> )
           }
           </Row>
        </div>
       </div>
    );
};

export default Home;