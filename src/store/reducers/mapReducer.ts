import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { RootState } from '../ReduxStore'

type MapState = {
	marks: any
	map: typeof google.maps
}
const initialState: MapState = {
	marks: []
} as MapState

export const mapSlice = createSlice({
	name: 'maps',
	initialState,
	reducers: {
		addMark: (state, action) => {
			const marker = action.payload
			state.marks.push(marker)
		}
	}
})

export const { actions, reducer } = mapSlice

export const useMarks = () =>
	useSelector<RootState>((state) => state.maps.marks)

export default reducer
