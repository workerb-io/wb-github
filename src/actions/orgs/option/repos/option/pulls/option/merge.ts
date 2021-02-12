import { ORGS, PULLS, REPOS } from "../../../../../../../utils/constants";

// @description Merge the pull request
if (options.orgs && options.repos) {
	const organisationName: string = options.orgs.name;
	const repoName: string = options.repos.name;
	if (options.pulls) {
		open(options.pulls.html_url)
		click('Merge pull request')
		click('Confirm merge')
		notify('Pull request merged', 'success', 3000);
		reIndex([ORGS, organisationName, REPOS, repoName, PULLS]);
	} else {
		notify('Pull request not found', 'error', 3000)
	}
}
