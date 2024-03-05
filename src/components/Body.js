import { useState, useEffect, useContext } from "react";
import resList from "../utils/mockData";
import RestaurantCard, { TopRestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import APIError from "./APIError";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const onlineStatus = useOnlineStatus("body");

  const TopRatedRestaurant = TopRestaurantCard(RestaurantCard);
  const [listOfRestaurants, setlistOfRestaurants] = useRestaurantList();
  console.log(listOfRestaurants);
  // const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);
  if (!onlineStatus)
    return (
      <h1>You seem to be offline, Please check your internet connection. 🔌</h1>
    );
  document.title = "Good Food React";
  try {
    //Conditional Rendering for Shimmer Effect
    return !listOfRestaurants?.length ? (
      <Shimmer page="home" />
    ) : (
      <div className="w-11/12 m-auto">
        <div className="flex">
          <div className="filter-container">
            <button
              className="m-4"
              onClick={() => {
                //Filter based on Average Rating
                let filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4.1
                );
                setlistOfRestaurants(filteredList);
              }}
            >
              Top Rated Restaurants
            </button>
            <button
              className="m-4"
              onClick={() => {
                //Filter based on Delivery Time
                let filteredList = listOfRestaurants.filter(
                  (res) => res.info.sla.deliveryTime < 20
                );
                setlistOfRestaurants(filteredList);
              }}
            >
              Fast Delivery
            </button>
            <button
              className="filter-btn"
              onClick={() => {
                setlistOfRestaurants(filteredList);
                setSearchInput("");
              }}
            >
              Remove Filter
            </button>
          </div>
          <div className="m-4">
            <input
              id="searchInputBox"
              type="text"
              className="search-input outline-none border px-1"
              placeholder="Search here ..."
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              onKeyUp={(e) => {
                setSearchInput(e.target.value);
                let filteredList = listOfRestaurants.filter((res) => {
                  //Search in Restaurant Name and Cuisines
                  return (
                    res.info.name
                      .toLowerCase()
                      .search(searchInput.toLowerCase()) != -1 ||
                    res.info.cuisines
                      .join(" ")
                      .toLowerCase()
                      .search(searchInput.toLowerCase()) != -1
                  );
                });
                setlistOfRestaurants(filteredList);
              }}
            ></input>
          </div>
          <div>
            {/* <label htmlFor="userName">User Name: </label>
            <input
              id="userName"
              className="border border-black p-1 outline-none"
              value={loggedInUser}
              onChange={(e) => setLoggedInUser(e.target.value)}
            /> */}
          </div>
        </div>
        <div className="res-container flex flex-wrap justify-between">
          {listOfRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`/restaurants/${restaurant.info.id}`}
            >
              {restaurant.info.avgRating >= 4.5 ? (
                <TopRatedRestaurant restaurantData={restaurant.info} />
              ) : (
                <RestaurantCard restaurantData={restaurant.info} />
              )}
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (err) {
    console.log(err);
    return <APIError />;
  }
};

export default Body;
