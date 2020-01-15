import axios from 'axios'
const url = 'http://localhost:3001/api/messages'

const getAll = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const post = newMessage => {
    const request = axios.post(url, newMessage)
    return request.then(response => response.data)
}

export default { getAll, post }