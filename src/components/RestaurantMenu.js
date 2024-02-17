import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_URL, MENU_ITEM_IMAGE_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  let resInfo = useRestaurantMenu(resId) || null;
  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const menu = await fetch(RESTAURANT_MENU_URL + resId);
  //   const menuJson = await menu.json();
  //   console.log(menuJson);
  //   setResInfo(menuJson);
  // };

  if (resInfo == null) return <Shimmer />;
  console.log("resInfo:" + resInfo);
  const { name } = resInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards, title } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
      ?.card;
  return (
    <div className="menu-wrapper">
      <h2>{name}</h2>
      <h3>Menu</h3>
      <h4>{title}</h4>
      <div>
        {itemCards.map((item) => (
          <div
            className="menu-item"
            key={item.card.info.id}
          >
            <div className="menu-item-text">
              <div>
                {item.card.info.name} - &#8377;{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </div>
              <p className="menu-item-description">
                {item.card.info.description}
              </p>
            </div>
            <div className="menu-item-image">
              <img src={MENU_ITEM_IMAGE_URL + item.card.info.imageId}></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
