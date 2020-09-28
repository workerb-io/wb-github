if (options.repos) {
	open(options.repos.html_url + '/branches')
} else {
	notify('Repositorynot found', 'error', 3000)
}
