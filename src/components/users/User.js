import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    location:"",
    tenure:"",
    joindate:"",
    crime:"",
    work:""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">

      <h1 className="Uss">Criminal Details</h1>
      <hr />
      <ul className="list-group w-50 ">
        <li className="list-group-item odd fontbetter">Name: {user.name}</li>
        <li className="list-group-item even fontbetter">Location: {user.location}</li>
        <li className="list-group-item odd fontbetter">Tenure: {user.tenure}</li>
        <li className="list-group-item even fontbetter">JoinDate: {user.joindate}</li>
        <li className="list-group-item odd fontbetter">Crime: {user.crime}</li>
        <li className="list-group-item even fontbetter">Work: {user.work}</li>
      </ul>
      <Link className="btn btn-primary btn1 " to="/">
        HomePage
      </Link>
    </div>
  );
};

export default User;
