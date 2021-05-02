import { Timestamp } from '.'
import {
	IMultimediaContent,
	MultimediaContent,
	PremiumContent,
	IPremiumContent
} from './Multimedia'
import { IRegisteredUser } from './Users'

type IMultimedia = IMultimediaContent | IPremiumContent

export interface IService {
	timestamp: Timestamp
	_multimediaContent: PremiumContent | MultimediaContent
	getPrice(): number
}

export class StreamingService implements IService {
	timestamp: Timestamp
	_multimediaContent: PremiumContent | MultimediaContent

	constructor(private user: IRegisteredUser) {
		this.timestamp = new Date()
	}

	set multimediaContent(content: IMultimedia) {
		this._multimediaContent = this.user.premium
			? new MultimediaContent(content)
			: new PremiumContent(content as IPremiumContent)
	}
	get multimediaContent() {
		return this.multimediaContent
	}

	// place here all methods and logic related to a streaming service

	getPrice() {
		return this._multimediaContent.streamingPrice
	}
}
export class DownloadService implements IService {
	timestamp: Timestamp
	_multimediaContent: PremiumContent | MultimediaContent

	constructor(private user: IRegisteredUser) {
		this.timestamp = new Date()
	}

	set multimediaContent(content: IMultimedia) {
		this._multimediaContent = this.user.premium
			? new MultimediaContent(content)
			: new PremiumContent(content as IPremiumContent)
	}
	get multimediaContent() {
		return this.multimediaContent
	}

	// place here all methods and logic related to a download service

	getPrice() {
		return this._multimediaContent.downloadPrice
	}
}

export type Service = StreamingService | DownloadService
