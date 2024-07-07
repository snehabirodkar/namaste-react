import RestaurantCard from "./RestaurantCard";
import resLis from "../utils/mockData";
import { useState } from "react";

export const Body = () => {
  //Local state variable

  const [restaurantList, setListOfRestraunt] = useState(resLis);

  return (
    <div className="body">
      <div className="d-flex">
        <div className="search">Search</div>
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
