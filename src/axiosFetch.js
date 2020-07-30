import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://barb-clone.firebaseio.com/'
})

export default instance;