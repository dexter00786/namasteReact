import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

  const [restaurant, menu] = useRestaurant(resId);
  if (!restaurant) return null;
  return (
    <div>
      <h1>Restraunt Id : {resId}</h1>
      <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
      <h1>{restaurant?.name}</h1>
      <h2>{restaurant?.areaName + ", " + restaurant?.sla?.slaString}</h2>
      <h2>{restaurant?.costForTwoMessage}</h2>
      <div className="menu-list">
        {menu.map((ele, index) => {
          return <h4>{ele?.card?.card?.title}</h4>;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
