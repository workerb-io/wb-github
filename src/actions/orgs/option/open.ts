import { getUrl, decodeApiResponse } from '../../../utils/helper'
import { accessToken } from '../../../utils/constants'

if (options.orgs) {
	let organizationDetailResponse = httpGet(`${options.orgs.url}?_=${new Date().getTime()}`, {
		Authorization: 'token ' + accessToken,
	});

	let organizationDetailsObject = decodeApiResponse(organizationDetailResponse);
	let organizationDetails = organizationDetailsObject.response;
	open(organizationDetails.html_url)
}
