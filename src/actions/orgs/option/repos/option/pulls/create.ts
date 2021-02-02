// @description Create a pull request
if (options.repos) {
	open(options.repos.html_url + '/compare/' + args[1] + '...' + args[0] + '?expand=1')
	var description = readAll('.commit-message')
	var descriptionText = description.join('\n')
	type(descriptionText, '#pull_request_body', { method: 'by_query_selector' })
	click('Create pull request', {})
	notify('Pull request created', 'success', 3000)
	reIndex(['repos', options.repos.name, 'pulls'])
} else {
	notify('Repository not found', 'error', 3000)
}
