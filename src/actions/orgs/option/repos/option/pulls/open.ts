if (options.repos) {
	open(options.repos.html_url + '/pulls')
} else {
	notify('Repository not found', 'error', 3000)
}
