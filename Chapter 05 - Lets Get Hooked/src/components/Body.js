import RestaurantCard from "./RestaurantCard";
import resLis from "../utils/mockData";
import { useState } from "react";

export const Body = () => {
  const [restaurantList, setListOfRestraunt] = useState(resLis);
  const [searchText, setSearchRestaurant] = useState("");
  // Its array destructuring

  // const restaurantList = arr[0];
  // const setListOfRestraunt = arr[1];
  function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  }
  return (
    <div className="body">
      <div className="d-flex">
        <div className="search">
          Search
          <input
            type="text"
            placeholder="search resto"
            value={searchText}
            onChange={(e) => {
              setSearchRestaurant(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              // filter the data
              const data = filterData(searchText, restaurantList);
              // update the state of restaurants list
              setListOfRestraunt(data);
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
            console.log(filteredList);
          }}>
          Top Rated
        </button>
      </div>
      <div className="rest-container">
        {restaurantList.map((x) => (
          <RestaurantCard
            key={x.data.id}
            resData={x}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
