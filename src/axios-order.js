import axios from 'axios'
const instance=axios.create({
    baseURL:'https://react-burger-66810.firebaseio.com/'
});
export default instance;