import {
	IRegisterdUser,
	IStreamingService,
	IDownloadService,
	Timestamp
} from './index'

type Service = IStreamingService | IDownloadService

export class RegisteredUser implements IRegisterdUser {
	services: Service[]
	email: string
	password: string
	registration: Timestamp
	adult: boolean

	constructor(services = []) {
		this.services = services
	}
	getTotal() {
		let total = 0

		this.services.forEach((service) => {
			let multimediaContent = service.getMultimediaContent()

			// actual way to make the type checking
			if ('streamingPrice' in service) {
				total += multimediaContent.streamingPrice
			} else if ('downloadPrice' in service) {
				total += multimediaContent.downloadPrice
			}
			if ('additionalFee' in multimediaContent) {
				total += multimediaContent.additionalFee
			}
		})
		return total
	}
}
