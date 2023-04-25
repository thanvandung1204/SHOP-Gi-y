import { instants } from "."


export const getALl = () => {
    const uri = "/products"
    return instants.get(uri)
}

export const getId = (id) => {
    const uri = "/products/" + id
    return instants.get(uri)
}

export const remove = (id) => {
    const uri = "/products/" + id
    return instants.delete(uri)
}

export const create = (body) => {
    const uri = "/products"
    return instants.post(uri,body)
}

export const update = (id,body) => {
    const uri = "/products/" + id
    return instants.put(uri,body)
}
