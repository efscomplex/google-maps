import { Service } from './Services'
import { IRegisteredUser } from './Users'

export class Payment {
	constructor(private user: IRegisteredUser, private services: Service[]) {}

	// add all financial service related logic
	// ...

	public amount() {
		let total = 0
		this.services.forEach((service) => {
			total += service.getPrice()
		})
		return total
	}
}
