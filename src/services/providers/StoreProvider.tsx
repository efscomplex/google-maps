import { useContext, createContext } from 'react'
import { useDispatch } from 'react-redux'
import getReduxActions from 'helpers/getReduxActions'
import React from 'react'

const actions = getReduxActions()

type Dispatch = (name: keyof typeof actions, payload?: any) => any

export const StoreContext = createContext<Dispatch>(() => {})
export const useStore = () => useContext(StoreContext)

export const StoreProvider: React.FC = ({ children }) => {
	const _dispatch = useDispatch()

	const dispatch: Dispatch = (name, payload) => {
		const createAction = actions[name]
		_dispatch(createAction(payload))
	}

	return (
		<StoreContext.Provider value={dispatch}>
			{children}
		</StoreContext.Provider>
	)
}
