// @description list options for a branch
import { decodeApiResponse, getUrl } from '../../../../../../utils/helper'
import { accessToken } from '../../../../../../utils/constants'

let branchesList: any[] = []

if (options.repos) {
	let branchResponse = httpGet(`${options.repos.branches_url}?per_page=20&_=${new Date().getTime()}`, {
		Authorization: 'token ' + accessToken,
	})

	branchesList = decodeApiResponse(branchResponse).response
}

export default () => {
	return JSON.stringify({
		add: branchesList.map(function (branch: any) {
			return {
				name: branch.name,
				description: branch.commit.url,
				html_url: `${options.repos.html_url}/commit/` + branch.commit.sha,
			}
		}),
	})
}
