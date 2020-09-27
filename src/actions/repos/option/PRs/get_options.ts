import { decodeApiResponse, getUrl } from '../../../../utils/helper'
import { accessToken } from '../../../../utils/constants'

let pullsList: any[] = []

if (options.repos) {
	var repoResponse = httpGet(
		getUrl(`/repos/${options.repos.owner.login}/${options.repos.name}/pulls?per_page=20&_=${new Date().getTime()}`),
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
				name: '#' + pull.number,
				description: pull.title + '(' + pull.state + ')',
				html_url: pull.html_url,
				user: pull.user,
			}
		}),
	})
}
