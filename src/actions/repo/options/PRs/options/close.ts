if (options.PRs) {
    open(options.PRs.html_url)
    click("Close pull request")
    notify("PR closed", "success", 3000)
} else {
    notify("PR not found", "error", 3000)
}