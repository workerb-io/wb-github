if (options.repos) {
	if (options.PRs) {
		open(options.PRs.html_url)
	} else {
		notify('PR not found', 'error', 3000)
	}
} else {
	notify('Repo not found', 'error', 3000)
}
