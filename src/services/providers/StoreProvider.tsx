import { useContext, createContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import getReduxActions from 'helpers/getReduxActions'
import React from 'react'

const actions = getReduxActions()

type Dispatch = (name: keyof typeof actions, payload?: any) => any

type Context = {
	dispatch:Dispatch, map?: any, setMap?: any
}

export const StoreContext = createContext<Context>({ dispatch: () => { } })

export const useStore = () => useContext(StoreContext)

export const StoreProvider: React.FC = ({ children }) => {
	const [map, setMap] = useState()
	const _dispatch = useDispatch()

	const dispatch: Dispatch = (name, payload) => {
		const createAction = actions[name]
		_dispatch(createAction(payload))
	}

	return (
		<StoreContext.Provider value={{ dispatch, map, setMap }}>
			{children}
		</StoreContext.Provider>
	)
}
