import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import { Provider } from 'react-redux'
import reducer from './reducers'

const store = configureStore({
	reducer
})

export const withStore = (Comp: React.FC) => {
	return () => (
		<Provider store={store}>
			<Comp />
		</Provider>
	)
}
