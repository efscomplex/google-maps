import React from 'react'
import Map from './Map'
import Search from 'components/shared/Search'
import { withRedux } from 'store/ReduxStore'
import { StoreProvider } from 'services/providers/StoreProvider'

const App = () => {
	return (
		<StoreProvider>
			<Map />
			<Search />
		</StoreProvider>
	)
}

export default withRedux(App)
