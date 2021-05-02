import React from 'react'
import Map from './Map'
import Search from 'components/shared/Search'
import { withRedux } from 'store/ReduxStore'
import { StoreProvider } from 'services/providers/StoreProvider'

const LOCATION = { lat: 41.38581760534082, lng: 2.1733692498093284 } // BARCELONA
const App = () => {
	return (
		<StoreProvider>
			<Map location={LOCATION} />
			<Search />
		</StoreProvider>
	)
}

export default withRedux(App)
