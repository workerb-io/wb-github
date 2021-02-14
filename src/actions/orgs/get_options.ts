// @description List users and its organizations
import { getUrl, decodeApiResponse } from '../../utils/helper'
import { accessToken } from '../../utils/constants'

let userResponse = httpGet(getUrl('/user'), {
	Authorization: 'token ' + accessToken,
});

let user = decodeApiResponse(userResponse).response;
/**
 * use the below user login to test organizations
 */
// user.login = 'defunkt';

let organizationResponse = httpGet(getUrl(`/users/${user.login}/orgs?per_page=20&_=${new Date().getTime()}`), {
	Authorization: 'token ' + accessToken,
});
let organizationResponseObject = decodeApiResponse(organizationResponse);
let organizationList = organizationResponseObject.response;

const returnOptions = () => {
	switch (organizationResponseObject.status) {
		case 401:
		case 500:
		case 403:
		case 404:
			notify(organizationResponseObject.response.message, 'error', 3000)
			return
	}

	organizationList.unshift(user);

	return JSON.stringify({
		add: organizationList.map((org: any) => {
			return {
				name: org.login,
				login: org.login,
				id: org.id,
				description: org.description && org.description.length > 0 ? org.description : org.url,
				avatar_url: org.avatar_url,
				repos_url: org.repos_url,
				type: org.type,
				url: org.url
			}
		})
	});
}

export default returnOptions;
