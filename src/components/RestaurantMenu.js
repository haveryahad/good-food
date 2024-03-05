import Shimmer from "./Shimmer";
import APIError from "./APIError";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategories from "./MenuCategories";
import { Link } from "react-router-dom";
import GreenStar from "../utils/greenStar";
import star from "../assets/green-star.svg";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showItems, setShowItems] = useState(false);
  const [showIndex, setShowIndex] = useState("");

  let resInfo = useRestaurantMenu(resId) || null;
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  try {
    if (resInfo == null) return <Shimmer page="menu" />;
    const { name, areaName, sla, cuisines, avgRating, totalRatingsString } =
      resInfo?.data?.cards[2]?.card?.card?.info ||
      resInfo?.data?.cards[0]?.card?.card?.info;
    const sections =
      resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
      resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const itemSections = sections.filter(
      (item) =>
        item.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(itemSections);
    document.title = name;
    return (
      <div className="menu-wrapper w-6/12 m-auto">
        <div className="text-gray-400 text-xs pb-8">
          <Link to="/">Home</Link> / <span className="font-bold">{name}</span>
        </div>
        <div className="flex justify-between items-center p-2 border-y-2 border-dotted">
          <div>
            <p>Hi {loggedInUser}!</p>
            <p className="text-xl font-bold">{name}</p>
            <p className="font-light text-sm">{cuisines.join(", ")}</p>
            <p className="font-light text-sm">
              {areaName + ", " + sla.lastMileTravelString}
            </p>
          </div>
          <div className="border-2 p-1 h-16">
            <div className="border-b-2 flex items-center justify-center text-sm">
              {/* <GreenStar /> */}
              <span>❇️</span>
              <p className="p-1 text-green-700 font-bold">{avgRating}</p>
            </div>
            <div className="p-1 text-[10px] text-gray-500 font-semibold">
              {totalRatingsString}
            </div>
          </div>
        </div>
        {itemSections.map((section, index) => (
          <MenuCategories
            key={section.card.card.title}
            section={section}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            setShowItems={() => setShowItems(false)}
            index={index}
          />
        ))}
      </div>
    );
  } catch (err) {
    console.log(err);
    return <APIError />;
  }
};

export default RestaurantMenu;
