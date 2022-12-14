import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';
import baseUrl from '../constants/baseUrl';
// import { get } from 'mongoose';

export const AddToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(baseUrl + `/api/products/${id}`)

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}


export const RemoveFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}