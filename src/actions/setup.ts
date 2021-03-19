// @description Setup the Github automation package
open('https://github.com/settings/tokens')

const currentUrl = readURL();

const USER_PERMISSION_ENTITIES: Array<string> = [
	'repo',
	'workflow',
	'write:packages',
	'delete:packages',
	'admin:org',
	'admin:public_key',
	'admin:repo_hook',
	'admin:org_hook',
	'gist',
	'notifications',
	'user',
	'delete_repo',
	'write:discussion',
	'admin:enterprise',
	'admin:gpg_key'
]

if (currentUrl.indexOf('login') === -1) {
	const tokenName = `workerb-${new Date().getTime()}`

	click('Generate new token', {
		method: 'by_text',
	})

	type(tokenName, '#oauth_access_description', {
		method: 'by_query_selector',
	})

	USER_PERMISSION_ENTITIES.forEach(entity => {
		click(`li[data-scope-for='${entity}'] .token-scope input`, {
			method: "by_query_selector"
		});
	});

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
		setVars([
			{
				name: 'accessToken',
				value: newAuthToken,
			},
		], { local: true })
		notify('Access token added successfully', 'success', 3000)
		reIndex([])
	}
} else {
	notify('Please login into your github account first', 'error', 3000)
}
