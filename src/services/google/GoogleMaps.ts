import { Loader, LoaderOptions } from 'google-maps'
import { GOOGLE_API_KEY } from 'config'
import { Marker } from './Marker'

type Position = {
	lat: number
	lng: number
}
type MarkOpts = {
	position: Position
}
export class GMap {
	loader: Loader
	private map: any
	private google: any
	private geocoder: any
	private infoWindow: any

	constructor(options: LoaderOptions) {
		this.loader = new Loader(GOOGLE_API_KEY, options)
	}

	createMap = async (target: Element, options: any) => {
		this.google = await this.loader.load()
		this.map = new this.google.maps.Map(target, options)
		this.infoWindow = new this.google.maps.InfoWindow()
	}

	createMark = (opts: MarkOpts) => {
		const marker = new google.maps.Marker({
			...opts,
			map: this.map,
			optimized: false
		})
		/* 	marker.addListener('click', () => {
			this.infoWindow.close()
			this.infoWindow.setContent(marker.getTitle())
			this.infoWindow.open(marker.getMap(), marker)
		}) */
		const serializedMarker = new Marker(marker)
		return serializedMarker.getData()
	}
	createGeocoder = () => {
		this.geocoder = new this.google.maps.Geocoder()
	}
}
