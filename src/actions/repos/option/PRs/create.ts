if (options.repo) {
    open(options.repo.html_url + "/compare/" + args[1] + "..." + args[0] + "?expand=1")
    var description = readAll(".commit-message")
    var descriptionText = description.join("\n")
    log(descriptionText, "blue")
    type(descriptionText, '#pull_request_body', {method: 'by_query_selector'})
    click('Create pull request', {})
    notify("pull request created", "success", 3000)
    reIndex(["github", "repo", options.repo.name, "PRs"])
} else {
    notify('repo not found', 'error', 3000)
}