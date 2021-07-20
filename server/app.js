import express from 'express';

import friendsRepository from './repositories/friends.repository';
import playsRepositoriy from './repositories/plays.repositoriy';
import { unique } from './utils';

const app = express();

app.get('/api/users/:username', async (req, res) => {
  const { username } = req.params;
  const [friends, plays] = await Promise.all([
    friendsRepository.getFriends(username),
    playsRepositoriy.getPlayHistory(username),
  ]);

  const uri = `users/${username}`;
  const tracks = unique(plays);
  res.send({ username, plays: plays.length, friends: friends.length, tracks, uri });
});

export default app;
