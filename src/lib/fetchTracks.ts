import { SavedTrack } from 'spotify-types';

const apiToken: string =
  'BQCm8tzZCEU5ek4r7DJEp-B2VSo08YWorgv1EClmgTtP8Z2mtOxt-PP9EnxIpY6Dt4GsPycIAGYNBSqgA_p-j1wL_tQbdg-HyPIbMrEahDi3Nj0R1YeC9OCSWQ64xo15xqxQl8viG5Cl94veQiClJ5hrM0t9XFEXPESHNnxlxXTgsEmcgT-epZm1da3TxxCnzsHFPTFmZQ3f7D72vAR10z9RXcPKjZ_HjCM-xo8f0IJQQqCTdvtqnASw-nca0KQmLxstLDTSrv5eH1BrKnw2jm4_YziggfW8Kr_AO0E19gJIZdJAONoeX0HxjkPCT8yprouy3iPtb9qtYyPRMtJh7m_NmRQ';

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
