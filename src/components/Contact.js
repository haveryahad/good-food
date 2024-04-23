import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div className="pt-32">
      <div>Contact Us Page</div>
      <Link to="mission">
        <button>Mission</button>
      </Link>
      <Link to="vision">
        <button>Vision</button>
      </Link>
      <Outlet />
    </div>
  );
};
export default Contact;
