// @description Get initial options
import { accessToken } from '../utils/constants'

const returnOptions = () => {
	if (!accessToken) {
		return JSON.stringify({
			remove: ['search', 'orgs'],
		})
	} else {
		return JSON.stringify({
			remove: ['setup'],
		})
	}
}

export default returnOptions
