import { Loader, LoaderOptions } from 'google-maps'
import { GOOGLE_API_KEY } from 'config'

export class GMap {
	loader: Loader
	map: any
	constructor(options: LoaderOptions) {
		this.loader = new Loader(GOOGLE_API_KEY, options)
	}
	createMap = async (target: Element, options: any) => {
		const google = await this.loader.load()
		this.map = new google.maps.Map(target, options)
	}
}
