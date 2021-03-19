// @description Run the workflow
import { accessToken } from '../../../../../../../utils/constants'

if (options.repos) {
	let ref = prompt('Please insert the git ref for this action?')
	if (!ref) {
		ref = 'master'
	}

	if (options.workflows) {
		const url = `${options.workflows.url}/dispatches`
		const payload = JSON.stringify({
			ref: ref,
		})
		const header = {
			Authorization: 'token ' + accessToken,
		}
		const response = httpPost(url, payload, header)

		if (response.response === '' && response.status === 204) {
			notify('Workflow started successfully!', 'success', 3000)
		} else {
			notify(JSON.stringify(response), 'error', 3000)
		}
	}
} else {
	notify('Repository not found', 'error', 3000)
}
