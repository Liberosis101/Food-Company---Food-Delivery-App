import RestaurantCard from "./RestaurantCard";
import "./Body.css";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  console.log("body rendered");
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);
  const [displayAllRes, setDisplayAllRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.9800485&lng=72.6558824&is-seo-homepage-ena  bled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // console.log(json);
    setRestaurantList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRes(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const filterTopRated = () => {
    const topRated = restaurantList.filter((res) => res.info.avgRating > 4);
    setFilteredRes(topRated);
  };

  const filterResults = () => {
    const filterByName = restaurantList.filter((res) =>
      res.info.name
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .includes(searchText.toLowerCase())
    );
    setFilteredRes(filterByName);
    };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <main className="body-container">
      <div className="search-filter">
        <div className="search-query">
          <input
            type="search"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={filterResults}>Go</button>
        </div>
        <div className="filterOptions">
          <button onClick={filterTopRated}>Top Rated</button>
          <button onClick={fetchData}>All</button>
        </div>
      </div>
      <div className="restaurant-container">
        {filteredRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} data={restaurant} />
        ))}
      </div>
    </main>
  );
};

export default Body;
