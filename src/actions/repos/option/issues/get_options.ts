import { decodeApiResponse, getUrl } from '../../../../utils/helper'
import { accessToken } from '../../../../utils/constants'
let issuesList: any[] = []

if (options.repos) {
	var issuesResponse = httpGet(
		getUrl(
			`/repos/${options.repos.owner.login}/${options.repos.name}/issues?per_page=20&_=${new Date().getTime()}`
		),
		{
			Authorization: 'token ' + accessToken,
		}
	)
	issuesList = decodeApiResponse(issuesResponse).response
}

export default () => {
	return JSON.stringify({
		add: issuesList.map(function (issue) {
			return {
				name: issue.title,
				description: 'Reported by ' + issue.user,
				html_url: issue.html_url,
				user: issue.user,
			}
		}),
	})
}
