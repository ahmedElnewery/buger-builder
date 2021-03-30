import axios from 'axios'
const instance = axios.create({
    baseURL:'https://burge-builder-45c70.firebaseio.com/',

})
export default instance