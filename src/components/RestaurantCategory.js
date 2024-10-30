import React from 'react'

const RestaurantCategory = ({ data, showDes, setShowIndex }) => {
    const { name, description, price } = data?.card?.info;

    const handleShowDes = () => {
        setShowIndex();
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
                showDes && <div className='p-6 text-teal-400 text-xl'>
                    {description}
                </div>
            }
        </div>
    )
}

export default RestaurantCategory
