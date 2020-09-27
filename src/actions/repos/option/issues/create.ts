if (options.repos) {
	let title: string | null = args.join(' ')
	if (!title) {
		title = prompt('Enter the title for the issue')
	}
	open(options.repos.html_url + '/issues/new')
	type(title, '#issue_title', { method: 'by_query_selector' })
	click('Submit new issue', { expectReload: true })
	notify('Issue created', 'success', 3000)
	reIndex(['github', 'repos', options.repos.name, 'issues'])
} else {
	notify('repo not found', 'error', 3000)
}
