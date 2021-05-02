import React, { createRef } from 'react'
import { useStore } from 'services/providers/StoreProvider'
import { GMap } from 'services/google/GoogleMaps'
import styled from 'styled-components'

const gmap = new GMap({})

const Map: React.FC<{ location: any }> = ({ location }) => {
	const { dispatch, setMap } = useStore()

	const options = {
		center: location,
		zoom: 8
	}
	const target = createRef<HTMLDivElement>()

	React.useEffect(() => {
		const createMap = async (options: any) => {
			await gmap.createMap(target.current as Element, options)
			setMap(gmap)
			gmap.createMark({ position: location })
				.then((mark) => {
					dispatch('addMark', mark)
				})
				.catch(console.log)
		}
		createMap(options)
	}, [])

	return <Wrapper ref={target} />
}
const Wrapper = styled('div')`
	height: 400px;
	width: 100%;
`

export default Map
