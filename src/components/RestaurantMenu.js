import Shimmer from "./Shimmer";
import APIError from "./APIError";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategories from "./MenuCategories";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showItems, setShowItems] = useState(false);
  const [showIndex, setShowIndex] = useState(0);
  const [vegFilter, setVegFilter] = useState(0);

  let resInfo = useRestaurantMenu(resId) || null;
  const { loggedInUser } = useContext(UserContext);
  try {
    if (resInfo == null) return <Shimmer page="menu" />;
    const { name, areaName, sla, cuisines, avgRating, totalRatingsString } =
      getResInfo(resInfo);

    const sections = getSectionInfo(resInfo);
    const itemSections = getFilteredSections(sections);
    const changeVegFilter = () => setVegFilter(!vegFilter);
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
              <span>❇️</span>
              <p className="p-1 text-green-700 font-bold">{avgRating}</p>
            </div>
            <div className="p-1 text-[10px] text-gray-500 font-semibold">
              {totalRatingsString}
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="vegFilterSwitch"
            className="flex p-2 cursor-pointer"
          >
            <span>Veg Only</span>
            <span
              className={
                "w-12 h-6 border-2 border-slate-500 rounded-xl inline-block transition-all duration-300 mx-2" +
                (vegFilter ? " pl-6 border-green-700" : "")
              }
            >
              <span
                className={
                  "bg-slate-500 rounded-xl w-5 h-5 inline-block" +
                  (vegFilter ? " bg-[--color-veg]" : "")
                }
              ></span>
            </span>
          </label>
          <input
            type="checkbox"
            id="vegFilterSwitch"
            name="vegFilter"
            className="hidden"
            value={vegFilter}
            onChange={changeVegFilter}
          />
        </div>
        {itemSections.map((section, index) => (
          <MenuCategories
            key={section.card.card.title}
            section={section}
            index={index}
            vegFilter={vegFilter}
            showItems={showIndex == index}
            showIndex={showIndex}
            setShowIndex={() => {
              setShowIndex(index);
            }}
            setShowItems={(item) => {
              setShowItems(item);
            }}
          />
        ))}
      </div>
    );
  } catch (err) {
    console.log(err);
    return <APIError />;
  }
};

const getResInfo = (resInfo) => {
  return (
    resInfo?.data?.cards[2]?.card?.card?.info ||
    resInfo?.data?.cards[0]?.card?.card?.info
  );
};

const getSectionInfo = (resInfo) => {
  return (
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    resInfo?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );
};
const getFilteredSections = (sections) => {
  return sections.filter(
    (item) =>
      item.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
};
export default RestaurantMenu;
