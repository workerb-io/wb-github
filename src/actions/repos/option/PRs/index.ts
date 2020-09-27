if (options.repos) {
	if (args[0]) {
		open(options.repos.html_url + '/pulls?q=' + args[0])
	} else {
		open(options.repos.html_url + '/pulls')
	}
} else {
	notify('Repo not found', 'error', 3000)
}
