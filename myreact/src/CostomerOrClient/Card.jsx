// import React, {Children} from "react";
import Button from 'react-bootstrap/Button';
import Card2 from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
// import jsonAry2 from "./bootjsg";



const Card=(object)=> {
  console.log(object);
  return (
    <>
    <Card style={{ width: '18rem' ,float:'left'}}>
      
      <Card.Img variant="top" src={object.pic} width="100%" height="180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Name: {object.name}
          Class:{object.classs}
          School:{object.school}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Card2;