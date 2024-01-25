import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;
  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.70045229546348&lng=77.06350965896037&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  }
  //   console.log(restaurant, "####res");
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
