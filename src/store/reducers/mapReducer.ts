import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

type MapState = {
	marks: any
	map: typeof google.maps
}
const initialState: MapState = {
	marks: []
} as MapState

export const mapSlice = createSlice({
	name: 'map',
	initialState,
	reducers: {
		addMark: (state, action) => {
			const marker = action.payload
			state.marks.push(marker)
		},
		setMap: (state, action) => {
			state.map = action.payload
		}
	}
})

export const { actions, reducer } = mapSlice

//export const useMarks = () => useSelector<MapState>((state) => state.marks)

export default reducer
