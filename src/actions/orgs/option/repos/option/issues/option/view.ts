if (options.repos) {
	if (options.issues) {
		open(options.issues.html_url)
	}
} else {
	notify('Repository not found', 'error', 3000)
}
