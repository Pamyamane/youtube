import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice(
    {
        name:"app",
        initialState:{
            IsopenMenu: true
        },
        reducers:{
            toggleMenu:(state) => {
                state.IsopenMenu =!state.IsopenMenu
            },
            closeMenu:(state) => {
                state.IsopenMenu = false
            }
        }

    }
    
)

export const { toggleMenu , closeMenu} = appSlice.actions

export default appSlice.reducer