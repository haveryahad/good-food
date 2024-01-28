import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);
  
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
              
            }}
          >
            Remove Filter
          </button>
        </div>
        <div className="search-bar">
          
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
