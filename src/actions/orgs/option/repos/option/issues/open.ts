// @description Open all issues
if (options.repos) {
	open(options.repos.html_url + '/issues')
} else {
	notify('Repository not found', 'error', 3000)
}
