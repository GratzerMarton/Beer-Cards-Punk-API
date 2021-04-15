import { endpoint } from "../constants"


export async function consumeAPI<T>() {
    let response
    try {
        response = await fetch(endpoint)
        response = await response.json()
    }
    catch (e) {
        //TODO ERROR HANDLING, NOW only console loggin, this would display a reload button maybe
        console.error(e)
    }
    return response
}