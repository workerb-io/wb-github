// @description Run the workflow
if (options.repos) {
	log(options)
	if (options.workflows) {
		const htmlUrl = options.workflows.html_url
		const splittedUrl = htmlUrl.split('/')
		const ymlFileName = splittedUrl[splittedUrl.length - 1]
		// open the currently selected workflow.
		open(`${options.repos.html_url}/actions/workflows/${ymlFileName}`)

		// click on the run workflow dropdown
		click('/html/body/div[4]/div/main/div[2]/div/div/div/div[2]/div[5]/div[2]/details/summary', {
			method: 'by_xpath',
		})

		// click on the run workflow item
		click('/html/body/div[4]/div/main/div[2]/div/div/div/div[2]/div[5]/div[2]/details/div/div/div/form[2]/button', {
			method: 'by_xpath',
		})
	}
} else {
	notify('Repository not found', 'error', 3000)
}
