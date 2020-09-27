if (options.repos) {
	if (options.issues) {
		open(options.issues.html_url)
	} else if (args[0]) {
		open(options.repos.html_url + '/issues?q=' + args[0])
	} else {
		open(options.repos.html_url + '/issues')
	}
} else {
	notify('Repo not found', 'error', 3000)
}
