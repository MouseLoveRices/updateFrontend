import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./testSlice";
import userSlices from "./userSlices";


const store = configureStore({
    reducer: {
        list: testSlice,
        listUser: userSlices 
    }
});
export default store