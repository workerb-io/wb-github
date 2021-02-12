import { ORGS, PULLS, REPOS } from "../../../../../../utils/constants";

// @description Create a pull request
if (options.orgs && options.repos) {
	const organisationName: string = options.orgs.name;
	const repoName: string = options.repos.name;
	open(options.repos.html_url + '/compare/' + args[1] + '...' + args[0] + '?expand=1')
	var description = readAll('.commit-message')
	var descriptionText = description.join('\n')
	type(descriptionText, '#pull_request_body', { method: 'by_query_selector' })
	click('Create pull request', {})
	notify(`Pull request created`, 'success', 3000)
	reIndex([ORGS, organisationName, REPOS, repoName, PULLS]);
} else {
	notify('Repository not found', 'error', 3000)
}
