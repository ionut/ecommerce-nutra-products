import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = state.products.find(product => product.id === action.payload.id);
            if (product) {
                product.quantity = action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        },
        reset: (state) => {
            state.products = []
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeProduct, reset } = cartSlice.actions

export default cartSlice.reducer