import { createSlice } from "@reduxjs/toolkit";

 const PopularVideoSlice = createSlice(
    {
        name:"PopularVideo",
        initialState:{
            ISPopularVideos: null,
        },
        reducers:{
            AddPopularVideos: (state, action) => {
                state.ISPopularVideos = action.payload;
            }
        }
    }
 )
 
 export const { AddPopularVideos } = PopularVideoSlice.actions;
 export default PopularVideoSlice.reducer;