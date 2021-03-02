// @description Open all actions
if (options.repos) {
	open(options.repos.url + '/actions')
} else {
	notify('Repository not found', 'error', 3000)
}
