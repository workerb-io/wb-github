import { ISSUES, ORGS, REPOS } from "../../../../../../../utils/constants";

// @description Comment on the issue
if (options.orgs && options.repos) {
	const organisationName: string = options.orgs.name;
	const repoName: string = options.repos.name;
	if (options.issues) {
		let comment: string | null = args.join(' ')
		if (!comment) {
			comment = prompt('Enter the comment')
		}

		if (comment) {
			open(options.issues.html_url)
			type(comment, '#new_comment_field', { method: 'by_query_selector' })
			click('Comment')
			notify(`Comment added to the issue`, 'success', 3000);
			reIndex([ORGS, organisationName, REPOS, repoName, ISSUES]);
		}
	} else {
		notify('Issue not found', 'error', 3000)
	}
}
