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
	name: 'mark',
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
const { actions, reducer } = mapSlice
export const { addMark, setMap } = actions
export const useMark = () => useSelector<MapState>((state) => state.marks)

/** export all reducers */
export default {
	map: reducer
}
