import { useNavigate } from "react-router-dom";
import { CDN_LINK } from "../utils/constants";
import userContext from "../utils/userContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, id } = props.resData.info;
    const navigate = useNavigate();
    const { loggedInUser } = useContext(userContext);
    
    return (
        <div className="res-card d-flex" onClick={() => {
            navigate(`/resta/${id}`)
        }}>
            <img className="res-logo" src={`${CDN_LINK}${cloudinaryImageId}`} />
            <h2>{name}</h2>
            <p>{costForTwo}</p>
            <p>{cuisines.join(', ')}</p>
            <p>{avgRating}</p>
            <p>{loggedInUser}</p>
        </div>
    )
}

export const OpenLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="open-label">Open</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;

