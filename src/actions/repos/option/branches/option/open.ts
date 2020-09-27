if (options.repos) {
	if (options.branches) {
		open(options.branches.html_url)
	} else {
		notify('Branch not found', 'error', 3000)
	}
} else {
	notify('Repo not found', 'error', 3000)
}
