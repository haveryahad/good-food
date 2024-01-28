import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);
  const [searchInput, setSearchInput] = useState('');
  return (
    <div className="body">
      <div className="search-filter-wrapper">
        <div className="filter-container">
          <button
            className="filter-btn"
            onClick={() => {
              //Filter based on Average Rating
              let filteredList = resList.filter(
                (res) => res.info.avgRating > 4.1
              );
              setlistOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              //Filter based on Delivery Time
              let filteredList = resList.filter(
                (res) => res.info.sla.deliveryTime < 30
              );
              setlistOfRestaurants(filteredList);
            }}
          >
            Fast Delivery
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              setlistOfRestaurants(resList);
              setSearchInput("");
            }}
          >
            Remove Filter
          </button>
        </div>
        <div className="search-bar">
        <input
            id="searchInputBox"
            type="text"
            className="search-input"
            placeholder="Search here ..."
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            onKeyUp={(e) => {
              setSearchInput(e.target.value);
              let filteredList = resList.filter((res) => {
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
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant.info}
          />
        ))}
      </div>
    </div>
  );  
}

export default Body;
