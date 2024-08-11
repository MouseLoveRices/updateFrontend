import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./testSlice";
import userSlices from "./userSlices";
import historySlice from "./historySlice";
import watchLaterSlices from "./watchLaterSlices";
import videoSlice from "./videoSlice";


const store = configureStore({
    reducer: {
        list: testSlice,
        listUser: userSlices,
        history: historySlice,
        watchLater: watchLaterSlices,
        video: videoSlice
    }
});
export default store