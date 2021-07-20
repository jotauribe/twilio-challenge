import axios from 'axios';

const baseURL = 'https://mauvelous-leopard-5257.twil.io';
const http = axios.create({ baseURL });

const getPlayHistory = async function getFriendDetailsByUserName(username) {
  const { data } = await http.get(`/plays-detail?username=${username}`);
  return data?.plays || [];
};

export default { getPlayHistory };
