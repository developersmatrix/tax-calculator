import { createSlice } from "@reduxjs/toolkit";

export const blockNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28,
];

const initialState = { block: "" };

const blockSlice = createSlice({
  name: "block",
  initialState,
  reducers: {
    setBlock(state, action) {
      state.block = action.payload;
    },
  },
});

export default blockSlice;
