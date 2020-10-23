open('https://github.com/settings/tokens')

const currentUrl = readURL()

if (currentUrl.indexOf('login') === -1) {
	const tokenName = `workerb-${new Date().getTime()}`

	click('Generate new token', {
		method: 'by_text',
	})

	type(tokenName, '#oauth_access_description', {
		method: 'by_query_selector',
	})

	click('.token-scope input', {
		method: 'by_query_selector',
	})

	click('Generate token', {
		method: 'by_text',
		expectReload: true,
	})

	let newAuthToken = read('#new-oauth-token', {
		method: 'by_query_selector',
	})

	if (!newAuthToken) {
		notify("Access token can't be empty", 'error', 3000)
	} else {
		setVar('github', [
			{
				name: 'accessToken',
				value: newAuthToken,
			},
		])
		notify('Access token added successfully', 'success', 3000)
		reIndex()
	}
} else {
	notify('Please login into your github account first', 'error', 3000)
}
