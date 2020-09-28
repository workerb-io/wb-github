if (options.issues) {
	let comment: string | null = args.join(' ')
	if (!comment) {
		comment = prompt('Enter the comment')
	}

	if (comment) {
		open(options.issues.html_url)
		type(comment, '#new_comment_field', { method: 'by_query_selector' })
		submit()
		notify('Comment added to the issue', 'success', 3000)
		reIndex(['github', 'repos', options.repos.name, 'issues'])
	}
} else {
	notify('Issue not found', 'error', 3000)
}
