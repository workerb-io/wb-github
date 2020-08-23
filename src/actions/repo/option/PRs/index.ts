if (options.repo) {
    if (args[0]) {
        open(options.repo.html_url + "/pulls?q=" + args[0])
    } else {
        open(options.repo.html_url + "/pulls")
    }
} else {
    notify("Repo not found", "error", 3000)
}