import React, { useEffect, useState } from 'react'

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);

        const data = await res.json();

        setResInfo(data);
    }

    return resInfo;

}

export default useRestaurantMenu
