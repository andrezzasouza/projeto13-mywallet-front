import axios from "axios";
const URL = "http://localhost:5000";

async function createUser(user) {
  await axios.post(`${URL}/users`, user);
}

async function login(data){
    const token = await axios.post(`${URL}/login`, data);
    return token;
}

const api={createUser, login};

export default api;