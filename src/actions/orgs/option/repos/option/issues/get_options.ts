// @description List issues
import { decodeApiResponse, getUrl } from '../../../../../../utils/helper'
import { accessToken } from '../../../../../../utils/constants'
let issuesList: any[] = []

if (options.repos) {
	var issuesResponse = httpGet(`${options.repos.issues_url}?per_page=20&_=${new Date().getTime()}`,
		{
			Authorization: 'token ' + accessToken,
		}
	)
	issuesList = decodeApiResponse(issuesResponse).response.filter((issue: any) => !issue.pull_request)
}

export default () => {
	return JSON.stringify({
		add: issuesList.map(function (issue) {
			return {
				name: issue.title,
				description: 'Reported by ' + issue.user.login,
				html_url: issue.html_url,
			}
		}),
	})
}
