import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'store';

interface BaseState {
  uuid: string | null;
  name: string | null;
}

const initialState: BaseState = {
  uuid: null,
  name: null
};

const baseSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    initUuId: (state, { payload }: PayloadAction<string>) => {
      state.uuid = payload;
    },
    initName: (state, { payload }: PayloadAction<string>) => {
      state.name = payload;
    },
    clearBase: (state) => {
      return initialState;
    }
  },
});

export const {
  initUuId,
  initName,
  clearBase
} = baseSlice.actions;

export const base = baseSlice.reducer;

export const getBase = (state: RootState): BaseState => state.base;
