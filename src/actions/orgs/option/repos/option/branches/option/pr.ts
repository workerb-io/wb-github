import { ORGS, PULLS, REPOS } from "../../../../../../../utils/constants";

// @description Create a pull request
if (options.orgs && options.repos) {
	const organisationName: string = options.orgs.name;
	if (options.branches) {
		open(options.branches.html_url)
		open(options.repos.html_url + '/compare/master...' + options.branches.name + '?expand=1')
		var description = readAll('.commit-message')
		var descriptionText = description.join('\n')
		type(descriptionText, '#pull_request_body', { method: 'by_query_selector' })
		//@ts-ignore
		submit()
		notify('Pull request created', 'success', 3000)
		reIndex([ORGS, organisationName, REPOS, options.repos.name, PULLS]);
	} else {
		notify('Branch not found', 'error', 3000)
	}
} else {
	notify('Repository not found', 'error', 3000)
}
