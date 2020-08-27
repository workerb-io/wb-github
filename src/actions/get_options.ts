import { accessToken } from '../utils/constants'

const returnOptions = () => {
    if (!accessToken) {
        return JSON.stringify(
            {
                remove: [
                    { name: "repo" }
                ]
            }
        )
    } else {
        return JSON.stringify(
            {
                remove: [
                    { name: "setup" }
                ]
            }
        )
    }
}

export default returnOptions
