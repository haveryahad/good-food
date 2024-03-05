import { useState } from "react";

const User = ({ name, location, componentType }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(20);
  return (
    <div className="user-card">
      <h4>Name: {name}</h4>
      <h4>Location: {location}</h4>
      <h4>Designation: Software Engineer II</h4>
      <h6>This is a {componentType} component</h6>
    </div>
  );
};

export default User;
