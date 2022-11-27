import type { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import type { RootState } from 'store/index';

// instead of plain `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
