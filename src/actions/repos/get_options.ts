import { getUrl, decodeApiResponse } from '../../utils/helper'
import { accessToken } from '../../utils/constants'

var repoResponse: any;
var repoList: any = [];
var repoApiResponse: any;
var num = 1;

do {
	repoResponse = httpGet(getUrl(`/user/repos?per_page=100&page=${num}&_=${new Date().getTime()}`), {
		Authorization: 'token ' + accessToken,
	})

	repoApiResponse = decodeApiResponse(repoResponse)

	if (!Object.keys(repoApiResponse.response).length)
		repoList.push(...repoApiResponse.response);


	num++;

} while (Object.keys(repoApiResponse.response).length)

const returnOptions = () => {
	switch (repoApiResponse.status) {
		case 401:
		case 500:
		case 403:
		case 404:
			notify(repoApiResponse.response.message, 'error', 3000)
			return
	}

	return JSON.stringify({
		add: repoList.map((repo: any) => {
			return {
				name: repo.name,
				description: repo.description,
				html_url: repo.html_url,
				owner: repo.owner,
			}
		}),
	})
}

export default returnOptions
