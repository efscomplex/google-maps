import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

type AppState = {
	isLoading: boolean
}
const initialState: AppState = {
	isLoading: false
}

export const mapSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setIsLoading: (state, action) => {
			state.isLoading = action.payload
		}
	}
})

export const { actions, reducer } = mapSlice
export const useIsLoading = () =>
	useSelector<AppState>((state) => state.isLoading)

export default reducer
