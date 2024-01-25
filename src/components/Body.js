import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const filterData = (searchInput, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchInput)
  );
};

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.615678935702885&lng=77.37428091466427&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data.cards);
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (!allRestaurants) return null;

  return allRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          alt="search here"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          name="search"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurants Match Your Filter</h1>
        ) : (
          filteredRestaurants.map((restaurant, index) => {
            return (
              <Link to={"/restaurant/" + restaurant.info.id}>
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
