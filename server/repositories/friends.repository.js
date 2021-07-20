import axios from 'axios';

const baseURL = 'https://mauvelous-leopard-5257.twil.io';
const http = axios.create({ baseURL });

const getFriends = async function getFriendOf(username) {
  const { data } = await http.get(`/friend-detail?username=${username}`);
  return data?.friends || [];
};

export default { getFriends };
