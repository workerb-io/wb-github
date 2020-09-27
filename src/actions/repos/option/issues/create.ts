if (options.repos) {
	let repoName: string | null = args[0]
	if (!repoName) {
		repoName = prompt('Name for the new repository')
	}
	open(options.repos.html_url + '/issues/new')
	type(args.join(' '), '#issue_title', { method: 'by_query_selector' })
	click('Submit new issue', { expectReload: true })
	notify('issue created', 'success', 3000)
	reIndex(['github', 'repos', options.repos.name, 'issues'])
} else {
	notify('repo not found', 'error', 3000)
}
