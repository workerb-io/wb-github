let accessToken = prompt("Please provide your accessToken")

if (!accessToken) {
    notify("accessToken can't be empty", "error", 3000)
} else {
    setVar('github', [{
        name: 'accessToken',
        value: accessToken
    }])
    notify("accessToken added successfully", "success", 3000)
    reIndex()
}
