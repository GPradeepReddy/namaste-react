import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestauranrMenu = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);

    if (resInfo === null) return <Shimmer />;

    const {
        name,
        cuisines,
        costForTwoMessage,
        areaName,
        city,
    } = resInfo?.data?.cards[2]?.card?.card?.info;

    const { itemCards } =
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div>
            <h1 className='text-center text-green-500 p-6 font-serif text-4xl'>{name}</h1>
            <div className='text-center text-2xl text-neutral-500'>
                <h2>
                    {city}, {areaName}.
                </h2>
                <p>{cuisines.join(", ")}</p>
                <p>
                    {costForTwoMessage}
                </p>
            </div>
            {
                itemCards.map((item, index) => (<RestaurantCategory data={item} showDes={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)}/>))
            }
        </div>
    );
}

export default RestauranrMenu
