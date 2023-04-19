import { SavedTrack } from 'spotify-types';

const apiToken: string =
  'BQCZkDqU8RL0wbJl3QbSaTBmnRHbbeOD3GH0yPj7Z56HOHEysr5--9uGjPHIPCSGh2saHkhHz0tZzEXPPrOqj7atHsyRwV6xLv3bKRvm3LqwqB96UE0SBiEvEKutHu09bIUJHNOPXCEkhdaZj-1z2e-FgfAlH_FTEJmTABPlhJg5u6Bsan45AU0vsZN9U7x7c02MqaVZLIEyArwCMJQw_qKWGMLdC9Rk0dLX-p3Sj_vPB3PJAfx94TpTXs6WOuYFLw2u6hvvlimeNa8AK6ca-VNdPsri_7_ZGhCWdH5WYcbm6PisVjMckfiNmA0a_pLndNUInmIij0UjjADzKAwfJDdwjsg';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: SavedTrack[] };

  return data.items;
};
