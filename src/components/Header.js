import { Link } from "react-router-dom";
import logo from "../assets/food-logo-transparent.png";
import star from "../assets/star.svg";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus("header");
  const { loggedInUser } = useContext(UserContext);

  //Subscribing to redux store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="shadow-md h-[98] bg-white fixed w-[100vw] z-20">
      <div className="flex justify-between bg-white items-center w-9/12 m-auto mb-8">
        <div className="w-56 h-24">
          <Link to="/">
            <img
              className="logo w-44 h-24 m-auto"
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
            <Link to="/cart">
              <li className="w-20">Cart ({cartItems.length})</li>
            </Link>
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
            {/* <li>{loggedInUser}</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
