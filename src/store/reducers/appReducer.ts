import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { RootState } from '../ReduxStore'
import data from 'mock'

type AppState = {
	isLoading: boolean
	suggestions: string[]
}
const initialState: AppState = {
	isLoading: false,
	suggestions: data.suggestions
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
	useSelector<RootState>((state) => state.app.isLoading)
export const useSuggestions = () =>
	useSelector<RootState>((state) => state.app.suggestions) as string[]

export default reducer
