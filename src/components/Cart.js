import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearItems, removeItem } from '../utils/cartSlice';

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    return (
        <div className='flex justify-center flex-col'>
            <h1 className='text-center text-4xl my-3'>Cart</h1>
            <button className='bg-slate-900 text-white p-3 text-xl'
                onClick={() => {
                    dispatch(clearItems())
                }}>Clear Cart</button>
            {
                cartItems.map(item => (
                    <div className='bg-yellow-300 w-6/12 m-auto p-5 mb-2'>
                        <p onClick={() => {
                            dispatch(removeItem())
                        }}>❌</p>
                        <h1>{item.name}</h1>
                        <h2>{item.description}</h2>

                    </div>))
            }
        </div>
    )
}

export default Cart
