import axios from 'axios';

const baseURL = 'https://mauvelous-leopard-5257.twil.io';
const http = axios.create({ baseURL });

const getFriendsOf = async function getFriendOf(username) {
  const { data } = await http.get(`/friend-detail?username=${username}`);
  return data?.friends || [];
};

const getAllFriends = async function getAllFriends() {
  const { data } = await http.get(`/friends`);
  return data?.friends || [];
};

export default { getFriendsOf, getAllFriends };
