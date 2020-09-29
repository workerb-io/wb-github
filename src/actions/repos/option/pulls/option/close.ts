if (options.pulls) {
	open(options.pulls.html_url)
	click('Close pull request')
	notify('Pull request closed', 'success', 3000)
	reIndex(['github', 'repos', options.repos.name, 'pulls'])
} else {
	notify('Pull request not found', 'error', 3000)
}
