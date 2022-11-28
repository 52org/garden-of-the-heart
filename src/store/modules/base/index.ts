import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'store';

interface Owner {
  uuid: string;
  name: string;
}

interface BaseState {
  uuid: string | null;
  name: string | null;
  createOwnerData: Owner | null;
}

const initialState: BaseState = {
  uuid: null,
  name: null,
  createOwnerData: null,
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
    initCreateOwnerData: (state, { payload }: PayloadAction<Owner>) => {
      state.createOwnerData = payload;
    },
    clearCreateOwnerData: (state) => {
      state.createOwnerData = null;
    },
    clearBase: () => {
      return initialState;
    },
  },
});

export const { initUuId, initName, clearBase } = baseSlice.actions;

export const base = baseSlice.reducer;

export const getBase = (state: RootState): BaseState => state.base;
