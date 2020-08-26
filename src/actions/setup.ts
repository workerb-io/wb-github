let accessToken = prompt("Please provide your accessToken")
setVar('github', [{
    name: 'accessToken',
    value: accessToken
}])
reIndex(["github","repo"])
