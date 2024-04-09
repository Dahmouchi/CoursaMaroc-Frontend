import { createSlice } from "@reduxjs/toolkit";


const ModalSlice = createSlice({
    name: "ModalSlice",
    initialState: {
        isOpen: false,
        componentName: "",

    },
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
            state.componentName = action.payload.componentName;
        },
        closeModal: (state, action) => {
            state.isOpen = false;
        }
    }
});

export const { openModal, closeModal } = ModalSlice.actions;
export default ModalSlice.reducer;