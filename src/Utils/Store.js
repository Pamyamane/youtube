    import { configureStore } from "@reduxjs/toolkit";
    import appSlice from "./appSlice";
    import PopularVideoSlice from "./PopularVideoSlice";

    const Store = configureStore({
    reducer: {
        app: appSlice,
        PopularVideo: PopularVideoSlice, // ✅ Correct naming
    },
    });

    export default Store;
