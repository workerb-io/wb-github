if (options.repos) {
	if (options.pulls) {
		open(options.pulls.html_url)
	} else {
		notify('PR not found', 'error', 3000)
	}
} else {
	notify('Repo not found', 'error', 3000)
}
