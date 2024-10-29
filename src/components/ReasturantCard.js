import { useNavigate } from "react-router-dom";
import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, id } = props.resData.info;
    const navigate = useNavigate();
    return (
        <div className="res-card" onClick={() => {
            navigate(`/resta/${id}`)
        }}>
            <img className="res-logo" src={`${CDN_LINK}${cloudinaryImageId}`} />
            <h2>{name}</h2>
            <p>{costForTwo}</p>
            <p>{cuisines.join(', ')}</p>
            <p>{avgRating}</p>
        </div>
    )
}

export default RestaurantCard;