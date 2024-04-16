import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./reducer/CounterSlice";
import ProductsSlice from "./reducer/ProductsSlice";
import ModalSlice from "./reducer/ui/ModalSlice";
import userSlice from "./reducer/userSlice"; 


const store = configureStore({
    reducer: {
        counter: CounterSlice,
        products: ProductsSlice,
        modal: ModalSlice,
        user: userSlice,

    }
});

export default store;