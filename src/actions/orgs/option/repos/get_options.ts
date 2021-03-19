// @description list organization/user repos
import { decodeApiResponse } from '../../../../utils/helper'
import { accessToken } from '../../../../utils/constants'

let organizationRepoList: any[] = []

if (options.orgs) {
	let organizationRepoResponse = httpGet(`${options.orgs.repos_url}?_=${new Date().getTime()}`, {
		Authorization: 'token ' + accessToken,
	})
	let organizationRepoResponseObject = decodeApiResponse(organizationRepoResponse)
	organizationRepoList = organizationRepoResponseObject.response
}

export default () => {
	return JSON.stringify({
		add: organizationRepoList.map((repo) => {
			repo.branches_url = repo.branches_url.split('{')[0]
			repo.issues_url = repo.issues_url.split('{')[0]
			repo.pulls_url = repo.pulls_url.split('{')[0]
			return {
				name: repo.name,
				repo_name: repo.name,
				id: repo.id,
				html_url: repo.html_url,
				issues_url: repo.issues_url,
				pulls_url: repo.pulls_url,
				branches_url: repo.branches_url,
				description: repo.description ? repo.description : repo.html_url,
				owner: repo.owner,
				url: repo.url,
			}
		}),
		remove: options.orgs ? (options.orgs.type === 'User' ? [] : ['new']) : [],
	})
}
