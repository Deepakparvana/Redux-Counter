import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0, clr: "orange", clr2: "blue", bg: "gary" },
  reducers: {
    increase: (state, action) => {
      state.value += 1;
    },
    decreament: (state, action) => {
      state.value -= 1;
    },
    rest: (state, action) => {
      state.value = 0;
      (state.clr = "orange"), (state.clr2 = "blue");
    },
    change: (state, action) => {
      state.clr = state.clr === "orange" ? "blue" : "orange";
      state.clr2 = state.clr2 == "blue" ? "orange" : "blue";
    },
    backChange: (state, action) => {
      state.bg = state.bg === "gray" ? "black" : "gray";
    },
  },
});

export const { increase, decreament, rest, change, backChange } =
  counterSlice.actions;
export default counterSlice.reducer;
