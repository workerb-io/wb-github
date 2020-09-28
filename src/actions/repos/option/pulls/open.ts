if (options.repos) {
	open(options.repos.html_url + '/pulls')
} else {
	notify('Repositorynot found', 'error', 3000)
}
