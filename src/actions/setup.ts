let accessToken = prompt("Access token for your github account")

if (!accessToken) {
    notify("Access token can't be empty", "error", 3000)
} else {
    setVar('github', [{
        name: 'accessToken',
        value: accessToken
    }])
    notify("Access token added successfully", "success", 3000)
    reIndex()
}
