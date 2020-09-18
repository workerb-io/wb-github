open("https://github.com/")

log("opening github", "info")

click('/html/body/div[1]/header/div[6]/details/summary', { method: 'by_xpath'})
click('New repository', { expectReload: true })
click('#repository_name', { method: 'by_query_selector'})

const organisationName = args[1]
let repoName: string | null = args[0]

if (!repoName) {
    log("repo name was not provided asking for repo name", "warning")
    repoName = prompt("provide a valid name for your new repository")
}

let repoNameAsString = repoName as string

type(repoNameAsString, '#repository_name', {method: 'by_query_selector'})

log("checking if organisation name is provided", "info")

if (organisationName) {
    click('[aria-describedby="repository-owner-label"]', {
        method: "by_query_selector"
    })
    click('[data-org-name="' + organisationName + '"]', {
        method: "by_query_selector"
    })
}

log("Creating the repository", "info")

click('Create repository', {
    expectReload: true
})
notify("Repository created", "success", 3000)
reIndex(["github", "repo"])
