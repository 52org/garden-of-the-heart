import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'store';

interface BaseState {
  id: string | null;
  count: number;
}

const initialState: BaseState = {
  id: null,
  count: 0,
};

const baseSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    addId: (state, { payload }: PayloadAction<string>) => {},
    addCount: (state, { payload }: PayloadAction<number>) => {
      state.count += payload;
    },
    deleteCount: (state, { payload }: PayloadAction<number>) => {
      state.count -= payload;
    },
  },
});

export const { addId, addCount, deleteCount } = baseSlice.actions;

export const base = baseSlice.reducer;

export const getBase = (state: RootState): BaseState => state.base;
