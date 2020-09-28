if (options.repos) {
	let searchTerm: string | null = args.join(' ')

	if (!searchTerm) {
		searchTerm = prompt('What do you want to search for?')
	}

	if (searchTerm) {
		open(options.repos.html_url + '/pulls?q=' + searchTerm)
	}
} else {
	notify('Repo not found', 'error', 3000)
}
