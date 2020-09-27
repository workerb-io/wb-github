import { apiUrl } from './constants'

export const getUrl = (endPoint: string) => {
	return apiUrl + endPoint
}

export const decodeApiResponse = (result: APIResponse) => {
	if (!result.response) {
		return {
			response: {},
			status: result.status,
		}
	}

	return {
		response: JSON.parse(result.response),
		status: result.status,
	}
}
