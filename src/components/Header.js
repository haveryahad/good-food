import { Link } from "react-router-dom";
import logo from "../assets/food-logo.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus("header");
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <div className="flex justify-between items-center">
      <div className="w-56 h-24">
        <Link to="/">
          <img
            className="logo h-32"
            src={logo}
            alt="logo"
          ></img>
        </Link>
      </div>
      <div>
        <ul className="flex items-center text-center m-4 [&>li]:m-4">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="w-20">Cart</li>
          <li className="box-border">
            <Link to="/signup">
              <button
                className="border box-border rounded-lg px-4 py-1 hover:bg-blue-300 hover:text-white"
                onClick={() => {
                  btnName === "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login");
                }}
              >
                {btnName}
              </button>
            </Link>
          </li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
