import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./ReasturantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {

        const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const data = await res.json();

        setListOfRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilteredRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const useFilterRestaurants = (type = 'rating') => {
        let filterData = [];
        if (type === 'rating') {
            filterData = listOfRestaurants.filter(res => res.info.avgRating > 4);
        } else {
            filterData = listOfRestaurants.filter(res => res.info[type].toLowerCase().includes(searchText.toLowerCase()));
            setSearchText('');
        }
        setFilteredRestaurants(filterData);
    }

    return (
        <>
            <div className="filters-container">
                <div className="search-container">
                    <input className="filter-input" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className="filter-button" onClick={() => useFilterRestaurants('name')}>Search</button>
                </div>
                <button className="filter-button" onClick={() => useFilterRestaurants('rating')}>Rating 4 and above</button>
                <button className="filter-button" onClick={() => {
                    setFilteredRestaurants(listOfRestaurants)
                }}>Clear Filters</button>
            </div>
            {
                filteredRestaurants.length === 0 ? <Shimmer /> :
                    (<div className="body-container">

                        {
                            filteredRestaurants.map(res => <RestaurantCard key="res.info.id" resData={res} />)
                        }
                    </div >)
            }
        </>
    )
}

export default Body;