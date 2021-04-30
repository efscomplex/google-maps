import React from 'react'
import Map from './Map'
import Search from 'components/shared/Search'
import { withStore } from 'store/Store'

const App = () => {
	return (
		<div>
			<Map />
			<Search />
		</div>
	)
}

export default withStore(App)
