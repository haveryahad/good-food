import { useState, useEffect, useContext } from "react";
import resList from "../utils/mockData";
import RestaurantCard, { TopRestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import { RESTAURANT_DATA_URL } from "../utils/constants";
import APIError from "./APIError";
import UserContext from "../utils/UserContext";
import FilterButton, { FilterActive } from "./FilterButton";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [isFilterActive, setFilterActive] = useState(false);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const restaurantData = await fetch(RESTAURANT_DATA_URL);
      const resJson = await restaurantData.json();
      setlistOfRestaurants(
        resJson.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredListOfRestaurants(
        resJson.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.log(`Error in fetching Restaurant Data: ${err.message}`);
    }
  };

  const onlineStatus = useOnlineStatus("body");

  const TopRatedRestaurant = TopRestaurantCard(RestaurantCard);
  const FilterActiveButton = FilterActive(FilterButton);
  //const [listOfRestaurants] = useRestaurantList();

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
          <div className="filter-container flex">
            <div>
              <button
                className="m-2 px-2 pr-3 py-1 rounded-2xl border-[#a09b9b] border shadow-md"
                onClick={() => {
                  //Filter based on Average Rating
                  let filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4.1
                  );
                  setFilteredListOfRestaurants(filteredList);
                }}
              >
                Top Rated Restaurants
              </button>
            </div>
            <div>
              <button
                className="m-2 px-2 pr-3 py-1 rounded-2xl border-[#a09b9b] border shadow-lg"
                onClick={() => {
                  //Filter based on Delivery Time
                  let filteredList = listOfRestaurants.filter(
                    (res) => res.info.sla.deliveryTime < 20
                  );
                  setFilteredListOfRestaurants(filteredList);
                }}
              >
                Fast Delivery
              </button>
            </div>
            {/* <FilterButton name="Newly Added" />
            <FilterActiveButton
              name="Newly Added"
              isActive={isFilterActive}
              setFilterActive={() => {
                setFilterActive(!isFilterActive);
              }}
            /> */}
            <div>
              <button
                className="m-2 px-2 pr-3 py-1 rounded-2xl border-[#a09b9b] border shadow-lg"
                onClick={() => {
                  setFilteredListOfRestaurants(listOfRestaurants);
                  setSearchInput("");
                }}
              >
                Remove Filter
              </button>
            </div>
          </div>
          <div className="m-2">
            <input
              id="searchInputBox"
              type="text"
              className="search-input outline-none border px-2 py-1 w-[450] rounded-lg focus:border-[#a09b9b] focus:shadow-lg transition-all duration-500"
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
                setFilteredListOfRestaurants(filteredList);
              }}
            ></input>
          </div>
        </div>
        <div className="res-container flex flex-wrap justify-between">
          {filteredListOfRestaurants.map((restaurant) => (
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
