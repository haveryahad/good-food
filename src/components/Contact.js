import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div>Contact Us Page</div>
      <Link to="mission">
        <button>Mission</button>
      </Link>
      <Link to="vision">
        <button>Vision</button>
      </Link>
      <Outlet />
    </>
  );
};
export default Contact;
