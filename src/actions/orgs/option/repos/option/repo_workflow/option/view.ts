// @description View the action
if (options.repos) {
	log(options)
	if (options.repo_workflow) {
		open(options.repo_workflow.html_url)
	}
} else {
	notify('Repository not found', 'error', 3000)
}
