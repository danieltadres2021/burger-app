import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-1a90c-default-rtdb.firebaseio.com/'
})

export default instance;