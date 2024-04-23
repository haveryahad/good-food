import { CDN_URL } from "../utils/constants";
import star from "../assets/star.svg";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = props.restaurantData;
  const { deliveryTime } = props.restaurantData.sla;
  return (
    <div className="res-card w-80 my-4">
      <div className="res-image-container">
        <img
          className="res-image w-80 h-48 object-cover rounded-xl shadow-xl"
          src={CDN_URL + cloudinaryImageId}
          alt="Restaurant Image"
        ></img>
        <h3
          className="res-name font-bold py-2 overflow-hidden text-ellipsis whitespace-nowrap w-11/12"
          title={name}
        >
          {name}
        </h3>
        <div className="font-semibold flex items-center">
          <span>{avgRating}</span>
          <span className="p-[2] mx-1 bg-green-600 rounded-xl">
            <img
              src={star}
              alt="Star"
              className="w-[14] h-[14]"
            />
          </span>
          <span style={{ padding: 4 }}> • {deliveryTime} mins</span>
        </div>
        <span className="res-cuisines">{cuisines.join(", ")}</span>
      </div>
    </div>
  );
};

//Higher Order Component
export const TopRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <div className="absolute bg-custom text-white -ml-2 mt-2 p-2 rounded-md">
          Top Rated
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
//Input -> Restaurant Card ==> TopRestaurantCard
export default RestaurantCard;
