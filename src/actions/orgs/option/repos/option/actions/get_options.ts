// @description list options for a branch
import { decodeApiResponse, getUrl } from '../../../../../../utils/helper'
import { accessToken } from '../../../../../../utils/constants'

let workflowList: any[] = []

if (options.repos) {
	let workflowResponse = httpGet(`${options.repos.url}/actions/workflows`, {
		Authorization: 'token ' + accessToken,
	})

	workflowList = decodeApiResponse(workflowResponse).response
}

export default () => {
	return JSON.stringify({
		add: workflowList.map(function (workflow: any) {
			return {
				...workflow,
			}
		}),
	})
}
