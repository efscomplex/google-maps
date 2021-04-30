export class Marker {
	clickable: boolean
	position: any
	visible: boolean
	constructor(marker: google.maps.Marker) {
		this.clickable = marker.getClickable()
		const position = marker.getPosition() as google.maps.LatLng
		this.position = {
			lat: position.lat(),
			lng: position.lng()
		}
		this.visible = marker.getVisible()
	}
	getData() {
		return {
			position: this.position,
			clickable: this.clickable,
			visible: this.visible
		}
	}
}
