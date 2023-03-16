import { createSlice } from "@reduxjs/toolkit"

interface modalState {
    isVisible: boolean,
}

const initialState: modalState = {
    isVisible: false,  
}

const modalSlice = createSlice({
    name: '@@modal',
    initialState,
    reducers: {
        openModal:(state) => {
            state.isVisible = true
        },
        closeModal:(state) => {
            state.isVisible = false
        }
    }
})

export const {openModal, closeModal} = modalSlice.actions
export const modalReducer = modalSlice.reducer