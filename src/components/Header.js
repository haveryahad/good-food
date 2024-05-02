import { Link } from "react-router-dom";
import logo from "../assets/food-logo-transparent.png";
import nav_icon from "../assets/nav-menu-icon.png";
import star from "../assets/star.svg";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //Subscribing to redux store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="shadow-md h-[98] bg-white fixed w-full z-20">
      <div className="sm:flex justify-between bg-white items-center w-9/12 m-auto mb-8">
        <div className="flex items-center justify-between w-full md:w-56 h-24 m-auto sm:m-0">
          <Link to="/">
            <img
              className="logo sm:w-44 sm:h-24 m-auto w-36 h-20"
              src={logo}
              alt="logo"
            ></img>
          </Link>
          <span className="md:hidden relative">
            <input
              type="checkbox"
              id="navIcon"
              className="hidden"
            />
            <label htmlFor="navIcon">
              <img
                className="w-5 h-5"
                src={nav_icon}
              />
            </label>
            <span className="nav-drawer hidden absolute top-14 -right-24 bg-white shadow-md w-48 transition-all duration-1000">
              <ul className="flex flex-col text-left m-4 [&>li]:m-2">
                <li title="This shows whether you are connected to Internet or Offline">
                  <span>Online Status:</span>
                  {onlineStatus ? <span>🟢</span> : <span>🔴</span>}
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                {/* <li>
              <Link to="/contact">Contact Us</Link>
            </li> */}
                <li>
                  <Link to="/cart">Cart ({cartItems.length})</Link>
                </li>
              </ul>
            </span>
          </span>
        </div>
        <div>
          <ul className="hidden md:flex items-center text-center m-4 [&>li]:m-4">
            <li title="This shows whether you are connected to Internet or Offline">
              <span className="hidden lg:inline">Online Status:</span>
              {onlineStatus ? <span>🟢</span> : <span>🔴</span>}
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            {/* <li>
              <Link to="/contact">Contact Us</Link>
            </li> */}
            <Link to="/cart">
              <li className="w-20">Cart ({cartItems.length})</li>
            </Link>
            {/* <li className="box-border">
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
            </li> */}
            {/* <li>{loggedInUser}</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
