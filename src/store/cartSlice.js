import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: "cart",
    initialState: {
        product: [], totalQuantity: 0, total: 0
    },
    reducers: {
        add(state, action) {
            const newItem = action.payload;
            const existingItem = state.product.find((item) => item.id === newItem.id)
            // console.log(existingItem);
            state.totalQuantity++
            if (!existingItem) {
                state.product.push(
                    {
                        id: newItem.id,
                        price: newItem.price,
                        dish: newItem.dish,
                        image: newItem.image,
                        quantity: 1,
                        totalPrice: newItem.price,
                        final: newItem.price
                    }
                );
            } else {
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
                existingItem.final = existingItem.totalPrice + newItem.price
            }
            state.total = state.total + newItem.price
            // console.log(action.payload);


            // state.product.push(action.payload)
            // // state.total.push(action.payload.price)
            // state.total = +state.total + +action.payload.price;
            // console.log(+state.total + action.payload.price);
        },
        remove(state, action) {
            const id = action.payload;

            const existingItem = state.product.find((item) => item.id === id);
            state.totalQuantity--
            if (existingItem.quantity === 1) {
                state.product = state.product.filter((item) => item.id != id)
                state.total = state.total - existingItem.price
            } else {
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
                state.total = state.total - existingItem.price
            }


            // const existingItem = state.product.find((item) => item.id === id)

            // state.product = state.product.filter((item) => item.id !== id)
            // state.total = +state.total - action.payload.price;
            // return state.splice(action.payload, 1)

        },

    }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice;