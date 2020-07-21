if (options.repo) {
    open(options.repo.html_url + "/issues/new")
    type(args.join(" "), '#issue_title', {method: 'by_query_selector'})
    click("Submit new issue", { expectReload: true })
    notify("issue created", "success", 3000)
} else {
    notify('repo not found', 'error', 3000)
}