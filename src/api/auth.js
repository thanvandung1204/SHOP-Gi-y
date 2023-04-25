import { instants } from "."

export const signup = (body) => {
    const uri = ("/user")
    return instants.post(uri,body)
}

export const signin = (body) => {
    const uri = ("/user")
    return instants.post(uri,body)
}