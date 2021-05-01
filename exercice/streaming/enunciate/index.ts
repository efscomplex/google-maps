export type Timestamp = number
export type Size = 1 | 2 | 3 | 4

export interface IMultimediaContent {
	title: string
	streamingPrice: number
	downloadPrice: number
	duration: number
	adult: boolean
	size: Size
}
export interface IPremiumContent extends IMultimediaContent {
	additionalFee: number
}

export interface IRegisterdUser {
	email: string
	password: string
	registration: Timestamp
	adult: boolean
	getTotal(): number
}
export interface IService {
	timestamp: Timestamp
	getMultimediaContent(): IMultimediaContent | IPremiumContent
}

export interface IStreamingService extends IService {}
export interface IDownloadService extends IService {}
