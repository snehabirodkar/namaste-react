import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

export const Body = () => {
  const [restaurantList, setListOfRestraunt] = useState([]);
  const [searchText, setSearchRestaurant] = useState("");

  useEffect(() => {
    console.log("UseEffect called");
    fetchData();
  }, []);
  fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9974533&lng=73.78980229999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    setListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //conditional rendering
  // if (restaurantList.length === 0) {
  //   return <Shimmer />;
  // }
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
              setSearchRestaurant(e.target.value);
            }}
          />
          <button
            className="serach-btn"
            onClick={() => {
              const FilteredRes = listOfResturant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setSearchRestaurant(FilteredRes);
            }}>
            Search
          </button>
        </div>
        <button
          className="filter"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (data) => data.data.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}>
          Top Rated
        </button>
      </div>
      <div className="rest-container">
        {restaurantList.map((x, index) => (
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
