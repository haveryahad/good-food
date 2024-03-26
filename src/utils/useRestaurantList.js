import { useState, useEffect } from "react";
import { RESTAURANT_DATA_URL } from "./constants";

const useRestaurantList = ({ setFilteredList }) => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const restaurantData = await fetch(RESTAURANT_DATA_URL);
    const resJson = await restaurantData.json();
    setlistOfRestaurants(
      resJson.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredList(
      resJson.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return [listOfRestaurants];
};

export default useRestaurantList;
