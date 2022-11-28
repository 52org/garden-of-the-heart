import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { Owner } from 'entities/owner';
import type { LetterData } from 'entities/request';
import type { RootState } from 'store';

interface BaseState {
  uuid: string | null;
  name: string | null;
  isLoading: boolean;
  createOwnerData: Owner | null;
  createLetterData: LetterData | null;
  errorMessage: string | null;
}

const initialState: BaseState = {
  uuid: null,
  name: null,
  isLoading: false,
  createOwnerData: null,
  createLetterData: null,
  errorMessage: null,
};

const baseSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    setUuId: (state, { payload }: PayloadAction<string>) => {
      state.uuid = payload;
    },
    setName: (state, { payload }: PayloadAction<string>) => {
      state.name = payload;
    },
    setCreateOwnerData: (state, { payload }: PayloadAction<Owner>) => {
      state.createOwnerData = payload;
    },
    setCreateLetterData: (state, { payload }: PayloadAction<LetterData>) => {
      state.createLetterData = payload;
    },
    setErrorMessage: (state, { payload }: PayloadAction<string>) => {
      state.createOwnerData = null;
      state.createLetterData = null;
      state.errorMessage = payload;
      state.isLoading = false;
    },
    changeIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    clearCreateOwnerData: (state) => {
      state.createOwnerData = null;
      state.isLoading = false;
    },
    clearCreateLetterData: (state) => {
      state.createLetterData = null;
      state.isLoading = false;
    },
    clearError: (state) => {
      state.errorMessage = null;
    },
    clearBase: () => {
      return initialState;
    },
  },
});

export const {
  setUuId,
  setName,
  setCreateOwnerData,
  setCreateLetterData,
  setErrorMessage,
  changeIsLoading,
  clearCreateOwnerData,
  clearCreateLetterData,
  clearBase,
} = baseSlice.actions;

export const base = baseSlice.reducer;

export const getBase = (state: RootState): BaseState => state.base;
