import { ISSUES, ORGS, REPOS } from "../../../../../../../utils/constants";

// @description Close the issue
if (options.orgs && options.repos) {
	const organisationName: string = options.orgs.name;
	const repoName: string = options.repos.name;
	if (options.issues) {
		open(options.issues.html_url)
		click('Close issue')
		notify(`Issue closed`, 'success', 3000)
		reIndex([ORGS, organisationName, REPOS, repoName, ISSUES]);
	} else {
		notify('Issue not found', 'error', 3000)
	}
}
