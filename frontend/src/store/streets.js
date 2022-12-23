import { createSlice } from "@reduxjs/toolkit";

export const streetNames = {
  1: ["1:siddapur road", "3:Meenupete road", "4:Harikeri road"],
  2: ["1:hospital road", "6:Mahila samaja road"],
  3: ["1:murnad road", "6:church road"],
  4: ["1:police station road", "6:Gandhinagar road"],
  5: ["1:murnad road", "6:Mahila samaja road"],
  6: ["1:Gonikoppal road", "6:Mutton market road"],
  7: ["1:Gonikoppal road", "6:Cross road"],
  8: ["1:Meenupete road", "6:Microwave road"],
  9: ["1:Meenupete road", "6:Mutton market road"],
  10: ["1:Gonikoppal road"],
  11: ["1:Mutton market road", "6:Gonikoppal road"],
  12: ["1:Gonikoppal road"],
  13: ["1:siddapur road", "6:Arasunagara road"],
  14: ["1:Gandhinagar road", "6:Mahila samaja road"],
  15: ["6:Mahila samaja road"],
  16: ["1:Chickpet road", "6:Kedamullur road", "6:Chembebellur road"],
  17: ["1:police station road", "6:Meenupete road"],
  18: ["1:Chembebellur road", "6:Church road"],
  19: ["1:siddapur road", "6:Nehrunagara main road"],
  20: ["1:Chembebellur road", "6:Arasunagara road"],
  21: ["1:Meenupete road", "501:main road"],
  22: ["1:Gonikoppal road", "501:main road"],
  23: ["1:Chembebellur road", "6:block 24 road"],
  24: ["1:Chembebellur road", "6:block 24 road"],
  25: ["1:siddapur road", "6:Dental college road"],
  26: ["1:Gonikoppal road", "6:Kallubane road"],
  27: ["1:Chembebellur road", "501:mainroad"],
};

const initialState = {
  streetList: [],
  street: " ",
};

const streetSlice = createSlice({
  name: "street",
  initialState,
  reducers: {
    setStreetList(state, action) {
      state.streetList = streetNames[action.payload];
    },
    setStreet(state, action) {
      state.street = action.payload;
    },
  },
});

export default streetSlice;
