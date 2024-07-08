import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;
  const { deliveryTime } = resData?.info.sla;
  return (
    <div className="cardWrapper bg-color">
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
