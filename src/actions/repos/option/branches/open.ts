if (options.repos) {
	open(options.repos.html_url + '/branches')
} else {
	notify('Repo not found', 'error', 3000)
}
