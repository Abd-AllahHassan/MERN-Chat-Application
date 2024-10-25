import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const HoverCard = () => {
  return (
    <div className="card-container">
      <Card className="hover-card">
        <Card.Img variant="top" src="image1.png" />
        <Card.Body>
          <div className="hover-text">
            <p>Word 1</p>
            <p>Word 2</p>
            <p>Word 3</p>
            <p>Word 4</p>
          </div>
        </Card.Body>
      </Card>
      <Card className="hover-card">
        <Card.Img variant="top" src="image1.png" />
        <Card.Body>
          <div className="hover-text">
            <p>Word 1</p>
            <p>Word 2</p>
            <p>Word 3</p>
            <p>Word 4</p>
          </div>
        </Card.Body>
      </Card>
      {/* Add more cards as needed */}
    </div>
  
  );
};

export default HoverCard;
