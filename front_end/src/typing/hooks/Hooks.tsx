// imports :

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// type imports from redux store :

import type { RootState, AppDispatch } from '../../redux/store/Store';

// define types for hooks here :

// redux usage hooks :

// use throughout your app instead of plain `useDispatch` and `useSelector` :

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;