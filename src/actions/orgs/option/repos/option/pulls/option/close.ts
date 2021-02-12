import { ORGS, PULLS, REPOS } from "../../../../../../../utils/constants";

// @description Close the pull request
if (options.orgs && options.repos) {
	const organisationName: string = options.orgs.name;
	const repoName: string = options.repos.name;
	if (options.pulls) {
		open(options.pulls.html_url)
		click('Close pull request')
		notify('Pull request closed', 'success', 3000);
		reIndex([ORGS, organisationName, REPOS, repoName, PULLS]);
	} else {
		notify('Pull request not found', 'error', 3000)
	}
}
