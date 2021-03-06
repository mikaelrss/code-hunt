import axios from 'axios';


const ROOT_URL = process.env.NODE_ENV === 'development' ? "http://localhost:3001/api/puzzle/" : "/api/puzzle/";


export const postPuzzle = (code, route) => {
    return axios.post(`${ROOT_URL}${route}`, {code});
};