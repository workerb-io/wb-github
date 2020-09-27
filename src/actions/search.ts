let searchTerm: string | null = args[0]

if (!searchTerm) {
	searchTerm = prompt('What do you want to search for?')
}

if (searchTerm.length > 0) {
	open('https://github.com/search?q=' + searchTerm)
} else {
	open('https://github.com/search')
}
