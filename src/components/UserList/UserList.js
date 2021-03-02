import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import UserCard from "../UserCard/UserCard";
import "./UserList.css";

const App = () => {
  const [listOfUSer, setListOfUSer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setListOfUSer(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="list">
      {isLoading ? (
        <Spinner
          animation="border"
          variant="secondary"
          style={{ width: "10rem", height: "10rem", marginTop: "15% ", marginLeft:"45%"}}
        />
      ) : (
        listOfUSer.map((user) => <UserCard user={user} key={user.id} />)
      )}
    </div>
  );
};
export default App;
