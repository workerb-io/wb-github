import { getUrl, decodeApiResponse } from '../../utils/helper'
import { accessToken } from '../../utils/constants'

var repoResponse = httpGet(getUrl(`/user/repos?_=${new Date().getTime()}`), {
	Authorization: 'token ' + accessToken,
})

var repoApiResponse = decodeApiResponse(repoResponse)
var repoList = repoApiResponse.response

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
				description: repo.html_url,
				html_url: repo.html_url,
				owner: repo.owner,
			}
		}),
	})
}

export default returnOptions
