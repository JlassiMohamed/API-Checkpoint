import React from "react";
import { Card, Button } from "react-bootstrap";
import "./UserCard.css";

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <div className="card">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://www.mcrel.org/wp-content/uploads/2016/12/triad-icon-01-300x300.png"
        />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.address.city}</Card.Text>
          <Button variant="primary">User</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
