export default (marker: any) => {
	return {
		position: marker.getPosition(),
		clickable: marker.getClickable()
	}
}
