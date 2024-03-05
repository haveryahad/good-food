import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = props.restaurantData;
  const { deliveryTime } = props.restaurantData.sla;
  return (
    <div className="res-card w-80 px-4 my-4">
      <div className="res-image-container">
        <img
          className="res-image w-72 h-48 object-cover rounded-lg"
          src={CDN_URL + cloudinaryImageId}
          alt="Restaurant Image"
        ></img>
        <h3 className="res-name font-bold py-2">{name}</h3>
        <div>
          <span>{avgRating} stars</span>
          <span style={{ padding: 5 }}>{deliveryTime} mins</span>
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
        <div className="absolute bg-custom text-white m-2 p-2 rounded-md">
          Top Rated
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
//Input -> Restaurant Card ==> TopRestaurantCard
export default RestaurantCard;
