import { getUrl, decodeApiResponse } from '../../../../utils/helper'
import { accessToken } from '../../../../utils/constants'

let organizationRepoList: any[] = []

if (options.organizations) {
	let organizationRepoResponse = httpGet(`${options.organizations.repos_url}?_=${new Date().getTime()}`, {
		Authorization: 'token ' + accessToken,
	});
	let organizationRepoResponseObject = decodeApiResponse(organizationRepoResponse);
	organizationRepoList = organizationRepoResponseObject.response;
}

export default () => {
	return JSON.stringify({
		add: organizationRepoList.map(repo => {
			return {
				name: repo.full_name,
				id: repo.id,
				html_url: repo.html_url,
				description: repo.description
			}
		}),
	});
}

