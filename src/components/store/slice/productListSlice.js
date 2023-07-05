import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../../assets/data/data";

const initialState = {
  displayData: [...storeData],
  displayItem: [],
  shoppingBagData: [],
};
const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    setDisplayData(state, action) {
      state.displayData = storeData.filter((el) => {
        if (action.payload === "All") {
          return storeData;
        }
        return el.type === action.payload;
      });
    },
    setDisplayItem(state, action) {
      state.displayItem = storeData.filter((el) => el.id === action.payload);
    },
    setShoppingBag(state, action) {
      state.shoppingBagData.push(action.payload);
    },
    removeFromShoppingBag(state, action) {
      state.shoppingBagData = state.shoppingBagData.filter(
        (el) => el.id !== action.payload
      );
    },
  },
});

export const {
  setDisplayData,
  setDisplayItem,
  setShoppingBag,
  removeFromShoppingBag,
} = productListSlice.actions;
export default productListSlice.reducer;
