import React from 'react'

export default function Marker({ map }: any) {
	const uluru = { lat: -25.344, lng: 131.036 }
	const marker = new google.maps.Marker({
		position: uluru,
		map: map
	})
	return <div></div>
}
