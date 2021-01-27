const returnOptions = () => {
	return JSON.stringify({
		remove: options.orgs ? options.orgs.type === 'User' ? [] : ['remove'] : []
	});
}

export default returnOptions
