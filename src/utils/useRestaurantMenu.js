import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "../utils/constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_MENU_URL + resId);
    const jsonData = await data.json();
    console.log(`Restaurant Data:`);
    console.log(jsonData);
    setResInfo(jsonData);
  };
  return resInfo;
};

export default useRestaurantMenu;
