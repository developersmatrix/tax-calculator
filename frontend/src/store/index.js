import { configureStore } from "@reduxjs/toolkit";

import streetSlice from "./streets";
import blockSlice from "./blocks";

export const streetsActions = streetSlice.actions;
export const blockActions = blockSlice.actions;

const store = configureStore({
  reducer: { blocks: blockSlice.reducer, streets: streetSlice.reducer },
});

export default store;
