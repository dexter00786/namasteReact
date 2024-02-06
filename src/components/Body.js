import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import useRestaurantList from "../utils/useRestaurantList";
import useOnline from "../utils/useOnline";
import useLocalStorage from "../utils/useLocalStorage";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, filteredRestaurants] = useRestaurantList();

  const isOnline = useOnline();
  useLocalStorage();

  if (!isOnline) return <h1>You are offline, please check your internet!!!</h1>;

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
