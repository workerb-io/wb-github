if (options.repos) {
	open(options.repos.html_url + '/pulls')
} else {
	notify('Repo not found', 'error', 3000)
}
