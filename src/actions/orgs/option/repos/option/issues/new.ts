import { ISSUES, ORGS, REPOS } from "../../../../../../utils/constants";

// @description Create a new issue
if (options.orgs && options.repos) {
	const organisationName: string = options.orgs.name;
	let title: string | null = args.join(' ')
	if (!title) {
		title = prompt('Enter the title for the issue')
	}
	open(options.repos.html_url + '/issues/new')
	type(title, '#issue_title', { method: 'by_query_selector' })
	click('Submit new issue', { expectReload: true })
	notify('Issue created', 'success', 3000)
	reIndex([ORGS, organisationName, REPOS, options.repos.name, ISSUES]);
} else {
	notify('Repository not found', 'error', 3000)
}
