if (options.repos) {
	open(options.repos.html_url + '/branches')
} else {
	notify('Repository not found', 'error', 3000)
}
