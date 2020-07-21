if (options.repo) {
    if (options.PRs) {
        open(options.PRs.html_url)
    } else if (args[0]) {
        open(options.repo.html_url + "/pulls?q=" + args[0])
    } else {
        open(options.repo.html_url + "/pulls")
    }
} else {
    notify("Repo not found", "error", 3000)
}