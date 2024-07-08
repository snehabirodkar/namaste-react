import { CDN_URL } from "../utils/constants";

const Style = {
  backgroundColor: "#dfdfe7",
};
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    avgRating,
    name,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div
      className="cardWrapper"
      style={Style}>
      <img
        className="img-wrapper"
        src={CDN_URL + cloudinaryImageId}
        alt="pizza"
      />
      <h3>{name}</h3>
      <p>Cuisine: {cuisines.join(",")}</p>
      <p>Rating: {avgRating} Stars</p>
      <p>Cost: {costForTwo / 100} For Two</p>
      <p>Time: {deliveryTime / 100} minutes</p>
      {/* <p>Deliver time: 30mins</p> */}
    </div>
  );
};
export default RestaurantCard;
