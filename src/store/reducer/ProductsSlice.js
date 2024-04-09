import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





const ProductsSlice = createSlice({
    name: "products",
    initialState: {
        products: [
            {
                from : "سلا",
                to : "الرباط",
                taxiNumber : "6230",
                id : 1,
                time: "2:00",
                numberOfProducts: 1,

            },
            {
                from : "الرباط",
                to : "سلا",
                taxiNumber : "562",
                id : 2,
                time: "12:00",
                numberOfProducts: 1,

            },
        ]
    },

    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
    },

    
    
});

export const { addProduct, removeProduct, getProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;