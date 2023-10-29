import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // Credis cards
  {
    name: "Nu Bank",
    number: "1234 5678 XXXX XXXX",
  },
  {
    name: "Banco Santander",
    number: "1234 5678 XXXX XXXX",
  },
  {
    name: "Banco BBVA",
    number: "1234 5678 XXXX XXXX",
  },
];

export const creditCardSlice = createSlice({
  name: "cards",
  initialState: initialState,
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
    },
    getCard: (state, action) => {
      state.filter((card) => card.id === action.payload);
    },
    removeCard: (state, action) => {
      state.filter((card) => card.id !== action.payload);
    },
  },
});

export const { addCard, getCard, removeCard } = creditCardSlice.actions;
export default creditCardSlice.reducer;
