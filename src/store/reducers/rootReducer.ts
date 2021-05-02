import { combineReducers } from 'redux'
import mapReducer from './mapReducer'
import appReducer from './appReducer'

export default combineReducers({ maps: mapReducer, app: appReducer })
