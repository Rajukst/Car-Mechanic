import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SharedService.css'
const SharedService = ({myService}) => {
    const {serviceName, serviceCharge, description, img }= myService;
 return (
<Col>
<Card className="style-card">
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{serviceName}</Card.Title>
    <h4>{serviceCharge}</h4>
    <Card.Text>
      {description}
    </Card.Text>
  </Card.Body>
</Card>
</Col>
    );
};

export default SharedService;






    
