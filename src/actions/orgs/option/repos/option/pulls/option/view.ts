// @description View the pull request
if (options.repos) {
	if (options.pulls) {
		open(options.pulls.html_url)
	} else {
		notify('Pull request not found', 'error', 3000)
	}
} else {
	notify('Repository not found', 'error', 3000)
}
