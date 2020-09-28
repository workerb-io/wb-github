if (options.repos) {
	if (options.branches) {
		open(options.branches.html_url)
		open(options.repos.html_url + '/compare/master...' + options.branches.name + '?expand=1')
		var description = readAll('.commit-message')
		var descriptionText = description.join('\n')
		type(descriptionText, '#pull_request_body', { method: 'by_query_selector' })
		click('Create pull request')
		notify('Pull request created.', 'success', 3000)
		reIndex(['github', 'repos', options.repos.name, 'PRs'])
	} else {
		notify('Branch not found', 'error', 3000)
	}
} else {
	notify('Repository not found', 'error', 3000)
}
