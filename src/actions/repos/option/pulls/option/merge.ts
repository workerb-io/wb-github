if (options.pulls) {
	open(options.pulls.html_url)
	click('Merge pull request')
	click('Confirm merge')
	notify('Pull request merged', 'success', 3000)
	reIndex(['github', 'repos', options.repos.name])
	reIndex(['github', 'repos', options.repos.name, 'pulls'])
} else {
	notify('Pull request not found', 'error', 3000)
}
