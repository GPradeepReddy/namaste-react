import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./ReasturantCard";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    const filterRestaurants = () => {
        const filteredRes = listOfRestaurants.filter(res => res.info.avgRating > 4.5);
        setListOfRestaurants(filteredRes);
    }
    return (
        <>
            <button className="filter-button" onClick={filterRestaurants}>Filter Restaurants</button>
            <button className="filter-button" onClick={() => {
                setListOfRestaurants(resList)
            }}>Clear Filters</button>
            <div className="body-container">

                {
                    listOfRestaurants.map(res => <RestaurantCard key="res.info.id" resData={res} />)
                }
            </div>
        </>
    )
}

export default Body;