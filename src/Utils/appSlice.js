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
            }
        }

    }
    
)

export const { toggleMenu } = appSlice.actions

export default appSlice.reducer