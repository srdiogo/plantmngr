
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.100.103:3333'
})
// json-server ./src/services/services.json --host 192.168.100.103 --port 3333
export default api;