import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = props.restaurantData;
  const { deliveryTime } = props.restaurantData.sla;
  return (
    <div className="res-card">
      <div className="res-image-container">
        <img
          className="res-image"
          src={CDN_URL + cloudinaryImageId}
          alt="Restaurant Image"
        ></img>
        <h3 className="res-name">{name}</h3>
        <div>
          <span>{avgRating} stars</span>
          <span style={{ padding: 5 }}>{deliveryTime} mins</span>
        </div>
        <span className="res-cuisines">{cuisines.join(", ")}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
