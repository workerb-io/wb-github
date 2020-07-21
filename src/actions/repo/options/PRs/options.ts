import { decodeApiResponse, getUrl } from "../../../../utils/helper"
import { accessToken } from '../../../../utils/constants'

let pullsList: any[] = []

if (options.repo) {
    var repoResponse = httpGet(getUrl("/repos/" + options.repo.owner.login + "/" + options.repo.name + "/pulls?per_page=100"), {
        Authorization: "token " + accessToken
    })
    
    pullsList = decodeApiResponse(repoResponse).response
}

export default () => {
    return JSON.stringify(
        pullsList.map(function (pull: any) {
            return {
                name: "#" + pull.number,
                description: pull.title + "(" + pull.state + ")",
                html_url: pull.html_url,
                user: pull.user
            }
        })
    )
}
