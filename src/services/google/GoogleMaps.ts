import { Loader, LoaderOptions } from 'google-maps'
import { GOOGLE_API_KEY } from 'config'
import { Marker } from './Marker'

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
		this.geocoder = new this.google.maps.Geocoder()
	}

	createMark = (opts: any) => {
		const marker = new this.google.maps.Marker({
			position: opts.position,
			map: this.map,
			optimized: false
		})
		const serializedMarker = new Marker(marker)
		return Promise.resolve(serializedMarker.getData())

		// not allowd use the geocoder
		/* return new Promise((resolve, reject) => {
			this.geocoder.geocode(opts, (results: any, status: string) => {
				if (status == 'OK') {
					this.map.setCenter(results[0].geometry.location)
					const marker = new this.google.maps.Marker({
						position: results[0].geometry.location,
						map: this.map,
						optimized: false
					})
					const serializedMarker = new Marker(marker)
					resolve(serializedMarker.getData())
				} else {
					reject('request denied!!')
				}
			}) 
		})*/
	}
}
