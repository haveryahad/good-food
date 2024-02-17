import { useState } from "react";

const User = ({ name, location, componentType }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(20);
  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h2>Count2: {count2}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount2(count2 - 1);
        }}
      >
        Increment/Decrement Counter
      </button>
      <h4>Name: {name}</h4>
      <h4>Location: {location}</h4>
      <h4>Designation: Software Engineer II</h4>
      <h6>This is a {componentType} component</h6>
    </div>
  );
};

export default User;
