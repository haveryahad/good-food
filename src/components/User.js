const User = ({ name, location }) => {
  return (
    <div className="user-card">
      <h4>Name: {name}</h4>
      <h4>Location: {location}</h4>
      <h4>Designation: Software Engineer II</h4>
      <h6>Organisation: Mastercard</h6>
    </div>
  );
};

export default User;
