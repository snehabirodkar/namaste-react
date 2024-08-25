import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

export const Body = () => {
  const [restaurantList, setListOfRestraunt] = useState([]);
  const [filteredList, setFilteredListOfRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("UseEffect called");
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9974533&lng=73.78980229999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="d-flex">
        <div className="search">
          <input
            type="text"
            placeholder="search resto"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="serach-btn"
            onClick={() => {
              const FilteredRes = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestraunt(FilteredRes);
            }}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const Filterlist = filteredList.filter(
              (res) => res.info.avgRating > 4.4
            );
            setFilteredListOfRestraunt(Filterlist);
          }}>
          Top Rated Resturants
        </button>
      </div>
      <div className="rest-container">
        {filteredList.map((x, index) => (
          <RestaurantCard
            key={index}
            resData={x}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
