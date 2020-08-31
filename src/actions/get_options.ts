import { accessToken } from '../utils/constants'

const returnOptions = () => {
    if (!accessToken) {
        return JSON.stringify(
            {
                remove: [
                    "repo"
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
