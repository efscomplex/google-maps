import { actions as mapActions } from 'store/reducers/mapReducer'
import { actions as appActions } from 'store/reducers/appReducer'

export default () => {
	return {
		...mapActions,
		...appActions
	}
}
