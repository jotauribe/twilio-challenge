import { rest } from 'msw';
import { setupServer } from 'msw/node';
import supertest from 'supertest';

import app from '../app';
import { friendDetailMock, friendsMock, playsDetailsMock } from './mocks';

const username = 'mock_username';

const server = setupServer(
  // describe the requests to mock.
  rest.get(
    `https://mauvelous-leopard-5257.twil.io/friend-detail?username=${username}`,
    (req, res, ctx) => res(ctx.json(friendDetailMock))
  ),
  rest.get(
    `https://mauvelous-leopard-5257.twil.io/plays-detail?username=${username}`,
    (req, res, ctx) => res(ctx.json(playsDetailsMock))
  ),
  rest.get(`https://mauvelous-leopard-5257.twil.io/friends`, (req, res, ctx) =>
    res(ctx.json(friendsMock))
  )
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

describe('/api/users', () => {
  it('should return all users', async () => {
    const response = await supertest(app).get(`/api/users`);

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(3);
    expect(response.body).toEqual(
      expect.arrayContaining(
        friendsMock.friends.map((friend) => expect.objectContaining(friend))
      )
    );
  });
});

describe('/api/users/:username', () => {
  it('should return user details response', async () => {
    const response = await supertest(app).get(`/api/users/mock_username`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('username', 'mock_username');
    expect(response.body.friends).toEqual(friendDetailMock.friends.length);
    expect(response.body.plays).toEqual(playsDetailsMock.plays.length);
    expect(response.body.tracks).toEqual(
      expect.arrayContaining(playsDetailsMock.plays)
    );
  });
});
