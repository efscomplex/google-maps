import React, { createRef } from 'react'
import { GMap } from 'services/google/GoogleMaps'
import styled from 'styled-components'

const gMap = new GMap({})

const GoogleMap = () => {
	const options = {
		center: { lat: -34.397, lng: 150.644 },
		zoom: 8
	}
	const target = createRef()
	React.useEffect(() => {
		gMap.createMap(target.current as Element, options)
	}, [])

	return <Map ref={target} />
}
const Map = styled('div')`
	height: 400px;
	width: 100%;
`

export default GoogleMap
