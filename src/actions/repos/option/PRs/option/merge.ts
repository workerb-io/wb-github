if (options.PRs) {
    open(options.PRs.html_url)
    click("Merge pull request")
    click("Confirm merge")
    notify("PR merged", "success", 3000)
    reIndex(["github", "repo", options.repos.name])
    reIndex(["github", "repo", options.repos.name, "PRs"])
} else {
    notify("PR not found", "error", 3000)
}