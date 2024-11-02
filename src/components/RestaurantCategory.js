import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const RestaurantCategory = ({ data, showDes, setShowIndex }) => {
    const { name, description, price } = data?.card?.info;
    const dispatch = useDispatch();

    const handleShowDes = () => {
        setShowIndex();
    }

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    return (
        <div className='w-6/12 bg-slate-200 mb-4 p-4 m-auto' onClick={handleShowDes}>
            <div className='text-2xl flex justify-between'>
                <spn>{name} 💲 ({price})</spn>
                {
                    !showDes ? <span>🔽</span> : <span>🔼</span>
                }
                
            </div>
            {
                showDes && (
                    <div className='p-6 text-teal-400 text-xl flex justify-between'>
                        <span>{description}</span>
                        <span onClick={() => handleAddItem(data?.card?.info)}>➕</span>
                    </div>
                )
            }
        </div>
    )
}

export default RestaurantCategory
