import axios from "axios";
const URL = "http://localhost:5000";

async function createUser(user) {
  await axios.post(`${URL}/users`, user);
}

const api={createUser};

export default api;