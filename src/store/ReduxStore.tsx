import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'

const store = configureStore({
	reducer: rootReducer
})

export const withRedux = (Comp: React.FC) => {
	return () => (
		<Provider store={store}>
			<Comp />
		</Provider>
	)
}
