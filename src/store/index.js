import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./reducer/CounterSlice";
import ProductsSlice from "./reducer/ProductsSlice";
import ModalSlice from "./reducer/ui/ModalSlice";

const store = configureStore({
    reducer: {
        counter: CounterSlice,
        products: ProductsSlice,
        modal: ModalSlice,
    }
});

export default store;