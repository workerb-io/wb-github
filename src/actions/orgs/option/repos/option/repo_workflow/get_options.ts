// @description list actions for a repo
import { decodeApiResponse, getUrl } from '../../../../../../utils/helper'
import { accessToken } from '../../../../../../utils/constants'

let workflowList: any[] = []

if (options.repos) {
	let workflowResponse = httpGet(`${options.repos.url}/actions/workflows`, {
		Authorization: 'token ' + accessToken,
	})

	workflowList = decodeApiResponse(workflowResponse).response.workflows
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
