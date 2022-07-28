import { createSlice } from "@reduxjs/toolkit";
import { createFeatureSelector } from "@ngrx/store";

const { reducer, actions, name: featureKey } = createSlice({
  name: "counter",
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count++;
    }
  }
});

export default reducer;
export { actions, featureKey };

export const selectFeature = createFeatureSelector<ReturnType<typeof reducer>>(
  featureKey
);
