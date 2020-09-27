import { getUrl, decodeApiResponse } from '../../../utils/helper'
import { accessToken } from '../../../utils/constants'

if (options.repos) {
	var userResponse = httpGet(getUrl('/user'), {
		Authorization: 'token ' + accessToken,
	})

	var user = decodeApiResponse(userResponse).response

	var deleteRawResponse = httpDelete(getUrl('/repos/' + user.login + '/' + options.repos.name), null, {
		Authorization: 'token ' + accessToken,
	})

	var deleteResponse = decodeApiResponse(deleteRawResponse)

	switch (deleteResponse.status) {
		case 204:
			notify('repository deleted', 'success', 3000)
			reIndex(['github', 'repos'])
			break
		case 403:
		case 404:
			notify(deleteResponse.response.message, 'error', 3000)
			break
	}
} else {
	notify('Repo not found', 'error', 3000)
}
