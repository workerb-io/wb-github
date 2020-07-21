import { apiUrl } from "./constants"


export const getUrl = (endPoint: string) => {
    return apiUrl + endPoint
}

export const decodeApiResponse = (apiRespone: string) => {
    var result = JSON.parse(apiRespone)

    if (!result.response) {
        return {
            response: {},
            status: result.status
        }
    }
    
    return {
        response: JSON.parse(result.response),
        status: result.status
    }
}
