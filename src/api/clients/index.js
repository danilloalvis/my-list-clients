import { Axios } from '../axios-config'

const list = () => {
    return Axios.get(`customers`)
}

const create = data => {
    return Axios.post(`customers`, data)
}

const update = (id, data) => {
    return Axios.put(`customers/${id}`, data)
}

const remove = id => {
    return Axios.delete(`customers/${id}`)
}

export default { list, create, update, remove }
