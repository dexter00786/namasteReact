import { IMG_CDN } from "../constant";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, sla }) => {
  return (
    <div className="card">
      <img src={IMG_CDN + cloudinaryImageId} alt="card-image" />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>deliveryTime : {sla?.slaString}</h4>
      {/* <h4>{restaurantList.rating} stars</h4> */}
    </div>
  );
};

export default RestaurantCard;
