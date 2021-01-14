import { getUrl, decodeApiResponse } from '../../../utils/helper'
import { accessToken } from '../../../utils/constants'

if (options.organizations) {
	let organizationDetailResponse = httpGet(`${options.organizations.url}?_=${new Date().getTime()}`, {
		Authorization: 'token ' + accessToken,
	});

	let organizationDetailsObject = decodeApiResponse(organizationDetailResponse);
	let organizationDetails = organizationDetailsObject.response;
	open(organizationDetails.html_url)
}
