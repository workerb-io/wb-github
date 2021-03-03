// @description View the workflow
if (options.repos) {
	if (options.workflows) {
		open(options.workflows.html_url)
	}
} else {
	notify('Repository not found', 'error', 3000)
}
