import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';

const RestauranrMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${params?.resId}&catalog_qa=undefined&submitAction=ENTER`);

        const data = await res.json();

        setResInfo(data);
    }

    if (resInfo === null) return <Shimmer />;

    const {
        name,
        cuisines,
        costForTwoMessage,
        areaName,
        city,
        costForTwo,
    } = resInfo?.data?.cards[2]?.card?.card?.info;

    const { itemCards } =
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    return (
        <div>
            <h1>{name}</h1>
            <h2>
                {city}, {areaName}.
            </h2>
            <p>{cuisines.join(", ")}</p>
            <p>
                {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map((el) => (
                    <li key={el?.card?.info?.id}>
                        {el?.card?.info?.name}, Rs: {el?.card?.info?.price / 100}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RestauranrMenu
