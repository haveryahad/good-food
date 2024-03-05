import { MENU_ITEM_IMAGE_URL } from "../utils/constants";
const MenuItems = ({ itemCards }) => {
  return itemCards.map((item) => {
    return (
      <div
        className="flex justify-between items-center py-4"
        key={item.card.info.id}
      >
        <div className="menu-item-text w-9/12 px-4 pr-8 box-border">
          <div className="font-semibold text-sm">
            {item.card.info.name} - &#8377;{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </div>
          <p className="menu-item-description text-xs">
            {item.card.info.description}
          </p>
        </div>
        <div className="w-3/12 relative">
          <div className="menu-item-image">
            <img
              className="rounded-lg"
              src={MENU_ITEM_IMAGE_URL + item.card.info.imageId}
              alt="Image"
            ></img>
          </div>
          <button className="absolute -bottom-6 left-1/4 shadow-xl bg-white text-black rounded-md m-2 px-6 py-2">
            Add +
          </button>
        </div>
      </div>
    );
  });
};

export default MenuItems;
