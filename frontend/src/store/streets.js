import { createSlice } from "@reduxjs/toolkit";

export const streetNames = {
  1: ["1:siddapur road", "3:Meenupete road", "4:Harikeri road"],
  2: ["1:siddapur road", "6:Mahila samaja road"],
};

const initialState = { street: [] };

const streetSlice = createSlice({
  name: "street",
  initialState,
  reducers: {
    setStreet(state, action) {
      state.street = action.block;
    },
  },
});

export default streetSlice;
