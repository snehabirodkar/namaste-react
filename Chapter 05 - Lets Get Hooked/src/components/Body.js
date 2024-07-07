import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

export const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container">
        {/* <RestroCard resData={restaurantList[0]} />
          <RestroCard resData={restaurantList[2]} /> */}
        {restaurantList.map((x, index) => (
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
