import React, { createRef } from 'react'
import { useStore } from 'services/providers/StoreProvider'
import { GMap } from 'services/google/GoogleMaps'
import styled from 'styled-components'

const gmap = new GMap({})

const Map = () => {
	const dispatch = useStore()
	const bcn = { lat: 41.38581760534082, lng: 2.1733692498093284 }
	const options = {
		center: bcn,
		zoom: 8
	}
	const target = createRef<HTMLDivElement>()
	React.useEffect(() => {
		gmap.createMap(target.current as Element, options).then(() => {
			const mark = gmap.createMark({
				position: bcn
			})
			dispatch('addMark', mark)
		})
	}, [])

	return <Wrapper ref={target} />
}
const Wrapper = styled('div')`
	height: 400px;
	width: 100%;
`

export default Map
