import { decodeApiResponse, getUrl } from '../../../../utils/helper'
import { accessToken } from '../../../../utils/constants'

let branchesList: any[] = []

if (options.repos) {
	var branchResponse = httpGet(
		getUrl(
			`/repos/${options.repos.owner.login}/${options.repos.name}/branches?per_page=20&_=${new Date().getTime()}`
		),
		{
			Authorization: 'token ' + accessToken,
		}
	)

	branchesList = decodeApiResponse(branchResponse).response
}

export default () => {
	return JSON.stringify({
		add: branchesList.map(function (branch: any) {
			return {
				name: branch.name,
				description: branch.commit.sha,
				html_url: `${options.repos.html_url}/commit/` + branch.commit.sha,
			}
		}),
	})
}
