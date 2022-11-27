import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BaseState {
  id: string | null;
  count: number;
}

const initialState: BaseState = {
  id: null,
  count: 0
}

export const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    addId: (state, { payload }: PayloadAction<string>) => {

    },
    addCount: (state, { payload } : PayloadAction<number>) => {
      state.count += payload;
    },
    deleteCount: (state, { payload }: PayloadAction<number>) => {
      state.count -= payload;
    }
  }
});

export const base = baseSlice.reducer;

export const {
  addId,
  addCount,
  deleteCount
} = baseSlice.actions;