import { useState } from "react";
import MenuItems from "./MenuItems";

const MenuCategories = ({
  section,
  index,
  vegFilter,
  showItems,
  setShowIndex,
  setShowItems,
}) => {
  let { title, itemCards } = section.card.card;
  const handleClick = (e) => {
    if (!showItems) {
      setShowIndex(index);
    } else {
      setShowIndex(null);
    }
  };
  if (vegFilter) itemCards = getVegItemCards(itemCards);
  return !itemCards?.length ? (
    <></>
  ) : (
    <div
      className="border-b-8 py-1 shadow-sm my-3"
      key={title}
    >
      <div
        className="flex justify-between cursor-pointer px-4 py-2"
        onClick={handleClick}
      >
        <div className="text-md font-semibold">
          {title} ({itemCards?.length})
        </div>
        <div className="text-lg">⬇️</div>
      </div>
      {showItems && (
        <MenuItems
          itemCards={itemCards}
          page="menu"
        />
      )}
    </div>
  );
};
const getVegItemCards = (itemCards) => {
  return itemCards.filter((item) => item.card.info.isVeg);
};
export default MenuCategories;
