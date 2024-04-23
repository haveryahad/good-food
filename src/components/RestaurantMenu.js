import Shimmer from "./Shimmer";
import APIError from "./APIError";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategories from "./MenuCategories";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import UserContext from "../utils/UserContext";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showItems, setShowItems] = useState(false);
  const [showIndex, setShowIndex] = useState(0);
  const [vegFilter, setVegFilter] = useState(0);
  const [resInfo, setResInfo] = useState(null);

  // let resInfo = useRestaurantMenu(resId) || null;
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      if (resId === "154513") {
        setResInfo(resMenu);
        return resInfo;
      }
      // const data = await fetch(RESTAURANT_MENU_URL + resId);
      const data = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.063222&lng=72.830396&restaurantId=${resId}`
        )}`
      );
      let jsonData = await data.json();
      let contentJson = jsonData.contents;
      console.log(`Restaurant Data:`);
      console.log(jsonData);
      console.log(JSON.parse(contentJson));
      jsonData = jsonData.data ? jsonData : JSON.parse(contentJson);
      setResInfo(jsonData);
      // return resInfo;
    } catch (err) {
      console.log(err.message);
    }
  };
  const { loggedInUser } = useContext(UserContext);
  try {
    if (resInfo == null) return <Shimmer page="menu" />;
    const {
      name,
      areaName,
      sla,
      cuisines,
      avgRating,
      totalRatingsString,
      veg,
    } = getResInfo(resInfo);

    const sections = getSectionInfo(resInfo);
    const itemSections = getFilteredSections(sections);
    const changeVegFilter = () => setVegFilter(!vegFilter);
    document.title = name;
    return (
      <div className="menu-wrapper w-6/12 m-auto pt-32">
        <div className="text-gray-400 text-xs pb-8">
          <Link to="/">Home</Link> / <span className="font-bold">{name}</span>
        </div>
        <div className="flex justify-between items-center p-2 border-y-2 border-dotted">
          <div>
            <p className="font-light text-sm">Hi {loggedInUser}!</p>
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
        {veg ? (
          <div className="m-3">
            <span className="border border-[#0f8a65] px-1">
              <span className="bg-[#0f8a65] rounded-lg w-3 h-3 inline-block"></span>
            </span>
            <span className="text-[#0f8a65] mx-1">Pure Veg</span>
          </div>
        ) : (
          <div className="m-2">
            <label
              htmlFor="vegFilterSwitch"
              className="flex p-2 cursor-pointer"
            >
              <span
                className={
                  "font-semibold" +
                  (vegFilter ? " text-green-700" : " text-slate-500")
                }
              >
                Veg Only
              </span>
              <span
                className={
                  "w-12 h-6 border-2 rounded-xl inline-block transition-all duration-300 mx-2" +
                  (vegFilter ? " pl-6 border-green-700" : " border-slate-500")
                }
              >
                <span
                  className={
                    "rounded-xl w-5 h-5 inline-block border border-white" +
                    (vegFilter ? " bg-[--color-veg]" : " bg-slate-500")
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
        )}
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
