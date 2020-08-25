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
    }
}

export default returnOptions
