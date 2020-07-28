if (options.repo) {
    open(options.repo.html_url)
} else {
    if (args[0]) {
        open("https://github.com/search?q=" + args[0])
    } else {
        open("https://github.com/search")
    }
}