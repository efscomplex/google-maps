interface User {
	email: string
	password: string
	registration: Date
	adult: boolean
}
const DOWNLOAD_PRICE = 10
const STREAMING_PRICE = 6
const ADDITIONAL_FEE = 2

class RegisteredUser {
	private services: Service[] = []
	constructor(private details: User) {}

	public getDetails() {
		return this.details
	}
	public getTotal(): number {
		const payment = new Payment(this.services)
		return payment.getPrice()
	}
	public addService(service: Service) {
		this.services.push(service)
	}
}
class Payment {
	constructor(private services: Service[]) {}

	public getPrice() {
		let total = 0
		this.services.forEach((service) => {
			total += service.getPrice()
		})
		return total
	}
}
abstract class Service {
	private timestamp: Date
	constructor() {
		this.timestamp = new Date()
	}

	abstract getPrice(): number
}

class StreamingService extends Service {
	constructor(private consumed: MultimediaContent[]) {
		super()
	}

	getPrice() {
		let total = 0
		this.consumed.forEach((multimedia) => {
			total += multimedia.streamingPrice
			if (multimedia instanceof PremiumContent) {
				total += multimedia.additionalFee
			}
		})
		return total
	}
}
class DownloadService extends Service {
	constructor(private consumed: MultimediaContent[]) {
		super()
	}

	getPrice() {
		let total = 0
		this.consumed.forEach((multimedia) => {
			total += multimedia.donwloadPrice
			if (multimedia instanceof PremiumContent) {
				total += multimedia.additionalFee
			}
		})
		return total
	}
}

interface Multimedia {
	title: string
	duration: number
	adult: boolean
	size: number
}

class MultimediaContent {
	public streamingPrice: number = STREAMING_PRICE
	public donwloadPrice: number = DOWNLOAD_PRICE

	constructor(private details: Multimedia) {}
}
class PremiumContent extends MultimediaContent {
	public additionalFee: number = ADDITIONAL_FEE
}

const mihaela: User = {
	adult: true,
	email: 'miha@dot.com',
	password: 'my tiny pass',
	registration: new Date()
}
const user = new RegisteredUser(mihaela)

const multimedia: Multimedia = {
	title: 'alicia in wonderworld',
	adult: false,
	duration: 12121,
	size: 13
}

const download = new DownloadService([new MultimediaContent(multimedia)])
const downloadPremium = new DownloadService([new PremiumContent(multimedia)])

user.addService(downloadPremium)
user.addService(download)

console.log(user.getTotal())
