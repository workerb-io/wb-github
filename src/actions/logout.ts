// @description Logout from github automation package
setVars([
	{
		name: 'accessToken',
		value: '',
	},
], { local: true })
notify('Access token removedd successfully', 'success', 3000)
reIndex([])