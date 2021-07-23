export const username = 'mock_username';

export const friendDetailMock = {
  friends: [
    'maranda_kjos',
    'jacquetta_hoelscher',
    'garth_coto',
    'leonor_mattis',
  ],
  uri: `/friend-detail?username=${username}`,
};

export const playsDetailsMock = {
  plays: [
    'E75C38C1-E2BB-BAF6-620B-9255D035B693',
    'E75C38C1-E2BB-BAF6-620B-9255D035B693',
    '68B4D809-4B4F-F735-EB92-E5B17C99220B',
  ],
  uri: `/plays/${username}`,
};

export const friendsMock = {
  friends: [
    {
      uri: '/friend-detail?username=antony_cassinelli',
      username: 'antony_cassinelli',
    },
    {
      uri: '/friend-detail?username=asuncion_pimental',
      username: 'asuncion_pimental',
    },
    {
      uri: '/friend-detail?username=belle_trombly',
      username: 'belle_trombly',
    },
  ],
  uri: `/friends`,
};
