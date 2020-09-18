if (options.repo) {
    if (options.issues) {
        open(options.issues.html_url)
    } else if (args[0]) {
        open(options.repo.html_url + "/issues?q=" + args[0])
    } else {
        open(options.repo.html_url + "/issues")
    }
} else {
    notify("Repo not found", "error", 3000)
}