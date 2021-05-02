import { Payment } from './Payment'
import { Timestamp } from './index'
import { DownloadService, Service, StreamingService } from './Services'

interface IUser {
	email: string
	adult: boolean
}

export interface IRegisteredUser extends IUser {
	password: string
	registration: Timestamp
	premium: boolean
}

export class RegisteredUser {
	services: Service[]
	payment: Payment

	constructor(public user: IRegisteredUser) {
		// set here all user services
		this.services = [new StreamingService(user), new DownloadService(user)]
		// set here a new user payment service
		this.payment = new Payment(user, this.services)
	}

	public totalPrice() {
		return this.payment.amount()
	}
}
