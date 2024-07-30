import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

//This is used to perform action
export const useAppDispatch = () => useDispatch<AppDispatch>()

// Used to get the data from the store in the component
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
