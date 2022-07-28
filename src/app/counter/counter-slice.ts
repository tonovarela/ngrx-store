  import { createSlice } from "@reduxjs/toolkit";
  import { createFeatureSelector } from "@ngrx/store";

  const counterSlice = createSlice({
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

  const {
    reducer,
    actions: { increment },
    name
  } = counterSlice;

  export default counterSlice.reducer;
  export { increment, name };

  export const selectFeature = createFeatureSelector<ReturnType<typeof reducer>>(
    name
  );
