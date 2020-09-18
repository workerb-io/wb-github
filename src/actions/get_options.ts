import { accessToken } from '../utils/constants'

const returnOptions = () => {
    if (!accessToken) {
        return JSON.stringify(
            {
                remove: [
                    "repos"
                ]
            }
        )
    } else {
        return JSON.stringify(
            {
                remove: [
                    "setup"
                ]
            }
        )
    }
}

export default returnOptions
