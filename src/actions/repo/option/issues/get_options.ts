import { decodeApiResponse, getUrl } from "../../../../utils/helper"
import { accessToken } from '../../../../utils/constants'
let issuesList: any[] = []

if (options.repo) {
    var issuesResponse = httpGet(getUrl(`/repos/${options.repo.owner.login}/${options.repo.name}/issues?per_page=20&_=${new Date().getTime()}`), {
        Authorization: "token " + accessToken
    })
    issuesList = decodeApiResponse(issuesResponse).response
}

export default () => {
    return JSON.stringify(
        issuesList.map(function (pull) {
            return {
                name: "#" + pull.number,
                description: pull.title + "(" + pull.state + ")",
                html_url: pull.html_url,
                user: pull.user
            }
        })
    )
}
