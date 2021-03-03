import React from "react";
import { Card } from "react-bootstrap";
import "./UserCard.css";

const UserCard = ({ user }) => {
  const style = { background: "#28C0CE", color: "white", textAlign: "center" };
  return (
    <div className="card">
      <Card style={{ width: "18rem", backgroundColor: "#0E748A" }}>
        <Card.Img
          variant="top"
          src="https://www.mcrel.org/wp-content/uploads/2016/12/triad-icon-01-300x300.png"
        />
        <Card.Body style={style}>
          <h6>{user.id}</h6>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
            <h6>{user.email}</h6>
            <h6>{user.phone}</h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
