import { decodeApiResponse, getUrl } from '../../../../../../utils/helper'
import { accessToken } from '../../../../../../utils/constants'

let pullsList: any[] = []

if (options.repos) {
	var repoResponse = httpGet(`${options.repos.pulls_url}?per_page=20&_=${new Date().getTime()}`,
		{
			Authorization: 'token ' + accessToken,
		}
	)

	pullsList = decodeApiResponse(repoResponse).response
}

export default () => {
	return JSON.stringify({
		add: pullsList.map(function (pull: any) {
			return {
				name: pull.title,
				description: pull.description,
				html_url: pull.html_url,
				user: pull.user,
			}
		}),
	})
}
