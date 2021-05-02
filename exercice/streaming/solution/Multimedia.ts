import { Size } from '.'

// abstractions
export interface IMultimediaContent {
	title: string
	duration: number
	adult: boolean
	size: Size
	streamingPrice: number
	downloadPrice: number
}

export interface IPremiumContent extends IMultimediaContent {
	additionalFee: number
}

// classes
export class MultimediaContent {
	constructor(private content: IMultimediaContent) {}

	get streamingPrice() {
		return this.content.streamingPrice
	}
	get downloadPrice() {
		return this.content.downloadPrice
	}
}

export class PremiumContent {
	constructor(private content: IPremiumContent) {}

	get streamingPrice() {
		return this.content.streamingPrice + this.content.additionalFee
	}
	get downloadPrice() {
		return this.content.downloadPrice + this.content.additionalFee
	}
}
