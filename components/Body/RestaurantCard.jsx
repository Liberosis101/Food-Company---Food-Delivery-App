import "./RestaurantCard.css";
import { IMG_URL } from "../../src/utils/constants";

const RestaurantCard = (props) => {
  const { data } = props;
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } =
    data.info;
  const { deliveryTime } = data.info.sla;

  return (
    <div className="card-container">
      <div className="image">
        <img src={IMG_URL + cloudinaryImageId} alt="restaurant-image" />
      </div>
      <div className="card-info">
        <div className="title">
          <h1>{name}</h1>
        </div>
        <div className="rating-deliveryTime">
          <img src="./src/assets/star-rating-icon.jpg" alt="rating-logo" />
          {avgRating}
          <span className="separator"> • </span>
          <p>{deliveryTime} minutes</p>
        </div>
        <div className="cuisine">
          <p>{cuisines.join(", ") + "."} </p>
        </div>
        <div className="cost-for-two">
          <p>{costForTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
