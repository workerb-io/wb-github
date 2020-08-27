let accessToken = prompt("Please provide your accessToken")

if (!accessToken) {
    notify("accessToken can't be empty", "error", 3000)
}

setVar('github', [{
    name: 'accessToken',
    value: accessToken
}])

reIndex(["github"])
